import React from 'react';
import Button from './Button';


function ViewComp(props) {
  return (
    <div>
      <h3>gallery</h3>
      {/* <p>{props.cityData[0]}</p> */}
      <div style={{display:'flex', gap:'16px'}}>
      {props.cityData.map((item, i) => {
        return (
          <div key={i} 
          style={{
            background: 'grey',
            borderRadius: '10px',
            padding: '10px'
            }}>
            <h2>{item}</h2>
            <Button title="글쓰기" color="cyan"></Button>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default ViewComp;
