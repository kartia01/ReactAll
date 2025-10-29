import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewComp({ api }) {
  const { num } = useParams();
  console.log(num);

  const [content, setContent] = useState({});

  useEffect(() => {
    const postfatch = async () => {
      try {
        const { data } = await axios.get(`${api}/posts/${num}`);
        // console.log(res.data);
        setContent(data);
      } catch (error) {
        console.error(error);
      }
    };
    postfatch();
  }, []);

  return (
    <div>
      <h3>글보기 / {num}</h3>
      <div>{content.body}</div>
    </div>
  );
}

export default ViewComp;

// 1. rfce 
// 2. useEffect (axios -> await, async -> try, catch)
// 3. useState