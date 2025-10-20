import React from 'react';

function ModalComp02({ tab, data, modalClose }) {
  const style = {
    wrap: {
      width: '400px',
      height: '400px',
      background: 'lightgreen',
    },
    top: {
      display: flex,
      justifyContent: 'space-Between',
    },
  };
  return (
    <div style={style.wrap}>
      <div style={style.top}>
        <h4>{data[tab].title}</h4>
        <div onClick={modalClose}>X</div>
      </div>
      <p>{data[tab].content}</p>
      <button onClick={modalClose}>닫기</button>
    </div>
  );
}

export default ModalComp02;
