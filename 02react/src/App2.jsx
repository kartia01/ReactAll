import React from 'react';
import { UserProvider } from './context/UserContext';
import ParentComp from './components/context/ParentComp';

function App2() {
  return (
    <UserProvider>
      <ParentComp />
    </UserProvider>
  );
}

export default App2;
