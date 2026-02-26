import { useEffect, useMemo, useRef, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../services/firebase/firebase";
import {
    addDoc,
    collection,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
} from "firebase/firestore";
import "./ChatPage.css";

function ChatPage() {
    const { user } = useAuth();

    const [isLoading, setIsLoading] = useState(true);
    const [messages, setMessages] = useState([]);

    const [channel, setChannel] = useState("General"); 
    const [search, setSearch] = useState(""); 
    const [text, setText] = useState("");

    const listRef = useRef(null);

    const channels = useMemo(
        () => ["General", "Ford", "Toyota", "Subaru", "Porsche", "Mitsubishi", "Ferrari"],
        []
    );

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));

        const unsub = onSnapshot(
            q,
            (snap) => {
                const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
                setMessages(data);
                setIsLoading(false);
            },
            () => {
                setIsLoading(false);
            }
        );

        return () => unsub();
    }, []);

    const filteredMessages = useMemo(() => {
        const s = search.trim().toLowerCase();

        return messages.filter((m) => {
            const matchChannel = channel ? m.channel === channel : true;
            const matchSearch =
                s === ""
                    ? true
                    : (m.text || "").toLowerCase().includes(s) ||
                    (m.userEmail || "").toLowerCase().includes(s);

            return matchChannel && matchSearch;
        });
    }, [messages, channel, search]);

    useEffect(() => {
        if (!listRef.current) return;
        listRef.current.scrollTop = listRef.current.scrollHeight;
    }, [filteredMessages.length]);

    const sendMessage = async (e) => {
        e.preventDefault();
        const clean = text.trim();
        if (!clean) return;

        await addDoc(collection(db, "messages"), {
            text: clean,
            channel,
            userEmail: user.email,
            createdAt: serverTimestamp(),
        });

        setText("");
    };

    return (
        <div className="chat-layout">
            <Header />

            <main className="chat-content">
                <div className="chat-head">
                    <div>
                        <h1 className="chat-title">Community Chat</h1>
                        <p className="chat-subtitle">
                            Logged as <strong>{user.email}</strong>
                        </p>
                    </div>
                </div>

                <div className="chat-controls">
                    <label className="chat-label">
                        Channel
                        <select
                            className="chat-select"
                            value={channel}
                            onChange={(e) => setChannel(e.target.value)}
                        >
                            {channels.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="chat-label">
                        Search
                        <input
                            className="chat-search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search messages..."
                        />
                    </label>
                </div>

                <div className="chat-box" ref={listRef}>
                    {isLoading ? (
                        <p className="chat-state">Loading messages...</p>
                    ) : filteredMessages.length === 0 ? (
                        <p className="chat-state">No messages yet in this channel.</p>
                    ) : (
                        filteredMessages.map((m) => (
                            <div
                                key={m.id}
                                className={`chat-msg ${m.userEmail === user.email ? "mine" : ""}`}
                            >
                                <div className="chat-meta">
                                    <span className="chat-user">{m.userEmail}</span>
                                    <span className="chat-time">
                                        {m.createdAt?.toDate ? m.createdAt.toDate().toLocaleString() : ""}
                                    </span>
                                </div>
                                <p className="chat-text">{m.text}</p>
                            </div>
                        ))
                    )}
                </div>

                <form className="chat-form" onSubmit={sendMessage}>
                    <input
                        className="chat-input"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder={`Message in ${channel}...`}
                    />
                    <button className="chat-send" type="submit" disabled={!text.trim()}>
                        Send
                    </button>
                </form>
            </main>

            <Footer />
        </div>
    );
}

export default ChatPage;