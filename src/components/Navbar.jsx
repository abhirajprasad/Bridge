import React from 'react';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="" alt="Logo" className="logo-img" />
      </div>
      <div className="nav-links">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Public Key</a>
        <a href="#" className="nav-link">Private Key</a>
        <a href="#" className="nav-link">Community</a>
        <a href="#" className="nav-link">Get</a>
      </div>
      <div className="auth-buttons">
        <button className="register-btn">Register</button>
        <button className="wallet-btn">New Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;