import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  // apiKey: "AIzaSyDiLPQt0PPBdSQoG-LRA9Ug0bmwk1Z6CIE",
  // authDomain: "reactnative2-6e525.firebaseapp.com",
  // databaseURL: "https://reactnative2-6e525.firebaseio.com",
  // projectId: "reactnative2-6e525",
  // storageBucket: "reactnative2-6e525.appspot.com",
  // messagingSenderId: "828274393528",
  // appId: "1:828274393528:web:1b96ba956f9998c9a94f4d",
  // measurementId: "G-KMEXFYX6F3"
  //------------------------------------------------
  apiKey: "AIzaSyB8n1QigQzMW9HhVs39yE5kC2etJoUO_3w",
  authDomain: "localevents-99f66.firebaseapp.com",
  databaseURL: "https://localevents-99f66.firebaseio.com",
  projectId: "localevents-99f66",
  storageBucket: "localevents-99f66.appspot.com",
  messagingSenderId: "352908199658",
  appId: "1:352908199658:web:57154b6841c7bd511ff993",
  measurementId: "G-9HXRL8M4GB"


};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export { firebase };