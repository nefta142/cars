import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Updates.css";

function Updates(){
    return(
        <>
            <Header />
            <main className="updates-main">
                <h2 className="updates-title">Latest 5 changes</h2>
                <div className="updates-grid">
                    <div className="updates-content">
                        <h2 className="content-title">Improved mobile header navigation<p className="update-date"></p></h2>
                        <p className="content-text"></p>
                    </div>
                    <div className="updates-content">
                        <h2 className="content-title">Added RSS page and feed support<p className="update-date"></p></h2>
                        <p className="content-text"></p>
                    </div>
                    <div className="updates-content">
                        <h2 className="content-title">Deployed project to Firebase Hosting<p className="update-date"></p></h2>
                        <p className="content-text"></p>
                    </div>
                    <div className="updates-content">
                        <h2 className="content-title">Updated car brand page's styling<p className="update-date"></p></h2>
                        <p className="content-text"></p>
                    </div>
                    <div className="updates-content">
                        <h2 className="content-title">Improved chat CRUD user experience<p className="update-date"></p></h2>
                        <p className="content-text"></p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Updates;