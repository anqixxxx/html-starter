// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDf4yaXsG9ShvlAX4IVdGIPqPAypttqlPI",
    authDomain: "pulsepals-fa684.firebaseapp.com",
    projectId: "pulsepals-fa684",
    storageBucket: "pulsepals-fa684.appspot.com",
    messagingSenderId: "332323808828",
    appId: "1:332323808828:web:926868c9d76ab22a8ac539",
    measurementId: "G-ZLJM10C0BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };
