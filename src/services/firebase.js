import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
// import "firebase/firestore";
// import "firebase/functions";
// import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
        apiKey: "AIzaSyCM3YpDc4sWiydsmyYm9-s5q_rdMQa_QEk",
        authDomain: "lex-labs-koixoi.firebaseapp.com",
        databaseURL: "https://lex-labs-koixoi.firebaseio.com",
        projectId: "lex-labs-koixoi",
        storageBucket: "lex-labs-koixoi.appspot.com",
        messagingSenderId: "7599219964",
        appId: "1:7599219964:web:d1ef536854827662b1e379",
        measurementId: "G-EDC2WWS7SH"
};

firebase.initializeApp(firebaseConfig);

export default firebase

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.15.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.15.3/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>