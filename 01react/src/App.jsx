import React from 'react';
import react from './assets/react.svg';

function App() {
  const test = 10;
  const view = {
    color: 'white',
    backgroundColor: 'pink',
  };
  let islogin = true;
  const city = ['서울', '부산', '대구', '광주'];
  return (
    // <div className="">
    //   <h1>test</h1>
    //   <p>{test}</p>

    //   <div className="container"></div>
    // </div>
    <>
      <div className="container" style={view}>
        111
        <img src={react} alt="" />
        {islogin ? <p>로그인완료</p> : <p>로그인하세요</p>}
        {/* {city.map(function(){})}
        {city.map(()=>{})} */}
        {/* map : 리스트를 화면에 그릴 때 사용하는 함수 */}
        {city.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </>
  );
}

export default App;
