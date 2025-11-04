import React from 'react';
import { usePost } from '../../context/PostContext';

function ChildComp() {
  const { view, setView, viewHandler, vData } = usePost(); // view:"안녕하세요", setView : setView()
  return (
    <div>
      ChildComp / {view}
      <p>
        <button
          onClick={() => {
            setView('홍길동님, 안녕하세요');
          }}
        >
          변경
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            viewHandler();
          }}
        >
          클릭
        </button>
      </p>
      {vData ? <p>데이터가 있음</p> : <p>데이터가 없음</p>}
    </div>
  );
}

export default ChildComp;
