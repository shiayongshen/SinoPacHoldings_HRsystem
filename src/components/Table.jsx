// Table.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Table = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email };

    fetch('http://localhost:8000/api/submit/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        setResponseMessage(data.message || '資料送出成功！');
        console.log('Success:', data);
        // 成功送出後導向 Evaluation 頁面
        navigate('/evaluation');
      })
      .catch((error) => {
        setResponseMessage('發生錯誤');
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>填寫表單</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>姓名：</label>
          <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>電子郵件：</label>
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">送出</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Table;
