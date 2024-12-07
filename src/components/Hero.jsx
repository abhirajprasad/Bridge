import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <main className="hero">
      <h1 className="title">The Most Reliable Cross-Chain Bridge</h1>
      <p className="subtitle">
        In Web3, Secure Bridge Technology Enables Seamless Asset Transfer Across Multiple Blockchains.
        Each Transaction Is Verified And Protected.
      </p>
      <p clasName="developers">
        Developers: Darpit & Abhiraj
      </p>
      <br />
      <div className="cta-buttons">
        <button className="open-bridge">Open Bridge ↗</button>
        <button className="discover">Discover Now →</button>
      </div>
    </main>
  );
};

export default Hero;