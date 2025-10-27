import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    userid: '',
    useremail: '',
  });

  const eventHandler = (e) => {
    const {name, type, value} = e.target;
    setFormData ({...formData, [name]:value});
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if(!formData.name.trim()){
      alert('이름을 입력하세요');
    }

    if(!formData.userid.trim()){
      alert('아이디를 입력하세요');
    } else if (formData.userid.length < 4){
      alert('아이디는 4자 이상이어야 합니다.');
    }
  }

  return (
    <div>
      <div className="container">
        <h3>회원가입</h3>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <label htmlFor="name" className="form-label" style={{width:'100px'}}>이름</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="이름을 입력하세요"
                onChange={eventHandler}
              />
            </div>
            <div style={{ color: 'red' }}>이름을 작성하세요</div>
          </div>

          <div className="mb-3">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <label htmlFor="name" className='form-label' style={{width:'100px'}}>아이디</label>
              <input
                type="text"
                className="form-control"
                id="userId"
                name="userid"
                placeholder="아이디를 입력하세요"
                onChange={eventHandler}
              />
            </div>
            <div style={{ color: 'red' }}>아이디를 작성하세요</div>
          </div>

          <div className="mb-3">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <label htmlFor="name" className='form-label' style={{width:'100px'}}>이메일</label>
              <input
                type="text"
                className="form-control"
                id="userEmail"
                name="useremail"
                placeholder="이메일을 입력하세요"
                onChange={eventHandler}
              />
            </div>
            <div style={{ color: 'red' }}>이메일을 작성하세요</div>
          </div>
        </form>
      </div>
      <div>
        <button>회원가입완료</button>
      </div>
    </div>
  );
}

export default App;
