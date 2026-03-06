import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { auth } from "../../services/firebase/firebase";
import "./AuthPage.css";

function AuthPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const redirectTo = location.state?.from || "/home";

    const [mode, setMode] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const cleanEmail = email.trim();
        const cleanPassword = password.trim();
        const cleanConfirmPassword = confirmPassword.trim();

        if (!cleanEmail || !cleanPassword) {
            setError("Please complete all required fields.");
            return;
        }

        if (mode === "register") {
            if (cleanPassword.length < 6) {
                setError("Password must be at least 6 characters.");
                return;
            }

            if (cleanPassword !== cleanConfirmPassword) {
                setError("Passwords do not match.");
                return;
            }
        }

        try {
            setIsSubmitting(true);

            if (mode === "login") {
                await signInWithEmailAndPassword(auth, cleanEmail, cleanPassword);
            } else {
                await createUserWithEmailAndPassword(auth, cleanEmail, cleanPassword);
            }

            navigate(redirectTo, { replace: true });
        } catch (err) {
            console.error(err);

            switch (err.code) {
                case "auth/invalid-credential":
                case "auth/wrong-password":
                case "auth/user-not-found":
                    setError("Invalid email or password.");
                    break;
                case "auth/email-already-in-use":
                    setError("This email is already registered.");
                    break;
                case "auth/invalid-email":
                    setError("Invalid email address.");
                    break;
                case "auth/weak-password":
                    setError("Password is too weak.");
                    break;
                default:
                    setError("Something went wrong. Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="auth-layout">
            <Header />

            <main className="auth-content">
                <section className="auth-card">
                    <div className="auth-switch">
                        <button
                            type="button"
                            className={mode === "login" ? "active" : ""}
                            onClick={() => {
                                setMode("login");
                                setError("");
                            }}
                        >
                            Log in
                        </button>

                        <button
                            type="button"
                            className={mode === "register" ? "active" : ""}
                            onClick={() => {
                                setMode("register");
                                setError("");
                            }}
                        >
                            Sign up
                        </button>
                    </div>

                    <h1>{mode === "login" ? "Welcome back" : "Create your account"}</h1>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <label>
                            Email
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                            />
                        </label>

                        <label>
                            Password
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </label>

                        {mode === "register" && (
                            <label>
                                Confirm password
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Repeat your password"
                                />
                            </label>
                        )}

                        {error && <p className="auth-error">{error}</p>}

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting
                                ? "Please wait..."
                                : mode === "login"
                                    ? "Log in"
                                    : "Create account"}
                        </button>
                    </form>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default AuthPage;