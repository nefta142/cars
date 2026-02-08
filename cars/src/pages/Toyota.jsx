import Header from "../components/Header";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";

function Toyota() {
    const toyotaCars = cars.filter(c => c.brand === "Toyota");

    return (
        <div className="home-layout">
            <Header />

            <main className="home-content">
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