import Header from "../components/Header";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";

function Subaru(){
    const subaruCars = cars.filter(c => c.brand === "Subaru");

    return (
        <div className="home-layout">
            <Header />

            <main className="home-content">
                <h2>Subaru</h2>
                <div className="grid">
                    {subaruCars.map(car => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Subaru;