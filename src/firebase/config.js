import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTKEm6MMMFQscv3tQ4fP4tjBGzN7k6c7g",
    authDomain: "react-olx-580ef.firebaseapp.com",
    projectId: "react-olx-580ef",
    storageBucket: "react-olx-580ef.appspot.com",
    messagingSenderId: "659620058499",
    appId: "1:659620058499:web:55f7d2b814217829d1d2b6",
    measurementId: "G-SJWC8C2QG5"
  };

export default firebase.initializeApp(firebaseConfig)