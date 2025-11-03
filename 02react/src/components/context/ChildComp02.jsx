import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext02';

function ChildComp02() {
  const user = useContext(UserContext);
  return (
    <div>
      ChildComp /{' '}
      {user ? (
        <div>
          {user.name} / {user.username}
        </div>
      ) : (
        <div>데이터 로딩 중...</div>
      )}
    </div>
  );
}

export default ChildComp02;
