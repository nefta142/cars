import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/car-card/CarCard";
import { cars } from "../../data/cars";

function Ford() {
    const fordCars = cars.filter(c => c.brand === "Ford");

    return (
        <div className="ford-layout">
            <Header />

            <main className="ford-content">
                <h2>Ford</h2>
                <div className="grid">
                    {fordCars.map(car => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Ford;
