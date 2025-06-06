import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Mindful Way Therapy</div>
      <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
