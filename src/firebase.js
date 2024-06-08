import MyFirebase from "firebase/compat/app";
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDWpfZncdf742diLhMU6YJ08RalSxqVajk",
  authDomain: "to-do-app-795ba.firebaseapp.com",
  projectId: "to-do-app-795ba",
  storageBucket: "to-do-app-795ba.appspot.com",
  messagingSenderId: "1097438344864",
  appId: "1:1097438344864:web:44d95ab9c1e6e1902f7bc5"
};

// Initialize Firebase
const app = MyFirebase.initializeApp(firebaseConfig);

// Inittialize Firestore database
export const db = MyFirebase.firestore();