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


// userAuth è l'oggetto che ci torna il signInWithGoogle
// additionalData è qualcosa che possiamo passare e che ci servirà
export const createUserProfileDocument = async (userAuth, ...additionalData) => {
  // vogliamo essere sicuri di eseguire questa function solo per chi è loggato
  // . Quando uno non è loggato userAuth è null
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // firestore restituisce sempre o un docref o uno snapref, se nel db
  // non esiste quella entry, la property exists è false
  if (!snapShot.exists) {
    // se non esiste vogliamo crearlo nel db
    // lo snapshot rappresenta semplicemente il dato, quindi per crearlo bisogna 
    // usare il documentRef (non lo il collectionRef)

    // ora definiamo i campi che vogliamo nel nostro firestore database
    //con questo prendiamo dall'oggetto userAuth gli elementi diplsyName e email
    const {email} = userAuth;
    const {displayName} = additionalData;
    const createdAt = new Date();
    console.log("try to userRef.set : ", displayName, email, createdAt);
    // ora nel try catch statement mettiamo lo store dei dati
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      console.log(email, "created");
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  // ritorniamo sempre lo userRed per al chiamante perché possa utilizzarlo
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// questo mostra il popup di google tutte le volte che si fa una auth
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
