import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import heroBg from './assets/hero-bg.png';
import Home from './Home';
import Providers from './Providers';

function App() {
  return (
    <div className="App">
      {/* Constant Header and Hero */}
      <div
        className="hero-header"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <header className="main-nav precise-stack">
          <div className="top-row">
            <div className="site-name">MINDFUL WAY THERAPY, PLLC</div>
            <div className="nav-bar">
              <Link to="/" className="active">Home</Link>
              <Link to="/providers">Providers</Link>
              <a href="#work">Work With Us</a>
              <a href="#neurodiversity">Neurodiversity</a>
              <a href="#services">Services</a>
              <a href="#get-started">Get Started</a>
            </div>
          </div>
        </header>
      </div>

      {/* Route-based content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/providers" element={<Providers />} />
      </Routes>
    </div>
  );
}

export default App;
