import { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { db, auth } from "../../services/firebase/firebase";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, limit, doc, updateDoc } from "firebase/firestore";
import "./Chat.css";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

function Chat() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

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
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "asc"),
            limit(100)
        );

        const unsub = onSnapshot(
            q,
            (snap) => {
                const data = snap.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setMessages(data);
                setIsLoading(false);
            },
            (err) => {
                console.error("Firestore error:", err);
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

        if (!user) {
            navigate("/auth", {
                state: { from: location.pathname },
            });
            return;
        }

        await addDoc(collection(db, "messages"), {
            text: clean,
            channel,
            userEmail: user.email,
            createdAt: serverTimestamp(),
        });

        setText("");
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error("Logout error:", err);
        }
    };

    const handleDeleteMessage = async (messageId, messageUserEmail) => {
        if (!user) return;
        if (user.email !== messageUserEmail) return;

        try {
            await updateDoc(doc(db, "messages", messageId), {
                text: "Mensaje eliminado",
                deleted: true,
            });
        } catch (err) {
            console.error("Delete message error:", err);
        }
    };

    return (
        <div className="chat-layout">
            <main className="chat-content">
                <div className="chat-head">
                    <h1 className="chat-title">Community Chat</h1>
                    <p className="chat-subtitle">
                        {user ? (
                            <>
                                Logged as <strong>{user.email}</strong>
                                <button className="chat-logout" onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <Link to="/auth"><>You can read messages. Log in to send one.</></Link>
                        )}
                    </p>
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
                                <option key={c}>{c}</option>
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
                        <p className="chat-state">Connecting to chat...</p>
                    ) : filteredMessages.length === 0 ? (
                        <p className="chat-state">No messages yet in this channel.</p>
                    ) : (
                        filteredMessages.map((m) => (
                            <div
                                key={m.id}
                                className={`chat-msg ${user && m.userEmail === user.email ? "mine" : ""}`}
                            >
                                <div className="chat-meta">
                                    <span className="chat-user">{m.userEmail}</span>
                                    <span className="chat-time">
                                        {m.createdAt?.toDate
                                            ? m.createdAt.toDate().toLocaleString()
                                            : ""}
                                    </span>
                                </div>

                                <p className={`chat-text ${m.deleted ? "deleted" : ""}`}>
                                    {m.text}
                                </p>

                                {user && m.userEmail === user.email && !m.deleted && (
                                    <button
                                        className="chat-delete"
                                        onClick={() => handleDeleteMessage(m.id, m.userEmail)}
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                        ))
                    )}
                </div>

                <form className="chat-form" onSubmit={sendMessage}>
                    <input
                        className="chat-input"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder={
                            user ? `Message in ${channel}...` : "Log in to send a message..."
                        }
                    />
                    <button
                        className="chat-send"
                        type="submit"
                        disabled={!text.trim()}
                    >
                        Send
                    </button>
                </form>
            </main >
        </div >
    );
}

export default Chat;