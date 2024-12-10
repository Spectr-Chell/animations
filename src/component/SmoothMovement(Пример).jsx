import React, { useState } from 'react';

function SmoothMovement() {
  const [move, setMove] = useState(false);

  const toggleMove = () => setMove(!move);

  return (
    <div>
      <button onClick={toggleMove}>Toggle Movement</button>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'blue',
          transition: 'transform 1s',
          transform: move ? 'translateX(300px)' : 'translateX(700px)'
        }}
      />
    </div>
  );
}

export default SmoothMovement;
