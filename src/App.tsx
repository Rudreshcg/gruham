import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          Hello
        </Routes>
      </div>
    </Router>
  );
}

export default App;
