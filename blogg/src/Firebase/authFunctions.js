import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOut = async () => {
  return auth.signOut();
};
