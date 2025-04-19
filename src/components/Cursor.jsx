import React, { useState, useEffect } from 'react';

function Cursor() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Track cursor movement
    const moveCursor = (e) => {
      const cursor = document.querySelector('.cursor-light');
      cursor.style.left = `${e.pageX - 15}px`;
      cursor.style.top = `${e.pageY - 15}px`;

    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`cursor-light ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: '#38bdf8', // Customize the cursor color
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999 ,
          mixBlendMode: 'lighten',
          transform: isHovered ? 'scale(1.5)' : 'scale(1)',
          transition: 'transform 0.1s ease-out',
        }}
      ></div>
    </>
  );
}

export default Cursor;
