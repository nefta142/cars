import { useEffect, useState } from "react";
import "./BrandPage.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { getCarsFromFirestore } from "../../services/firebase/cars-service";
import { carImages } from "../../data/car-images";

function BrandPage({ brand }) {
    const [brandCars, setBrandCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBrandCars = async () => {
            try {
                const cars = await getCarsFromFirestore();
                const filteredCars = cars.filter((car) => car.brand === brand);
                setBrandCars(filteredCars);
            } catch (error) {
                console.error("Error loading brand cars:", error);
            } finally {
                setLoading(false);
            }
        };

        loadBrandCars();
    }, [brand]);

    return (
        <>
            <Header />

            <main className="brand-page">
                <h1 className="brand-title">{brand}</h1>

                {loading ? (
                    <p className="brand-loading">Cargando coches...</p>
                ) : (
                    <div className="brand-grid">
                        {brandCars.map((car) => (
                            <article key={car.id} className="brand-card">
                                <img
                                    src={carImages[car.imageKey]}
                                    alt={car.model}
                                    className="brand-image"
                                />

                                <div className="brand-card-content">
                                    <h2 className="brand-model">{car.model}</h2>
                                    <p className="brand-year">{car.year}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </>
    );
}

export default BrandPage;