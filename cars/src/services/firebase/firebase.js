// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCL0nPihudDv0WlsM4WkVKAhWGr4vw9SMw",
    authDomain: "cars-11cf6.firebaseapp.com",
    projectId: "cars-11cf6",
    storageBucket: "cars-11cf6.firebasestorage.app",
    messagingSenderId: "316829398257",
    appId: "1:316829398257:web:59d79b95263ce64e226550",
    measurementId: "G-K89586QCLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);