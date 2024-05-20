import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userName, setUserName] = useState('John Doe');
  const lsIsloggedIn = localStorage.getItem('isLoggedIn');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const useInApp = {
    userName,
    setUserName,
    isLoggedIn,
    login,
    logout,
  };

  // return <UserContext.Provider value={{ userName, setUserName, isLoggedIn, setIsLoggedIn, login, logout }}>{props.children}</UserContext.Provider>;

  return <UserContext.Provider value={useInApp}>{props.children}</UserContext.Provider>;
};
