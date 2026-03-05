import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/car-card/CarCard";
import { cars } from "../../data/cars";
import "./Toyota.css";

function Toyota() {
    const toyotaCars = cars.filter((c) => c.brand === "Toyota");

    return (
        <div className="toyota-layout">
            <Header />

            <main className="toyota-content">
                <div className="toyota-head">
                    <h1 className="toyota-title">Toyota</h1>
                </div>

                <div className="toyota-grid">
                    {toyotaCars.map((car) => (
                        <CarCard key={car.id} car={car} variant="grid" />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Toyota;