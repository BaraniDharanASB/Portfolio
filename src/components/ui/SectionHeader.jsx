import React from 'react';

export const SectionHeader = ({ badge, title, subtitle, icon: Icon = null }) => {
  return (
    <div className="section-header">
      {badge && (
        <span className="section-header-badge">
          {Icon && <Icon size={14} />}
          <span>{badge}</span>
        </span>
      )}
      <h2 className="section-header-title">{title}</h2>
      {subtitle && <p className="section-header-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
