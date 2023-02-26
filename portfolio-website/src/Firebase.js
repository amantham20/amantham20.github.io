import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5pCKKdqdeyGa0M-M0bqzqyuR4Gp3LTRA",
    authDomain: "personalwebsite-47218.firebaseapp.com",
    projectId: "personalwebsite-47218",
    storageBucket: "personalwebsite-47218.appspot.com",
    messagingSenderId: "983645349359",
    appId: "1:983645349359:web:6658b05ad44e259d7a821a",
    measurementId: "G-WRRLGQ49RT"
  };

    firebase.initializeApp(firebaseConfig);

    export default firebase;