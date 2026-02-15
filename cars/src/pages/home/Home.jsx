import { useRef } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/car-card/CarCard";
import { cars } from "../../data/cars";
import "./Home.css";

function CarRow({ title, items }) {
    const rowRef = useRef(null);

    const scroll = (dir) => {
        if (!rowRef.current) return;
        const amount = 520;
        rowRef.current.scrollBy({ left: dir * amount, behavior: "smooth" });
    };

    return (
        <section className="home-section">
            <div className="row-head">
                <h2>{title}</h2>

                <div className="row-controls">
                    <button className="row-btn" type="button"onClick={() => scroll(-1)}aria-label={`Scroll ${title} left`}>‹</button>
                    <button className="row-btn" type="button" onClick={() => scroll(1)} aria-label={`Scroll ${title} right`}>›</button>
                </div>
            </div>

            <div className="cars-row" ref={rowRef}>
                {items.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </section>
    );
}

function Home() {
    const featured = (brand) => cars.filter((c) => c.brand === brand).slice(0, 5);

    return (
        <div className="home-layout">
            <Header />

            <main className="home-content">
                <CarRow title="Ford destacados" items={featured("Ford")} />
                <CarRow title="Toyota destacados" items={featured("Toyota")} />
                <CarRow title="Subaru destacados" items={featured("Subaru")} />
                <CarRow title="Porsche destacados" items={featured("Porsche")} />
                <CarRow title="Mitsubishi destacados" items={featured("Mitsubishi")} />
                <CarRow title="Ferrari destacados" items={featured("Ferrari")} />
            </main>

            <Footer />
        </div>
    );
}

export default Home;