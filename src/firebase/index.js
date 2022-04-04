import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBD5Gr1WxOO9AJv5KRElolowmGg0GGvxK0",
    authDomain: "chat-f66a3.firebaseapp.com",
    projectId: "chat-f66a3",
    storageBucket: "chat-f66a3.appspot.com",
    messagingSenderId: "943837862915",
    appId: "1:943837862915:web:99110bf0cd451aa67e8236"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };