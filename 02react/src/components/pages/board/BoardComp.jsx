import React, { useEffect, useState } from 'react';
import ListComp from './ListComp';
import WriteComp from './WriteComp';
import ViewComp from './ViewComp';
import ModifyComp from './ModifyComp';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com';

function BoardComp() {
  // useEffect(() => {
  //   const fetch = async () => {
  //     const { data } = await axios.get(Api);
  //     console.log(data);
  //   };
  //   fetch();
  // }, []);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetch = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API}/posts`);
      console.log(data);
      setPosts(data.slice(0, 10)); // 데이터 인설트
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="container">
      <div
        style={{ width: '100%', height: '200px' }}
        className="d-flex justify-content-center align-items-center bg-info rounded mb-3"
      >
        Board
      </div>

      <div>{loading ? <p>로딩 중입니다.</p> : <p> 로딩 완료</p>}</div>

      <div className="d-flex justify-content-center gap-3">
        <Link to="../board/list" className="nav-link">
          글리스트
        </Link>
        <Link to="../board/write" className="nav-link">
          글작성
        </Link>
      </div>
      <Routes>
        <Route index element={<ListComp posts={posts} />}></Route>
        <Route path="list" element={<ListComp posts={posts} />}></Route>
        <Route path="write" element={<WriteComp />}></Route>
        <Route path="view/:num" element={<ViewComp api={API} />}></Route>
        <Route path="modify/:id" element={<ModifyComp />}></Route>
      </Routes>
    </div>
  );
}

export default BoardComp;