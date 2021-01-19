import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'


const config = {
    apiKey: "AIzaSyARkZqcuFG6ma3xiPuib7fyK--B5ZT9eJA",
    authDomain: "project-management-app-248a2.firebaseapp.com",
    databaseURL: "https://project-management-app-248a2.firebaseio.com",
    projectId: "project-management-app-248a2",
    storageBucket: "project-management-app-248a2.appspot.com",
    messagingSenderId: "311906388564",
    appId: "1:311906388564:web:4f43b64f2cf6ab49b07bc1",
    measurementId: "G-1398HP07KF"
  };

  firebase.initializeApp(config);


export default firebase
