import { onAuthStateChanged } from '../Firebase/authFunctions';
import { auth } from '../Firebase/firebaseConfig';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log(currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializerUser);
    return unsubscribe;
  }, [currentUser]);

  const initializerUser = (user) => {
    setLoading(true);
    if (user) {
      setCurrentUser(user);
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  };

  const values = { currentUser, userLoggedIn };

  return <AuthContext.Provider value={values}>{!loading && props.children}</AuthContext.Provider>;
};
