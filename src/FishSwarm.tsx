// import React from 'react';

const fishes = [
  { id: 1, top: '60%', left: '-10%', size: 40, duration: 18, delay: 0 },
  { id: 2, top: '70%', left: '-15%', size: 30, duration: 22, delay: 3 },
  { id: 3, top: '80%', left: '-8%', size: 50, duration: 25, delay: 6 },
  { id: 4, top: '65%', left: '-12%', size: 35, duration: 20, delay: 2 },
  { id: 5, top: '75%', left: '-18%', size: 28, duration: 24, delay: 5 },
];

const Fish = ({ size }: { size: number }) => (
  <svg width={size} height={size / 2} viewBox="0 0 40 20" fill="none">
    <ellipse cx="15" cy="10" rx="12" ry="8" fill="#ffb347" />
    <polygon points="28,10 40,2 40,18" fill="#ff7043" />
    <circle cx="10" cy="10" r="2" fill="#333" />
  </svg>
);

const FishSwarm = () => (
  <div style={{
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 1,
  }}>
    {fishes.map(fish => (
      <div
        key={fish.id}
        style={{
          position: 'absolute',
          top: fish.top,
          left: fish.left,
          animation: `swim${fish.id} ${fish.duration}s linear ${fish.delay}s infinite`,
        }}
      >
        <Fish size={fish.size} />
      </div>
    ))}
    <style>{`
      ${fishes.map(fish => `
        @keyframes swim${fish.id} {
          0% { left: ${fish.left}; }
          100% { left: 110vw; }
        }
      `).join('')}
    `}</style>
  </div>
);

export default FishSwarm; 