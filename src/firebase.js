import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBoTwknREWVTOo7ik2iDfaeEAUOtCW8PGU",
    authDomain: "ecommerce-49781.firebaseapp.com",
    databaseURL: "https://ecommerce-49781.firebaseio.com",
    projectId: "ecommerce-49781",
    storageBucket: "ecommerce-49781.appspot.com",
    messagingSenderId: "692306189389",
    appId: "1:692306189389:web:88bd595cfae9bb17369004"
};

firebase.initializeApp(firebaseConfig);

// export 
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();