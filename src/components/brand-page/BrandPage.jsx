import { cars } from "../../data/cars";
import "./BrandPage.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function BrandPage({ brand }) {

    const brandCars = cars.filter(car => car.brand === brand);

    return (
        <>
            <Header />
            <main className="brand-page">

                <h1 className="brand-title">{brand}</h1>

                <div className="brand-grid">

                    {brandCars.map(car => (
                        <article key={car.id} className="brand-card">

                            <img
                                src={car.image}
                                alt={car.model}
                                className="brand-image"
                            />

                            <div className="brand-card-content">

                                <h2 className="brand-model">
                                    {car.model}
                                </h2>

                                <p className="brand-year">
                                    {car.year}
                                </p>

                            </div>

                        </article>
                    ))}

                </div>

            </main>
            <Footer />
        </>
    );
}

export default BrandPage;