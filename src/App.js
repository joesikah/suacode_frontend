import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Stories from './pages/Stories';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Stories />} />
      </Routes>
    </Router>
  );
}

export default App;
