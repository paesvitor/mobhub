import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDc_dGf3laVd57cJA1Lei8f7dPnA1iCXQw",
    authDomain: "gw-hubmob.firebaseapp.com",
    databaseURL: "https://gw-hubmob.firebaseio.com",
    projectId: "gw-hubmob",
    storageBucket: "gw-hubmob.appspot.com",
    messagingSenderId: "177278940933"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const databaseRef = firebase.database().ref();

export const whitelistRef = databaseRef.child("whitelist");
export const componentsRef = databaseRef.child("components");
export const pagesRef = databaseRef.child("pages");
