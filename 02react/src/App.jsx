import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('이미지 파일업로드');
  const [text, setText] = useState('');

  const fileChangeHandler = (e) => {
    console.log(e.target.files[0]);
    const imagefile = e.target.files[0];
    setFileName(imagefile.name);
    setFile(imagefile);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('test', text);

    console.log(formData);
    // alert('전송');

    for (const [key, value] of formData.entries()){
        console.log(key, value);
    }
  };

  return (
    <div>
      <h3>파일 업로드</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="file">{fileName}</label>
          <br />
          <input type="file" id="file" onChange={fileChangeHandler} multiple />
        </div>
        <div>
          <label htmlFor="testinput">name</label>
          <input
            type="text"
            id="textinput"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

export default App;
