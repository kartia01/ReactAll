import React, { useState } from 'react';
import Button from './components/state/Button';
import './App.css';

function App2() {
  const [isModal, setIsModal] = useState(false);
  return (
    <div>
      <h3>모달창 만들기</h3>
      {isModal ? (
        <div className="vmodal">
          <div className="title">
            <h3>모달창</h3>
            <div
              onClick={() => {
                setIsModal(false);
              }}
            >
              X
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat rem nobis, quibusdam autem sint alias?
          </p>

          {/* <div onClick={() => setIsModal(false)} className='d-flex justify-content-center'> */}
          <div onClick={() => setIsModal(false)} id='btn'>
            <Button title="닫기" color="blue"></Button>
          </div>
        </div>
      ) : null}

      {/* <div
        onClick={() => {
          setIsModal(!isModal);
        }}
        className='d-flex justify-content-center mt-3'> */}
      <div
        onClick={() => {
          setIsModal(!isModal);
        }}
        id='btn'>
        <Button title='창 띄우기'></Button>
      </div>
    </div>
  );
}

export default App2;
