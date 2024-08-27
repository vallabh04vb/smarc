import React, { createContext, useState } from 'react';

// Create a context
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Global state variable
  const [profession, setProfession] = useState("HI There");
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <GlobalContext.Provider value={{ profession, setProfession, cart, setCart, totalAmount, setTotalAmount }}>
      {children}
    </GlobalContext.Provider>
  );
};
