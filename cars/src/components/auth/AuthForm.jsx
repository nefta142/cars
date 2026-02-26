import { useState } from "react";
import { auth } from "../../services/firebase/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { useAuth } from "../../context/AuthContext";
import "./AuthForm.css";

function AuthForm() {
    const { user } = useAuth();

    const [isRegister, setIsRegister] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            if (isRegister) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            setEmail("");
            setPassword("");
        } catch (err) {
            setError(err?.message || "Authentication error");
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
    };

    if (user) {
        return (
            <div className="auth-card">
                <h2 className="auth-title">You are logged in</h2>
                <p className="auth-text">
                    Logged as: <strong>{user.email}</strong>
                </p>

                <button className="auth-btn" type="button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div className="auth-card">
            <h2 className="auth-title">{isRegister ? "Create account" : "Login"}</h2>

            <form className="auth-form" onSubmit={handleSubmit}>
                <label className="auth-label">
                    Email
                    <input
                        className="auth-input"
                        type="email"
                        placeholder="example@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                <label className="auth-label">
                    Password
                    <input
                        className="auth-input"
                        type="password"
                        placeholder="Min 6 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength={6}
                        required
                    />
                </label>

                {error && <p className="auth-error">{error}</p>}

                <button className="auth-btn" type="submit" disabled={isLoading}>
                    {isLoading ? "Please wait..." : isRegister ? "Register" : "Login"}
                </button>
            </form>

            <button
                className="auth-switch"
                type="button"
                onClick={() => setIsRegister((v) => !v)}
            >
                {isRegister ? "Already have an account? Login" : "New user? Register"}
            </button>
        </div>
    );
}

export default AuthForm;