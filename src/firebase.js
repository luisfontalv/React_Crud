/* import firebase from 'firebase/app'; */
/* import { initializeApp } from "firebase/app" */
/*  import firebase from 'firebase/app'
 import 'firebase/firestore'
 

var firebaseConfig = {
    apiKey: "AIzaSyD4-ph_mTfgoHA8e1mER1fv6RtJyvEbfn8",
    authDomain: "fb-crud-react-6c21f.firebaseapp.com",
    projectId: "fb-crud-react-6c21f",
    storageBucket: "fb-crud-react-6c21f.appspot.com",
    messagingSenderId: "728128501816",
    appId: "1:728128501816:web:60013fed724179a2a2cecd"
};
  
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db =fb.firestore(); */

// Import the functions you need from the SDKs you need
/* import { initializeApp } from "firebase/compat/app"; */
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
/* import 'firebase/firestore'; */



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4-ph_mTfgoHA8e1mER1fv6RtJyvEbfn8",
  authDomain: "fb-crud-react-6c21f.firebaseapp.com",
  projectId: "fb-crud-react-6c21f",
  storageBucket: "fb-crud-react-6c21f.appspot.com",
  messagingSenderId: "728128501816",
  appId: "1:728128501816:web:60013fed724179a2a2cecd"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();



