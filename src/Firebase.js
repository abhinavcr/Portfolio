import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyBDv5cqST1tyEfnbItekQGL7uZWfjLONBsz",
  authDomain: "portfolio-8254d.firebaseapp.com",
  projectId: "portfolio-8254d",
  storageBucket: "portfolio-8254d.firebasestorage.app",
  messagingSenderId: "350124221567",
  appId: "1:350124221567:web:642c5dc011698b93648b4a",
  measurementId: "G-WS8LDLKSB2"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
