import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MatrixBackground from '../components/MatrixBackground';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <Navbar />
        <Hero />
      </div>
      <MatrixBackground />
    </div>
  );
};

export default HomePage;