import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function BoardComp() {
  const { id } = useParams(); // board/1
  const { name1, age1 } = useParams(); // board/1

  //   query params / board?han=test&name=hong
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const age = searchParams.get('age');

  return (
    <div>
      BoardComp <br /> 
      params : {id} / {name1} / {age1} <br /> 
      searchParams : {name} / {age}
    </div>
  );
}

export default BoardComp;
