import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('userPovider 내부에 있어야 해요');
  }
  return context;
};

export const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const signUp = ()=> {
        
    }
};
