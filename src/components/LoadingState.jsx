import React from 'react';
import './LoadingState.css';

const LoadingState = () => {
  return (
    <div className="loading-container">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Loading amazing travel experiences...</p>
    </div>
  );
};

export default LoadingState;