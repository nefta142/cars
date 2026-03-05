import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/car-card/CarCard";
import { cars } from "../../data/cars";
import "./Mitsubishi.css";

function Mitsubishi() {
    const MitsubishiCars = cars.filter((c) => c.brand === "Mitsubishi");

    return (
        <div className="mitsubishi-layout">
            <Header />

            <main className="mitsubishi-content">
                <div className="mitsubishi-head">
                    <h1 className="mitsubishi-title">Mitsubishi</h1>
                </div>

                <div className="mitsubishi-grid">
                    {MitsubishiCars.map((car) => (
                        <CarCard key={car.id} car={car} variant="grid" />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
export default Mitsubishi;