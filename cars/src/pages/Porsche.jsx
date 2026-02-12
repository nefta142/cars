import Header from "../components/Header";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";

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