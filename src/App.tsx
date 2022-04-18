import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header/Header';
import Navbar from './containers/Navbar/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default App;
