import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Rss.css";

function Rss() {

    const rssLinks = [
        {
            id: 1,
            title: "Project RSS Feed (XML)",
            url: "https://cars-11cf6.web.app/rss.xml",
            description:
                "Direct XML feed containing the latest updates of the Car Showcase project.",
        },
        {
            id: 2,
            title: "RSS Feed Viewer",
            url: "https://rssatom.com",
            description:
                "Online RSS reader displaying the feed items and linking to the updates page of the application.",
        },
    ];

    return (
        <div className="rss-layout">
            <Header />

            <main className="rss-content">
                <section className="rss-hero">
                    <h1>RSS del proyecto</h1>
                    <p>
                        En esta página se recopilan los enlaces RSS relacionados con la
                        aplicación Car Showcase. El objetivo es ofrecer una fuente de
                        información sindicada sobre el contenido del proyecto.
                    </p>
                </section>

                <section className="rss-list">
                    {rssLinks.map((item) => (
                        <article className="rss-card" key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <a href={item.url} target="_blank" rel="noreferrer">
                                Open link
                            </a>
                        </article>
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Rss;