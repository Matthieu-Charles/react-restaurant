import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV3VzoTiXzgREeImFA9sWtwZFD5S5RLdE",
  authDomain: "restaurant-project-3c59b.firebaseapp.com",
  projectId: "restaurant-project-3c59b",
  storageBucket: "restaurant-project-3c59b.appspot.com",
  messagingSenderId: "124382593461",
  appId: "1:124382593461:web:18344300600c5a579dd9fc",
  measurementId: "G-G7D67MP47P",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
