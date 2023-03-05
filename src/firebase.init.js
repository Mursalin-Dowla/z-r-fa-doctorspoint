// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQU09aOdQ82L-MwLNjtxrQJ7BTx0Az1SY",
  authDomain: "z-r-fa-dectorspoint.firebaseapp.com",
  projectId: "z-r-fa-dectorspoint",
  storageBucket: "z-r-fa-dectorspoint.appspot.com",
  messagingSenderId: "169874957457",
  appId: "1:169874957457:web:ee726aa4ea2436acafcb30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;