import {
    collection,
    doc,
    getDocs,
    setDoc,
    writeBatch,
    deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const CARS_COLLECTION = "cars";

export async function getCarsFromFirestore() {
    const snapshot = await getDocs(collection(db, CARS_COLLECTION));

    return snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
    }));
}

export async function saveCarToFirestore(car) {
    const carRef = doc(db, CARS_COLLECTION, car.id);
    await setDoc(carRef, car);
}

export async function importCarsToFirestore(cars) {
    const batch = writeBatch(db);

    cars.forEach((car) => {
        const carRef = doc(db, CARS_COLLECTION, car.id);
        batch.set(carRef, car);
    });

    await batch.commit();
}

export async function replaceCarsInFirestore(cars) {
    const snapshot = await getDocs(collection(db, CARS_COLLECTION));
    const batch = writeBatch(db);

    snapshot.forEach((document) => {
        batch.delete(doc(db, CARS_COLLECTION, document.id));
    });

    cars.forEach((car) => {
        batch.set(doc(db, CARS_COLLECTION, car.id), car);
    });

    await batch.commit();
}

export async function deleteCarFromFirestore(carId) {
    await deleteDoc(doc(db, CARS_COLLECTION, carId));
}

export async function clearCarsFromFirestore() {
    const snapshot = await getDocs(collection(db, CARS_COLLECTION));
    const batch = writeBatch(db);

    snapshot.forEach((document) => {
        batch.delete(doc(db, CARS_COLLECTION, document.id));
    });

    await batch.commit();
}