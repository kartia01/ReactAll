import React, { useEffect, useState } from 'react';

function App2() {
  const [count, setcount] = useState(0);
  const [login, setlogin] = useState(false);
  const [mydata, setmydata] = useState([]);

  useEffect(() => {
    console.log('useEffect');
  }, []);

  useEffect(() => {
    async function fetchData() {
      console.log('데이터가 들어옴');
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      console.log(data);
      setmydata(data);
    }
    fetchData();
  },[]);

  return (
    <div>
      <h3>App / {count}</h3>
      <button
        onClick={() => {
          console.log(count + 1);
        }}
      >
        클릭
      </button>

      <button
        onClick={() => {
          setlogin(!login);
        }}
      >
        클릭
      </button>
      {mydata && '자료가 있어요'}
      {mydata &&
        mydata.map((item, i) => {
          return (
            <div>
              <p>
                {item.id}. {item.title}
              </p>
              <p>{item.body}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App2;
