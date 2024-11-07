import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA0DK2zc5wdgCrBjAe-jwlyi_vpRIXF88E",
    authDomain: "elahes-resume-react.firebaseapp.com",
    projectId: "elahes-resume-react",
    storageBucket: "elahes-resume-react.firebasestorage.app",
    messagingSenderId: "897095871893",
    appId: "1:897095871893:web:04753ee4306566d899da9c",
    measurementId: "G-3LWJYX2YGX"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);


export { db };