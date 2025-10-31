import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import './app.css';
import HomeComp from './components/pages/HomeComp';
import AboutComp from './components/pages/about/AboutComp';
import BoardComp from './components/pages/board/BoardComp';

function App() {
  return (
    <BrowserRouter>
      <div className="container d-flex justify-content-between">
        <h1>
          <Link to="/" className="nav-link">
            LOGO
          </Link>
        </h1>
        <ul className="d-flex gap-3 menu">
          <li className="d-flex align-items-center">
            {/* <Link to="/" className="nav-link">
              home
            </Link> */}
            <NavLink to="/" className="nav-link">
              home
            </NavLink>
          </li>

          <li className="d-flex align-items-center">
            <Link to="/about" className="nav-link">
              about
            </Link>
          </li>

          <li className="d-flex align-items-center">
            <Link to="/board" className="nav-link">
              board
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<HomeComp />}></Route>
        <Route path="/about/*" element={<AboutComp />}></Route>
        <Route path="/board/*" element={<BoardComp />}></Route>
      </Routes>
      <div className="container">footer</div>
    </BrowserRouter>
  );
}

export default App;
