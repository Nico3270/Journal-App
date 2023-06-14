// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqF2KnvWxISFjNNFJgMPBwioU6Mg1mpqU",
  authDomain: "react-course-78502.firebaseapp.com",
  projectId: "react-course-78502",
  storageBucket: "react-course-78502.appspot.com",
  messagingSenderId: "643502460162",
  appId: "1:643502460162:web:8749eb0aace9287cf3c61b",
  measurementId: "G-Z1NX6PH78G"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);

