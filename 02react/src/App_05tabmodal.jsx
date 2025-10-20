import React, { useState } from 'react';
import './tab.css';

function App() {
  const data = [
    {
      btn: 'tab1',
      title: '안녕하세요1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cumque?',
    },
    {
      btn: 'tab2',
      title: '안녕하세요2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,',
    },
    {
      btn: 'tab3',
      title: '안녕하세요3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];

  const [tab, setTab] = useState(0);

  const [Tmodal, setTmodal] = useState(false);

  const modalViewFn = () => {
    setTmodal(true);
  }

  const modalClose = () => {
    setTmodal(false);
  }

  // const tabList = () =>{
  //   setTab(tab+1);
  // }

  const tabNum = (index) => {
    setTab(index);
  };

  return (
    <div>
      Tab Menu ({tab})
      <div>
        <ul className="tab">
          {data.map((item, i) => {
            return (
              <li
                key={i}
                className={tab == i ? 'active' : ''}
                onClick={() => {
                  tabNum(i);
                }}
              >
                {item.btn}
              </li>
            );
          })}
          {/* <li
          className = {`han ${tab == 0 ? 'active' : ''}`}
            // className={tab == 0 ? 'active' : ''}
            onClick={() => {
              tabNum(0);
            }}
          >
            tab1
          </li>
          <li
            className={tab == 1 ? 'active' : ''}
            onClick={() => {
              tabNum(1);
            }}
          >
            tab2
          </li>
          <li
            className={tab == 2 ? 'active' : ''}
            onClick={() => {
              tabNum(2);
            }}
          >
            tab3
          </li> */}
        </ul>

        {Tmodal ? <ModalComp02 data = {data} modalClose={modalClose} /> : null}
        <div className="content">
          <h4>{data[tab].title}</h4>
          <p>{data[tab].content}</p>
        </div>          

      </div>
    </div>
  );
}

export default App;
// 1. map 사용(O)
// 2. 모달창 사용
// ※ 1.data 정보 파악
//    2. 게시판리스트(array.map())
//    3. click event
//    4. useState를 작성
//    5. modal디자인(컴포넌트생성)
//    6. useState(false) 작성
//    7. props에 대한 설계 (props, event)
//    8. 오류해결