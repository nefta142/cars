import Header from "../components/Header";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";

function Ford() {
    const fordCars = cars.filter(c => c.brand === "Ford");

    return (
        <div className="home-layout">
            <Header />

            <main className="home-content">
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
