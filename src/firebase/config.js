import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCG1rS5QOwHDlj4En3m_ViDpsqtB6BFZ9g",
  authDomain: "expensetrace-4212b.firebaseapp.com",
  databaseURL: "https://expensetrace-4212b.firebaseio.com",
  projectId: "expensetrace-4212b",
  storageBucket: "expensetrace-4212b.appspot.com",
  messagingSenderId: "357863128436",
  appId: "1:357863128436:ios:9e0a4a25f0a9b8bce3c021",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
