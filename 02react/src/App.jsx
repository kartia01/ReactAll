import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modalcomp03 from './components/modal/Modalcomp03';

function App() {
  // api data 가지고 오기
  // npm install axios -> npm i axios
  // useEffect axios.get('') 사용 async..await
  // api 경로 'https://jsonplaceholder.typicode.com/posts'

  const [postData, setPostData] = useState([]);
  const [modal, setModal] = useState(false);
  const [num, setNum] = useState(0);

  const clickFn = (index) => {
    setNum(index);
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  useEffect(() => {
    // async function fetchApi() {
    //   const res = await fetch()
    // }

    // const fetch = async function(){
    //   const rest = await fetch()
    // }

    const fetchApi = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res.data);
      setPostData(res.data);
    };

    fetchApi();
  }, []);

  return (
    <div>
      <h3>List</h3>
      {postData &&
        postData.map((item, i) => {
          return (
            <div
              onClick={() => {
                clickFn(i);
              }}
            >
              {item.userId}
            </div>
          );
        })}
      {modal ? <Modalcomp03 num={num} modalClose={modalClose} /> : null}
    </div>
    // <div>
    //   App
    //     {postData &&
    //       postData.map((item, i) => {
    //         return (
    //           <div>
    //             {item.id}. {item.title}
    //           </div>
    //         );
    //       })}
    //   </div>
  );
}

export default App;
