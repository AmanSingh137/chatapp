import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAw2GwaEYvFmhmTFfs-awB9LmLXySFS15Q",
  authDomain: "lf-dummy-374bb.firebaseapp.com",
  projectId: "lf-dummy-374bb",
  storageBucket: "lf-dummy-374bb.appspot.com",
  messagingSenderId: "780435867737",
  appId: "1:780435867737:web:4108388d61e3e442970948",
  measurementId: "G-FTL8BVYXZW"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = getStorage(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db, storage };