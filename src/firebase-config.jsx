// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLMSxh1klyUV2umBDGa3EkZVPzlgiK400",
  authDomain: "mui-react-8649e.firebaseapp.com",
  projectId: "mui-react-8649e",
  storageBucket: "mui-react-8649e.appspot.com",
  messagingSenderId: "405580035466",
  appId: "1:405580035466:web:ae130c7fb0f78d7d6a0473",
  measurementId: "G-DDBFZRLGYQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
