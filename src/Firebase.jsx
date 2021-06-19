import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDHUPGFg-TCe6tPzQvj_Dp3X7Br6plJ53U",
    authDomain: "slack-clone-yt-5da79.firebaseapp.com",
    projectId: "slack-clone-yt-5da79",
    storageBucket: "slack-clone-yt-5da79.appspot.com",
    messagingSenderId: "277491291116",
    appId: "1:277491291116:web:9095b166037af974bb66c9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth=firebaseApp.auth()
const db=firebaseApp.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
export default firebaseApp