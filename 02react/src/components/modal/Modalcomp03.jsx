import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Modalcomp03({ modalClose }) {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res.data);
      setPostData(res.data);
    };

    fetchApi();
  }, []);
  return (
    <div>
      {postData.map((item, i) => {
        return(
            <div>
                {item.id}. {item.title}
            </div>
        );
      })}
      <button onClick={modalClose}></button>
    </div>
  );
}

export default Modalcomp03;
