import { cars } from "../../data/cars";
import { importCarsToFirestore } from "../../services/firebase/cars-service";

function SeedCars() {
    const handleSeedCars = async () => {
        try {
            await importCarsToFirestore(cars);
            alert("Coches subidos correctamente a Firestore");
        } catch (error) {
            console.error("Error al subir coches:", error);
            alert("Hubo un error al subir los coches");
        }
    };

    return (
        <div>
            <button onClick={handleSeedCars}>
                Subir coches a Firestore
            </button>
        </div>
    );
}

export default SeedCars;