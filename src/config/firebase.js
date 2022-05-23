import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyBFm1Ga4w2SqrXuHI0IYL2X7gtC6UtFOWY",
    authDomain: "firestore-latvia-project.firebaseapp.com",
    projectId: "firestore-latvia-project",
    storageBucket: "firestore-latvia-project.appspot.com",
    messagingSenderId: "966693207148",
    appId: "1:966693207148:web:5b68228b56c440864eac49",
};

firebase.initializeApp(firebaseConfig); // Initialize Firebaseconst
const firestore = firebase.firestore();
export default firestore; // exporting a firebase.firestore.Firestore object
