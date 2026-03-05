import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./AuthPage.css"
import AuthForm from "../../components/auth/AuthForm";

function AuthPage() {
    return (
        <>
            <div className="auth-main">
                <Header />
                <main className="auth-page">
                    <AuthForm />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default AuthPage;