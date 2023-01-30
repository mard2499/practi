// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZE4yKwc79rz-J_9dO_9C6C8J-_GnqWgY",
  authDomain: "ecomard-23455.firebaseapp.com",
  databaseURL: "https://ecomard-23455-default-rtdb.firebaseio.com",
  projectId: "ecomard-23455",
  storageBucket: "ecomard-23455.appspot.com",
  messagingSenderId: "691539136487",
  appId: "1:691539136487:web:a959941a25cb780b47f742"
};
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
export default firebase