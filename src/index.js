import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import AccountList from './AccountList'; // 계정 관리 화면
import Login from './Login'; // 로그인 화면

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AccountList />} /> {/* 기본 경로 */}
        <Route path="/login" element={<Login />} /> {/* 로그인 경로 */}
      </Routes>
    </Router>
  </React.StrictMode>
);
