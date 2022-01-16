import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBN3WydP8SQ1l1jctIR3KllDs3qERyTt6g",
  authDomain: "elysm-db-d44b8.firebaseapp.com",
  projectId: "elysm-db-d44b8",
  storageBucket: "elysm-db-d44b8.appspot.com",
  messagingSenderId: "258012693333",
  appId: "1:258012693333:web:ea94188902633c3efde5dc",
  measurementId: "G-JKFK0Y5Q8M"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  //Register new user info into Firestore if user snapShot does not exist
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user:', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



