import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBQWMZts1FzUQSxePZKU56VdGzfx3aUBH0",
  authDomain: "hawa-production.firebaseapp.com",
  projectId: "hawa-production",
  storageBucket: "hawa-production.appspot.com",
  messagingSenderId: "735826681154",
  appId: "1:735826681154:web:5b8cb9d4c44d8ab7847cdb",
  measurementId: "G-7RN20VDTS6",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };
