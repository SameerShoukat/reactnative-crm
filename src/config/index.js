import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBJJfXrJDQ9wPLyniSrFn-wd1dxpNMVMh8",
  authDomain: "college-crm.firebaseapp.com",
  projectId: "college-crm",
  storageBucket: "college-crm.appspot.com",
  messagingSenderId: "1088420206538",
  appId: "1:1088420206538:web:6c7cc0eb2f82251b4b6133",
  measurementId: "G-JL7GZ7ZN79"
};

  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
