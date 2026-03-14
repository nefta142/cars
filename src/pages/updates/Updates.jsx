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
                    <div className="updates-content" id="mobile-header">
                        <h2 className="content-title">Improved mobile header navigation</h2>
                        <p className="update-date">March 2026</p>
                        <p className="content-text">
                            The header navigation was improved for mobile devices by implementing a
                            responsive dropdown menu. This allows users to easily navigate through
                            the different car brand pages on smaller screens.
                        </p>
                    </div>
                    <div className="updates-content" id="rss-support">
                        <h2 className="content-title">Added RSS page and feed support</h2>
                        <p className="update-date">March 2026</p>
                        <p className="content-text"> 
                            A new RSS page was added to the application together with a custom RSS
                            feed. This feed provides updates about the latest improvements made in
                            the project and links directly to relevant sections of the application.
                            </p>
                    </div>
                    <div className="updates-content" id="firebase-hosting">
                        <h2 className="content-title">Deployed project to Firebase Hosting</h2>
                        <p className="update-date">March 2026</p>
                        <p className="content-text">
                            The application was successfully deployed using Firebase Hosting,
                            allowing the project to be accessed online. This makes the project
                            publicly available and improves the testing and demonstration process.
                        </p>
                    </div>
                    <div className="updates-content" id="brand-styling">
                        <h2 className="content-title">Updated car brand page's styling</h2>
                        <p className="update-date">March 2026</p>
                        <p className="content-text">
                            Visual improvements were made to the car brand pages to create a more
                            consistent and modern design. Layout spacing, typography and card
                            styling were adjusted to improve readability and user experience.
                        
                        </p>
                    </div>
                    <div className="updates-content" id="chat-crud">
                        <h2 className="content-title">Improved chat CRUD user experience</h2>
                        <p className="update-date">March 2026</p>
                        <p className="content-text">
                            The chat component was updated to improve the user interaction when
                            creating, editing and deleting messages. The layout was refined and
                            actions are now clearer and easier to use.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Updates;