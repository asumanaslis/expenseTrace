import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
import { Platform } from "react-native";

let apiKey = "";
let appId = "";

if (Platform.OS == "ios") {
  apiKey = "AIzaSyCG1rS5QOwHDlj4En3m_ViDpsqtB6BFZ9g";
  appId = "1:357863128436:ios:9e0a4a25f0a9b8bce3c021";
} else if (Platform.OS == "android") {
  apiKey = "AIzaSyAqgh66yYaMNGJyKtxNamP8aaVzcWhO6u8";
  appId = "1:357863128436:android:1e1194cdb2da51b4e3c021";
}

const firebaseConfig = {
  apiKey,
  authDomain: "expensetrace-4212b.firebaseapp.com",
  databaseURL: "https://expensetrace-4212b.firebaseio.com",
  projectId: "expensetrace-4212b",
  storageBucket: "expensetrace-4212b.appspot.com",
  messagingSenderId: "357863128436",
  appId,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

/*
ANDROID
const firebaseConfig = {
  apiKey: "AIzaSyAqgh66yYaMNGJyKtxNamP8aaVzcWhO6u8",
  authDomain: "expensetrace-4212b.firebaseapp.com",
  databaseURL: "https://expensetrace-4212b.firebaseio.com",
  projectId: "expensetrace-4212b",
  storageBucket: "expensetrace-4212b.appspot.com",
  messagingSenderId: "357863128436",
  appId: "1:357863128436:android:1e1194cdb2da51b4e3c021",
};
*/
