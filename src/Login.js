import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate 초기화

  const handleLogin = () => {
    if (!username || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    // 로그인 로직: 성공 시 AccountList로 이동
    alert(`로그인 성공: ${username}`);
    navigate('/'); // 기본 경로(AccountList)로 이동
  };

  return (
    <div className="login-container">
      <h2>로그인</h2>
      <div className="login-form">
        <label>
          아이디
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </label>
        <button onClick={handleLogin}>로그인</button>
      </div>
    </div>
  );
}

export default Login;
