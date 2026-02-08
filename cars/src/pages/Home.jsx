import Header from "../components/Header";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";
import "./Home.css";

function Home() {
    const fordFeatured = cars.filter(c => c.brand === "Ford").slice(0, 4);
    const toyotaFeatured = cars.filter(c => c.brand === "Toyota").slice(0, 4);
    return (
        <div className="home-layout">
            <Header />

            <main className="home-content">
                <section className="home-section">
                    <h2>Ford destacados</h2>
                    <div className="cars-row">
                        {fordFeatured.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                    <div className="cars-row">
                        {toyotaFeatured.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Home;
