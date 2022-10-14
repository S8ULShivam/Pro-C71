import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBhdcQZiodUvqNNGevMZ6q2TXatz0EysLM",
    authDomain: "complaint-forum-c7c83.firebaseapp.com",
    projectId: "complaint-forum-c7c83",
    storageBucket: "complaint-forum-c7c83.appspot.com",
    messagingSenderId: "609134784381",
    appId: "1:609134784381:web:33eb54092ba12e3f9fe614"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
