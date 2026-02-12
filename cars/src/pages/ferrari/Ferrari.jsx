import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/car-card/CarCard";
import { cars } from "../../data/cars";

function Ferrari(){
    const ferrariCars = cars.filter(c=> c.brand === "Ferrari");
    return(
            <div className="ferrari-layout">
                <Header />

                <main className="ferrari-content">
                    <h2>Ferrari</h2>
                    <div className="grid">
                        {ferrariCars.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                </main>

                <Footer />
            </div>
    )
}
export default Ferrari;