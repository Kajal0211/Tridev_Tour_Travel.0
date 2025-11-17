import React, { useState, useEffect } from 'react';
import './BrandingLogo.css';

const BrandingLogo = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logo-container">
      <div className={`logo-wrapper ${isAnimating ? 'animate-logo' : ''}`}>
        <div className="logo-icon">🌍</div>
        <div className="logo-text-wrapper">
          <div className="logo-main">
            <span className="letter t">T</span>
            <span className="letter r">r</span>
            <span className="letter i">i</span>
            <span className="letter d">d</span>
            <span className="letter e">e</span>
            <span className="letter v">v</span>
          </div>
          <div className="logo-sub">
            <span className="sub-text">TRAVEL AGENCY</span>
          </div>
        </div>
      </div>
      <div className="logo-glow"></div>
    </div>
  );
};

export default BrandingLogo;