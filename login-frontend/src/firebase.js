// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4XHp7sCW47D07vemuF7PWA5FezAgsNOw",
    authDomain: "cloudace-login.firebaseapp.com",
    projectId: "cloudace-login",
    storageBucket: "cloudace-login.appspot.com",
    messagingSenderId: "389133228023",
    appId: "1:389133228023:web:6932c4aa217d74a04740f2",
    measurementId: "G-WJ1PF7GBQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
