import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/car-card/CarCard";
import { cars } from "../../data/cars";
import "./Ford.css";

function Ford() {
    const fordCars = cars.filter((c) => c.brand === "Ford");

    return (
        <div className="ford-layout">
            <Header />

            <main className="ford-content">
                <div className="ford-head">
                    <h1 className="ford-title">Ford</h1>
                </div>

                <div className="ford-grid">
                    {fordCars.map((car) => (
                        <CarCard key={car.id} car={car} variant="grid" />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Ford;