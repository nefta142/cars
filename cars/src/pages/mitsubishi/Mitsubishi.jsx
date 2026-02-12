import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/car-card/CarCard";
import { cars } from "../../data/cars";

function Mitsubishi(){
    const mitsubishiCars = cars.filter(c=> c.brand === "Mitsubishi");

    return(
            <div className="mitsubishi-layout">
                <Header />

                <main className="mitsubishi-content">
                    <h2>Mitsubishi</h2>
                    <div className="grid">
                        {mitsubishiCars.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                </main>

                <Footer />
            </div>
    )
}

export default Mitsubishi;