import React from 'react';
import testStore from '../store/testStore';

function HomeComp() {
  const name = testStore((state) => state.name);

  return (
    <div>
      <h3>home</h3>
      이름 : {name}
    </div>
  );
}

export default HomeComp;
