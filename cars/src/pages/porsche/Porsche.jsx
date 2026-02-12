import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/car-card/CarCard";
import { cars } from "../../data/cars";

function Porsche(){
    const porshceCars = cars.filter(c=> c.brand ==="Porsche");
    return(
        <div className="porsche-layout">
            <Header />

            <main className="porsche-content">
                <h2>Porsche</h2>
                <div className="grid">
                    {porshceCars.map(car => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}
export default Porsche;