import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2DFGcuEgF0V2qalkW9Pt016wx9oAXnbk",
  authDomain: "furniture-project-917d9.firebaseapp.com",
  projectId: "furniture-project-917d9",
  storageBucket: "furniture-project-917d9.appspot.com",
  messagingSenderId: "800472728957",
  appId: "1:800472728957:web:5d9ccd7c1a7b73d23df814",
  measurementId: "G-15LNVBRT8M"
};

const app = initializeApp(firebaseConfig);

export default app