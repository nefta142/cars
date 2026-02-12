import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/car-card/CarCard";
import { cars } from "../../data/cars";

function Toyota() {
    const toyotaCars = cars.filter(c => c.brand === "Toyota");

    return (
        <div className="toyota-layout">
            <Header />

            <main className="toyota-content">
                <h2>Toyota</h2>
                <div className="grid">
                    {toyotaCars.map(car => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Toyota;