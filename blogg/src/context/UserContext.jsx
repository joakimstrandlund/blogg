import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userName, setUserName] = useState('John Doe');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return <UserContext.Provider value={{ userName, setUserName, isLoggedIn, setIsLoggedIn, login, logout }}>{props.children}</UserContext.Provider>;
};
