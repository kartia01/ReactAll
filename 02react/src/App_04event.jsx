import React, { useState } from 'react';

function App() {
  const [count, setcount] = useState(0);
  const viewText = '안녕하세요';

  function changeCount() {
    setcount(count + 1);
  }

  const chCount = () => {
    setcount(count + 1);
  };

  return (
    <div style={{ padding: '10px' }}>
      <h3>부모component</h3>
      <Child view={viewText} vCount={count} onClick={chCount} />
      <Nextchild vCount={count} />
      <div>{count}</div>
      <button onClick={chCount}>클릭</button>
      {/* <button onClick={function changeCount(){
        setcount(count + 1);
      }}>클릭</button> */}
    </div>
  );
}

function Child({ view, vCount, onClick }) {
  return (
    <div style={{ border: '1px solid black' }}>
      <h4>child</h4>
      <p>
        {view} / {vCount}
      </p>
      <button onClick={onClick}>클릭</button>
    </div>
  );
}

function Nextchild({ vCount }) {
  return (
    <div style={{ border: '1px solid red' }}>
      <h4>친구컴프</h4>
      <p>{vCount}</p>
    </div>
  );
}

export default App;
