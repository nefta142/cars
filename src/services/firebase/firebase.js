import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCL0nPihudDv0WlsM4WkVKAhWGr4vw9SMw",
    authDomain: "cars-11cf6.firebaseapp.com",
    projectId: "cars-11cf6",
    storageBucket: "cars-11cf6.appspot.com",
    messagingSenderId: "316829398257",
    appId: "1:316829398257:web:59d79b95263ce64e226550",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);