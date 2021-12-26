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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



