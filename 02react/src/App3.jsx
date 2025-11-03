import React, { createContext, useContext, useState } from 'react';

const UseContext = createContext();

function App3() {
  const [view, setView] = useState('안녕하세요');

  return (
    <div style={{ border: '1px solid #00aeffff' }} className="p-3">
      <h3>Context Api</h3>

      {/* provider : 제공자 */}
      <UseContext.Provider value={{ view, setView }}>
        <ChildComp view={view} setView={setView} />
      </UseContext.Provider>
    </div>
  );
}

function ChildComp({ view, setView }) {
  return (
    <div style={{ border: '1px solid #0400ffff' }} className="p-3">
      <h3>child</h3>
      <ChildOneComp view={view} setView={setView} />
    </div>
  );
}

function ChildOneComp() {
  const view = useContext(useContext).view;
  const setView = useContext(useContext).setView;

  return (
    <div style={{ border: '1px solid #000' }} className="p-3">
      <h3>child one</h3>
      <p>{view}</p>

      <button
        onClick={() => {
          setView('~님 반갑습니다.');
        }}
      >
        변경
      </button>
    </div>
  );
}

export default App3;
