/* import firebase from 'firebase/app'; */
import { initializeApp } from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD4-ph_mTfgoHA8e1mER1fv6RtJyvEbfn8",
    authDomain: "fb-crud-react-6c21f.firebaseapp.com",
    projectId: "fb-crud-react-6c21f",
    storageBucket: "fb-crud-react-6c21f.appspot.com",
    messagingSenderId: "728128501816",
    appId: "1:728128501816:web:60013fed724179a2a2cecd"
};
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = app.firestore();
