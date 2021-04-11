import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDTHcQpuoTq3gchRtqcfOFov_BvDProeCQ",
    authDomain: "chat-app-next-js.firebaseapp.com",
    projectId: "chat-app-next-js",
    storageBucket: "chat-app-next-js.appspot.com",
    messagingSenderId: "927241679099",
    appId: "1:927241679099:web:eedd0af6d9d164a8e3405e"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()

const auth = app.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }