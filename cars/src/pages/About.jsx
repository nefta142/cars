import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";
import Map from "../components/Map";

function About() {
    return (
        <div className="about-main">
            <Header />

            <main className="about-content">

                <section className="about-hero">
                    <h1>About This Project</h1>
                    <p>
                        Car Showcase is a responsive React web application focused on displaying
                        cars by brand using reusable components and modern UI patterns.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Project Purpose</h2>
                    <p>
                        The goal of this project is to demonstrate knowledge of React,
                        component-based architecture, routing, dynamic rendering from JSON data,
                        and responsive design using Flexbox and media queries.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Location</h2>
                    <p>Example map integration using Leaflet (React-Leaflet). This section demonstratesa third-party component.</p>
                    <div className="about-map">
                        <Map center={[27.99635496393609, -15.615109926077375]} zoom={12} />
                    </div>
                </section>

                <section className="about-section">
                    <h2>Contact</h2>
                    <p>
                        If you would like to know more about this project, feel free to visit my GitHub profile.
                    </p>
                    <a href="https://github.com/nefta142/">Visit GitHub</a>
                </section>

            </main>

            <Footer />
        </div>
    );
}

export default About;
