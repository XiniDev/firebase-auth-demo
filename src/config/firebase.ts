// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider } from "firebase/auth";
import { Analytics, getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGJyJnYYeD1f8DFYchtQBiFiHtv_9e_ro",
    authDomain: "tutoring-central.firebaseapp.com",
    projectId: "tutoring-central",
    storageBucket: "tutoring-central.appspot.com",
    messagingSenderId: "363383635962",
    appId: "1:363383635962:web:a39ead071a192055bc2e43",
    measurementId: "G-8QN5RFW6QC"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);

const auth: Auth = getAuth(app);
const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();

export { auth, googleProvider };