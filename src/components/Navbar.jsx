import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [user, setUser] = useState(null); // todo: auth

  const handleToggle = () => {
    console.log('toggle clicked, current state:', isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <header class="header">
      <div className="nav-container">
        <div class="logo">
          <a href="#">Nexus<span>MLM</span></a>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={handleToggle} 
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#tiers">Plans</a></li>
            <li><a href="#calculator">Earnings</a></li>
            <li><a href="#about">About</a></li>
          </ul>

          <div className="nav-btn-group">
            <button className="btn btn-secondary" onClick={() => console.log('login modal')}>Login</button>
            <a href="#register" className="btn btn-primary">Join Now</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
