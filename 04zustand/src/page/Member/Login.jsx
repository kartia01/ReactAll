import React from 'react';
import { Link } from 'react-router-dom';
import testStore from '../../store/testStore';

function Login() {
  const { name, count } = testStore();
  return (
    <div>
      Login
      <div>
        {name} / {count}
      </div>
      <Link to="reg">회원가입</Link>
    </div>
  );
}

export default Login;
