import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/car-card/CarCard";
import { cars } from "../../data/cars";
import "./Porsche.css";

function Porsche() {
    const PorscheCars = cars.filter((c) => c.brand === "Porsche");

    return (
        <div className="porsche-layout">
            <Header />

            <main className="porsche-content">
                <div className="porsche-head">
                    <h1 className="porsche-title">Porsche</h1>
                </div>

                <div className="porsche-grid">
                    {PorscheCars.map((car) => (
                        <CarCard key={car.id} car={car} variant="grid" />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
export default Porsche;