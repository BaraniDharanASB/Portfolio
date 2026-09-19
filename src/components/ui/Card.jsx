import React from 'react';

export const Card = ({ children, glowing = false, className = '' }) => {
  return (
    <div className={`card ${glowing ? 'card-glowing' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
