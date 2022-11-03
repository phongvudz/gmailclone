import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5coTE3F1PG8fF-WQmURDASPwyNxywNAk",
  authDomain: "clone-f8430.firebaseapp.com",
  projectId: "clone-f8430",
  storageBucket: "clone-f8430.appspot.com",
  messagingSenderId: "1095265286186",
  appId: "1:1095265286186:web:605eeecec661c9465feb53",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
