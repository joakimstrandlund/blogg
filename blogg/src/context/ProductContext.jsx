import { createContext, useContext, useState } from 'react';
import { UserContext } from './UserContext';

// Byt ordet product till post eller addPost så du inte kopierar saga helt

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const { userName } = useContext(UserContext);
  const [products, setProducts] = useState([
    {
      id: 1,
      author: 'Miss Li',
      title: 'Jag vann en grammis',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 2,
      author: 'Sean Banan',
      title: 'Topp 10 bästa bananer i Sverige',
      text: 'Bacon ipsum dolor amet porchetta pork loin shoulder beef ribs burgdoggen t-bone meatball hamburger. Sirloin turducken filet mignon prosciutto beef shankle shank ham sausage. Pig shankle pork belly, frankfurter bacon jowl ribeye biltong flank short ribs buffalo fatback salami hamburger. Capicola short loin meatball salami cow. Cupim hamburger swine prosciutto rump t-bone andouille capicola pig biltong. Ribeye porchetta andouille tongue.',
    },
    {
      id: 3,
      author: 'Petter',
      title: 'Sommarens vin',
      text: 'Lorizzle uhuh ... yih! dolor sit amizzle, consectetizzle adipiscing shiz. Nullizzle black velizzle, volutpat, suscipit yippiyo, gravida vizzle, mofo. Pellentesque fo shizzle tortor. Sed erizzle. Sizzle izzle dang dapibizzle shizznit tempizzle sheezy. Mauris stuff nibh izzle sure. Vestibulum in crazy. Pellentesque fo rizzle mammasay mammasa mamma oo sa. In hizzle tellivizzle platea dictumst. Yippiyo dapibizzle. Curabitizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle urna, yippiyo ghetto, mattis ac, eleifend owned, nunc. Its fo rizzle suscipizzle. Break yo neck, yall sempizzle away sizzle purus.',
    },
  ]);

  const addProduct = (title, text) => {
    const newProduct = {
      id: Math.random(),
      author: userName,
      title: title,
      text: text,
    };
    setProducts([newProduct, ...products]);
  };

  return <ProductContext.Provider value={{ products, addProduct }}>{props.children}</ProductContext.Provider>;
};
