import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCw_9EbuHRjRXbFw1QsXUVT4Swgn0DO-oQ",
    authDomain: "crwn-db-8068b.firebaseapp.com",
    projectId: "crwn-db-8068b",
    storageBucket: "crwn-db-8068b.appspot.com",
    messagingSenderId: "9923876606",
    appId: "1:9923876606:web:14663cea96da6119ea37af"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// questo mostra il popup di google tutte le volte che si fa una auth
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
