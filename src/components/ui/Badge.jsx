import React from 'react';

export const Badge = ({ children, variant = 'default', className = '' }) => {
  const variantClass = variant !== 'default' ? `badge-${variant}` : '';
  return (
    <span className={`badge ${variantClass} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
