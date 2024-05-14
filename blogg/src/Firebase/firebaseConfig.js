// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyAreUSMJsyGrUyq0uHQg-ZBbb2yewoHBOY',
  authDomain: 'blogg-c7f3e.firebaseapp.com',
  projectId: 'blogg-c7f3e',
  storageBucket: 'blogg-c7f3e.appspot.com',
  messagingSenderId: '81189835374',
  appId: '1:81189835374:web:ec893331822988a48e8c7f',
  measurementId: 'G-VVLVDHENQ8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
