import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/car-card/CarCard";
import { cars } from "../../data/cars";

function Subaru(){
    const subaruCars = cars.filter(c => c.brand === "Subaru");

    return (
        <div className="subaru-layout">
            <Header />

            <main className="sunbaru-content">
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