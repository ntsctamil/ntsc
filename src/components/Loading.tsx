import React, { useEffect, useState } from 'react';
import '../loading.css';

const Loading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  if (!isLoading) return null;

  const tamilLetters = ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ', 'க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'த', 'ந', 'ப', 'ம', 'ய', 'ர', 'ல', 'வ', 'ஷ', 'ஸ', 'ற', 'ன'];

  return (
    <div className="loading-container">
      <div className="tamil-letters-bg">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="tamil-letter"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              fontSize: Math.random() * 12 + 8 + 'px',
              animationDelay: Math.random() * 3 + 's'
            }}
          >
            {tamilLetters[Math.floor(Math.random() * tamilLetters.length)]}
          </span>
        ))}
      </div>
      <div className="loading-content">
        <div className="circle-loader">
          <svg className="ashoka-chakra" viewBox="0 0 200 200" width="120" height="120">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#003DA5" strokeWidth="2"/>
            <circle cx="100" cy="100" r="20" fill="#003DA5"/>
            {[...Array(24)].map((_, i) => {
              const angle = (i * 360) / 24;
              const x1 = 100 + 90 * Math.cos((angle * Math.PI) / 180);
              const y1 = 100 + 90 * Math.sin((angle * Math.PI) / 180);
              const x2 = 100 + 20 * Math.cos((angle * Math.PI) / 180);
              const y2 = 100 + 20 * Math.sin((angle * Math.PI) / 180);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#003DA5" strokeWidth="1.5"/>
              );
            })}
          </svg>
        </div>
        <h2>தமிழ்</h2>
      </div>
    </div>
  );
};

export default Loading;
