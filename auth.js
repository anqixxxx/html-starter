// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
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

// Login function
function login(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // Redirect to the specific page
      window.location.href = 'https://ppheartrate-5im9qopxv-anqis-projects-d8885076.vercel.app/';
    })
    .catch((error) => {
      var errorMessage = error.message;
      document.getElementById('loginError').innerText = errorMessage;
      document.getElementById('loginError').style.display = 'block';
    });
}

// Sign Up function
function signUp(event) {
  event.preventDefault();
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      var user = userCredential.user;
      // Redirect to the specific page
      window.location.href = 'https://ppheartrate-5im9qopxv-anqis-projects-d8885076.vercel.app/';
    })
    .catch((error) => {
      var errorMessage = error.message;
      document.getElementById('signUpError').innerText = errorMessage;
      document.getElementById('signUpError').style.display = 'block';
    });
}

// Google login function
function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // Google sign-in successful
      window.location.href = 'https://ppheartrate-5im9qopxv-anqis-projects-d8885076.vercel.app/';
    })
    .catch((error) => {
      document.getElementById('loginError').innerText = "Google login failed: " + error.message;
      document.getElementById('loginError').style.display = 'block';
    });
}

document.getElementById('loginForm').addEventListener('submit', login);
document.getElementById('signUpForm').addEventListener('submit', signUp);
