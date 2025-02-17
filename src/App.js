// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './components/Table';
import Evaluation from './components/Evaluation';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React 表格系統</h1>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/evaluation" element={<Evaluation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
