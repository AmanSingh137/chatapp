import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIRE_KEY,
  authDomain: process.env.FIRE_DOMAIN,
  projectId: "dummy-project-7d371",
  storageBucket: "dummy-project-7d371.appspot.com",
  messagingSenderId: process.env.FIRE_SENDER,
  appId: process.env.FIRE_APPID,
  measurementId: "G-0Q98PRV12K",
});

// Initialize Firebase
const db = firebaseApp.firestore();

export { db };
