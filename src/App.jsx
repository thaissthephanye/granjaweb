import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import Galpoes from './pages/Galpoes';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galpoes" element={<Galpoes />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;