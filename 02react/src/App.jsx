import { createContext, useContext, useState } from 'react';

const Postcontext = createContext();

export const usePost = () => {
  const context = useContext(Postcontext);
  if (!context) {
    throw new Error('Postprovider 안에 적용해야 함');
  }
  return context;
};

export const PostProvider = ({ children }) => {
  const [view, setView] = useState('안녕하세요');

  const viewHandler = () => {
    alert('hi');
  };

  

  return <Postcontext.Provider value={value}>{children}</Postcontext.Provider>;
};
