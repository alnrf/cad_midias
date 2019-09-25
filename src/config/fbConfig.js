import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


  var config = {
    apiKey: "AIzaSyCisQWZk9dOgQ-UGneQurDcJgkPoLSzAB0",
    authDomain: "biblioteca-207ae.firebaseapp.com",
    databaseURL: "https://biblioteca-207ae.firebaseio.com",
    projectId: "biblioteca-207ae",
    storageBucket: "biblioteca-207ae.appspot.com",
    messagingSenderId: "362739539596",
    appId: "1:362739539596:web:d9cbfc2e76013c62"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 