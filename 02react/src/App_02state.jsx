import React, { useState } from 'react';
import Button from './components/state/Button';

function App() {
  const test = 3;
  const [count, setCount] = useState(1);
  const [view, setView] = useState(false);
  // const [allCity] = useState([{ city: '서울', cont: 'test' }, { city: '부산', cont: 'test' }]);
  // console.log(count[0]);
  // console.log(allCity[0].city);
  // console.log(allCity[0]['city']);

  function num() {
    setCount(count + 1);
  }

  const num1 = function () {
    setCount(count + 1);
  };

  const num2 = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>state</h3>
      {/* title : 변수명 */}
      {/* <Button title="글쓰기" color="red" width="200"></Button>
      <Button color="lightblue" width="100"></Button> */}
      <button onClick={num2}>{count}</button>
      {/* <p onClick={()=>{setCount(count+1)}}>{count}</p> */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>

      <hr />
      {test}
      <div onClick={han1}>
        <Button title="글쓰기"></Button>
      </div>
      <Button title="글수정" color="red"></Button>
      <Button title="글리스트" color="blue"></Button>
    </div>
  );
}

export default App;
