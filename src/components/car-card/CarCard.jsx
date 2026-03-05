import "./CarCard.css";

function CarCard({ car, variant="row" }) {
    return (
        <article className={`car-card ${variant}`}>
            <div className="car-card-content">
                <h3 className="car-card-brand">{car.brand}</h3>
                <h3 className="car-card-model">{car.model}</h3>
                <p className="car-card-year">{car.year}</p>
            </div>
            <div className="car-card-media">
                <img src={car.image} alt={`${car.brand} ${car.model}`} />
            </div>
            
        </article>
    );
}

export default CarCard;
