import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnEildW_xFLPNnQJ15SHar_ZpV7SGy9oU",
  authDomain: "joelcastangni-coder-react.firebaseapp.com",
  projectId: "joelcastangni-coder-react",
  storageBucket: "joelcastangni-coder-react.appspot.com",
  messagingSenderId: "687772654813",
  appId: "1:687772654813:web:11433abfad8ebe1f25cf34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
