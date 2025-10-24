import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    userid: '',
    useremail: '',
  });

  const [errors, setErrors] = useState({});

  const eventHandler = (e) => {
    // alert('OK');
    const { name, type, value, checked } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    // const newError = {
    //   name: '이름을 입력하세요',
    //   userid: '아이디를 입력하세요',
    // };

    const newError = {};

    if (!formData.name.trim()) {
      // alert('이름을 입력하세요');
      // newError['name'] = '이름을 입력하세요'
      newError.name = '이름을 입력하세요';
    }

    if (!formData.userid.trim()) {
      // alert('아이디를 입력하세요');
      newError.userid = '아이디를 입력하세요';
    } else if (formData.userid.length < 4) {
      // alert('아이디는 4자 이상이어야 합니다.');
      newError.userid = '아이디는 4자 이상 입력하세요';
    }

    if (!formData.useremail.trim()) {
      // alert('이메일을 입력하세요');
      newError.useremail = '이메일을 입력하세요';
      // } else if (!formData.useremail.includes('@')) {
      //   alert('이메일 형식이 아닙니다.');
    } else if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(formData.useremail)) {
      // alert('이메일 형식이 아닙니다.');
      newError.useremail = '이메일 형식이 아닙니다';
    }

    return newError;
  };

  const submitHandler = (e) => {
    // alert('회원가입완료');
    e.preventDefault();

    const nError = validate(); // return newError
    setErrors(nError); // state

    if (Object.keys(nError).length === 0) {
      alert('회원가입성공');
      // 회원가입완료후 formData를 axios로 post전송
      // 전송된 값, 확인 가디림,
      // 전송 후 list page 이동(router)
    } else {
      // alert('회원가입실패');
    }
  };

  return (
    <div>
      <div className="container">
        <h3>회원가입</h3>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <label htmlFor="name" className="form-label" style={{ width: '100px' }}>
                이름 {formData.name}
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="이름을 입력하세요"
                onChange={eventHandler}
              />
            </div>
            {/* <div style={{ color: 'red' }}>이름을 작성하세요</div> */}
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          </div>
          <div className="mb-3">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <label htmlFor="userId" className="form-label" style={{ width: '100px' }}>
                아이디
              </label>
              <input
                type="text"
                className="form-control"
                id="userId"
                name="userid"
                placeholder="아이디를 입력하세요"
                onChange={eventHandler}
              />
            </div>
            {/* <div style={{ color: 'red' }}>아이디를 작성하세요</div> */}
            {errors.userid && <div style={{ color: 'red' }}>{errors.userid}</div>}
          </div>
          <div className="mb-3">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <label htmlFor="userEmail" className="form-label" style={{ width: '100px' }}>
                이메일
              </label>
              <input
                type="text"
                className="form-control"
                id="userEmail"
                name="useremail"
                placeholder="이메일을 입력하세요"
                onChange={eventHandler}
              />
            </div>
            {/* <div style={{ color: 'red' }}>
              {errors.name}
            </div> */}
            {errors.useremail && <div style={{ color: 'red' }}>{errors.useremail}</div>}
          </div>
          <div className="text-end">
            <button className="btn btn-primary">회원가입완료</button>
          </div>
        </form>
      </div>
      {/* 자료가 들어가는지 확인 */}
      <div>formData : {JSON.stringify(formData)}</div>
      <div>error : {JSON.stringify(errors)}</div>
    </div>
  );
}

export default App;
