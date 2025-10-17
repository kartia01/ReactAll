import React from 'react';

function Button({ title = '글작성', color = 'skyblue', width = '100px' }) {
  // console.log(props);
  console.log(title, color, width);
  const btnStyle = {
    // width : width,
    // width: `${width}px`,
    display: 'inline-block',
    background: color,
    borderRadius: '20px',
    padding: '8px 30px',
    color: 'white',
    cursor: 'pointer',
  };

  return <div style={btnStyle}>{title}</div>;
}

export default Button;
