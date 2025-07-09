import React from 'react';

const SeaBackground = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
    background: 'linear-gradient(to top, #6dd5ed 0%, #2193b0 100%)',
  }}>
    {/* Animated Waves */}
    <svg width="100%" height="100%" viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: 0, left: 0 }}>
      <defs>
        <linearGradient id="seaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2193b0" />
          <stop offset="100%" stopColor="#6dd5ed" />
        </linearGradient>
      </defs>
      <path fill="url(#seaGradient)" fillOpacity="1">
        <animate attributeName="d" dur="8s" repeatCount="indefinite"
          values="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z;
                  M0,180 C400,120 1040,240 1440,180 L1440,320 L0,320 Z;
                  M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z" />
      </path>
    </svg>
    {/* Floating Island */}
    <svg width="200" height="120" style={{ position: 'absolute', left: '60%', top: '10%' }}>
      <g className="island-float">
        <ellipse cx="100" cy="100" rx="80" ry="20" fill="#ffe29f" />
        <ellipse cx="100" cy="90" rx="60" ry="15" fill="#b2dfdb" />
        <rect x="80" y="60" width="40" height="30" rx="10" fill="#8bc34a" />
        <ellipse cx="100" cy="60" rx="15" ry="8" fill="#388e3c" />
      </g>
    </svg>
    <style>{`
      .island-float {
        animation: floatIsland 4s ease-in-out infinite alternate;
      }
      @keyframes floatIsland {
        0% { transform: translateY(0); }
        100% { transform: translateY(-12px); }
      }
    `}</style>
  </div>
);

export default SeaBackground; 