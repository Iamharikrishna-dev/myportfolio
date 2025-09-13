// SnowEffect.js
import React, { useEffect } from 'react';
import './snow-effect.scss';

const SnowEffect = () => {
  useEffect(() => {
    // Dynamically generate the snowflakes
    const snowContainer = document.querySelector('.g-snows');

    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('li');
      snowContainer.appendChild(snowflake);
    }
  }, []);

  return (
    <div className="g-snows">
      {/* Snowflakes are generated dynamically in useEffect */}
    </div>
  );
};

export default SnowEffect;
