import "./CarCard.css";
import { carImages } from "../../data/car-images";

function CarCard({ car, variant = "row" }) {
    const imageSrc = carImages[car.imageKey];

    return (
        <article className={`car-card ${variant}`}>
            <div className="car-card-content">
                <h3 className="car-card-brand">{car.brand}</h3>
                <h3 className="car-card-model">{car.model}</h3>
                <p className="car-card-year">{car.year}</p>
            </div>

            <div className="car-card-media">
                <img src={imageSrc} alt={`${car.brand} ${car.model}`} />
            </div>
        </article>
    );
}

export default CarCard;