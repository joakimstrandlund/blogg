import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [UserLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializerUser);
    return unsubscribe;
  }, []);

  const initializerUser = (user) => {
    setLoading(true);
    if (user) {
      setCurrentUser(user);
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
  };

  const values = { currentUser, UserLoggedIn };

  return <AuthContext.Provider value={{ values }}>{props.children}</AuthContext.Provider>;
};
