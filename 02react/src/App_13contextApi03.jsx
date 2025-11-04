import React from 'react';
import ParentComp from './components/context1/ParentComp';
import { PostProvider } from './context/PostContext';

function App() {
  return (
    <PostProvider>
      <div>
        <h3>context Api</h3>
        <ParentComp />
      </div>
    </PostProvider>
  );
}

export default App;
