import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMGJprEfvD7-DaY7cIsu6In8MwCad5PoU",
  authDomain: "instagram-clone-52d7e.firebaseapp.com",
  projectId: "instagram-clone-52d7e",
  storageBucket: "instagram-clone-52d7e.appspot.com",
  messagingSenderId: "1045832866298",
  appId: "1:1045832866298:web:cd02bb4781af47fcd52c43",
  measurementId: "G-GXH8DW0P6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage};

