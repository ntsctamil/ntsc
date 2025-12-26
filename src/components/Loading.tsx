import React from 'react';
import '../loading.css';

const Loading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-container">
      <div className="tamil-letters-bg"></div>
      <div className="loading-content">
        <div className="circle-loader">
          <div className="spinner"></div>
        </div>
        <h2>தமிழ்</h2>
        <div style={{ marginTop: '20px' }}>
          <span className="loading-dot"></span>
          <span className="loading-dot"></span>
          <span className="loading-dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
