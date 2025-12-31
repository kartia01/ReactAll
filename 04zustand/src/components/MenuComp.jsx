import React from 'react';
import { Link } from 'react-router-dom';

function MenuComp() {
  const stylereset = {textDecoration: 'none', color: '#000' };
  return (
    <div style={{width:'100%'}}>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', width: '100%' }}>
        <h1>com</h1>
        <ul style={{ display: 'flex', gap: '30px', listStyle: 'none' }}>
          <li>
            <Link to="/" style={stylereset}>
              home
            </Link>
          </li>
          <li>
            <Link to="/about" style={stylereset}>
              about
            </Link>
          </li>
          <li>board</li>
        </ul>
        <ul style={{listStyle: 'none'}}>
          <li>
            <Link to="/login" style={stylereset}>
              로그인
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuComp;
