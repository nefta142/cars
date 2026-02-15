import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/car-card/CarCard";
import { cars } from "../../data/cars";
import "./Subaru.css";

function Subaru() {
    const subaruCars = cars.filter((c) => c.brand === "Subaru");

    return (
        <div className="subaru-layout">
            <Header />

            <main className="subaru-content">
                <div className="subaru-head">
                    <h1 className="subaru-title">Subaru</h1>
                </div>

                <div className="subaru-grid">
                    {subaruCars.map((car) => (
                        <CarCard key={car.id} car={car} variant="grid" />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Subaru;