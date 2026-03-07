import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Rss.css";

function Rss() {
    const rssLinks = [
        {
            id: 1,
            title: "RSS propio del proyecto",
            url: "https://cars-11cf6.web.app/rss.xml",
            description:
                "Feed RSS del proyecto Car Showcase con enlaces a las secciones principales de la aplicación.",
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
                                Abrir RSS
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