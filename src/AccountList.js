import React, { useState } from 'react';
import './AccountList.css';

function AccountList() {
  // 샘플 계정 데이터
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'User A', role: 'Admin' },
    { id: 2, name: 'User B', role: 'Editor' },
    { id: 3, name: 'User C', role: 'Viewer' },
  ]);

  // 현재 선택된 계정 상태 관리
  const [selectedAccount, setSelectedAccount] = useState(null);

  // 계정 추가 핸들러
  const handleAddAccount = () => {
    const newName = prompt('새 계정 이름을 입력하세요:');
    if (!newName) return;

    const newRole = prompt('새 권한을 입력하세요 (Admin, Editor, Viewer):');
    if (!newRole) return;

    const newAccount = {
      id: accounts.length > 0 ? accounts[accounts.length - 1].id + 1 : 1,
      name: newName,
      role: newRole,
    };

    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
  };

  // 계정 수정 핸들러
  const handleEditAccount = () => {
    if (!selectedAccount) {
      alert('수정할 계정을 선택하세요!');
      return;
    }

    const newName = prompt('새 계정 이름을 입력하세요:', selectedAccount.name);
    if (!newName) return;

    const newRole = prompt(
      '새 권한을 입력하세요 (Admin, Editor, Viewer):',
      selectedAccount.role
    );
    if (!newRole) return;

    setAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.id === selectedAccount.id
          ? { ...account, name: newName, role: newRole }
          : account
      )
    );

    setSelectedAccount({ ...selectedAccount, name: newName, role: newRole });
  };

  // 계정 삭제 핸들러
  const handleDeleteAccount = () => {
    if (!selectedAccount) {
      alert('삭제할 계정을 선택하세요!');
      return;
    }
    if (window.confirm(`${selectedAccount.name} 계정을 삭제하시겠습니까?`)) {
      setAccounts((prevAccounts) =>
        prevAccounts.filter((account) => account.id !== selectedAccount.id)
      );
      setSelectedAccount(null);
    }
  };

  return (
    <div className="app">
      {/* 왼쪽 계정 목록 */}
      <div className="account-list">
        <h2>계정 목록</h2>
        {accounts.map((account) => (
          <div
            key={account.id}
            className={`account-item ${
              selectedAccount && selectedAccount.id === account.id ? 'active' : ''
            }`}
            onClick={() => setSelectedAccount(account)}
          >
            {account.name}
          </div>
        ))}
      </div>

      {/* 오른쪽 계정 세부 정보 */}
      <div className="account-details">
        {/* 우측 상단 계정 추가 버튼 */}
        <div className="add-account">
          <button onClick={handleAddAccount}>계정 추가</button>
        </div>

        {selectedAccount ? (
          <>
            <h2>계정 세부 정보</h2>
            <p>
              <strong>계정 이름:</strong> {selectedAccount.name}
            </p>
            <p>
              <strong>권한:</strong> {selectedAccount.role}
            </p>
          </>
        ) : (
          <p>계정을 선택하세요.</p>
        )}

        {/* 우측 하단 버튼 */}
        <div className="action-buttons">
          <button onClick={handleEditAccount}>수정</button>
          <button onClick={handleDeleteAccount}>삭제</button>
        </div>
      </div>
    </div>
  );
}

export default AccountList;
