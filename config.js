import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAOsZ1ABl4lTpmiPmZZcWoXGqMaQAsvBP0",
  authDomain: "e-ride-61d0f.firebaseapp.com",
  projectId: "e-ride-61d0f",
  storageBucket: "e-ride-61d0f.appspot.com",
  messagingSenderId: "31621588292",
  appId: "1:31621588292:web:5a3c218463f900504fa311"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
