import React from 'react';
import Button from './components/props/Button';
import ViewComp from './components/props/ViewComp';
import View01 from './components/props/View01';
import MyComp from './components/props/MyComp';

function App() {
  const city = ['서울', '대전', '인천', '춘천'];
  const city1 = ['춘천', '제주', '인천', '부산'];

  return (
    <div>
      App
      {/* <Button></Button> = <Button /> */}
      <Button title="글작성" color="red" />
      <Button title="글보기" color="blue" />
      <Button title="글수정" color="green" />
      <Button title="글수정" color="black" />
      <ViewComp cityData={city} />
      <ViewComp cityData={city1}></ViewComp>

      {city.map((item,i)=>{
        return <View01 title={item}></View01>
      })}

      <Han />
      <MyComp></MyComp>
    </div>
  );
}

function Han() {
  return (
    <>
      <h2>han</h2>
    </>
  );
}

export default App;
