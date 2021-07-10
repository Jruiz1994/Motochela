import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: 'AIzaSyCnXBTk53U4JAaZQqVYR4HtvolvWtr9oPo',
    authDomain: 'motochela-89227.firebaseapp.com',
    projectId: 'motochela-89227',
    storageBucket: 'motochela-89227.appspot.com',
    messagingSenderId: '845271584562',
    appId: '1:845271584562:web:a7caf0da8bb6a2f0ced12b',
}
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig)
export const db = fb.firestore()
