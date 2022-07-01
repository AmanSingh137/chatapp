import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA782L42I1yx11Xqpti1N63ySJ1i012hjI",
  authDomain: "dummy-project-7d371.firebaseapp.com",
  projectId: "dummy-project-7d371",
  storageBucket: "dummy-project-7d371.appspot.com",
  messagingSenderId: "785427877271",
  appId: "1:785427877271:web:d620bcbd5e5302c68f08d2",
  measurementId: "G-0Q98PRV12K",
  // apiKey: process.env.FIRE_KEY,
  // authDomain: process.env.FIRE_DOMAIN,
  // projectId: "dummy-project-7d371",
  // storageBucket: "dummy-project-7d371.appspot.com",
  // messagingSenderId: process.env.FIRE_SENDER,
  // appId: process.env.FIRE_APPID,
  // measurementId: "G-0Q98PRV12K",
});

// Initialize Firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
