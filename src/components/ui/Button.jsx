import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon = null,
  href = null,
  onClick,
  type = 'button',
  className = '',
  target = null,
  rel = null,
  disabled = false
}) => {
  const sizeClass = size !== 'md' ? `btn-${size}` : '';
  const classes = `btn btn-${variant} ${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel} onClick={onClick}>
        {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
