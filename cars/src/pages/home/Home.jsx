import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/car-card/CarCard";
import { cars } from "../../data/cars";
import "./Home.css";

function Home() {
    const fordFeatured = cars.filter(c => c.brand === "Ford").slice(0, 4);
    const toyotaFeatured = cars.filter(c => c.brand === "Toyota").slice(0, 4);
    const subaruFeatured = cars.filter(c=> c.brand === "Subaru").slice(0,4);
    const porscheFeatured = cars.filter(c=> c.brand === "Porsche").slice(0,4);
    const mitsubishiFeatured = cars.filter(c=> c.brand === "Mitsubishi").slice(0,4);
    const ferrariFeatured = cars.filter(c=> c.brand === "Ferrari").slice(0,4);
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
                    <h2>Toyota destacados</h2>
                    <div className="cars-row">
                        {toyotaFeatured.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                    <h2>Subaru destacados</h2>
                    <div className="cars-row">
                        {subaruFeatured.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                    <h2>Porsche destacados</h2>
                    <div className="cars-row">
                        {porscheFeatured.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                    <h2>Mitsubishi destacados</h2>
                    <div className="cars-row">
                        {mitsubishiFeatured.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                    <h2>Ferrari destacados</h2>
                    <div className="cars-row">
                        {ferrariFeatured.map(car => (
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
