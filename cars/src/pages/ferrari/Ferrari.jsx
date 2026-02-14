import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/car-card/CarCard";
import { cars } from "../../data/cars";
import "./Ferrari.css";

function Ferrari() {
    const FerrariCars = cars.filter((c) => c.brand === "Ferrari");

    return (
        <div className="ferrari-layout">
            <Header />

            <main className="ferrari-content">
                <div className="ferrari-head">
                    <h1 className="ferrari-title">Ferrari</h1>
                </div>

                <div className="ferrari-grid">
                    {FerrariCars.map((car) => (
                        <CarCard key={car.id} car={car} variant="grid" />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Ferrari;