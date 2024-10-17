import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO3ITGBZ8m7rlLxDfPknxF7U-KS3m3eLc",
  authDomain: "food-recipe-react-4cb86.firebaseapp.com",
  projectId: "food-recipe-react-4cb86",
  storageBucket: "food-recipe-react-4cb86.appspot.com",
  messagingSenderId: "732972066702",
  appId: "1:732972066702:web:95f86292eafcf38b8b26df",
  measurementId: "G-T0GYR25MH2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };
