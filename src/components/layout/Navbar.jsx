import React, { useState } from 'react';
import { navLinks, personalDetails } from '../../data/portfolioData';
import { Button } from '../ui/Button';
import { Menu, X, FileText, Code2 } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-logo" onClick={closeMobileMenu}>
          <span className="navbar-logo-badge">BD</span>
          <span>{personalDetails.name}</span>
        </a>

        <nav className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar-link"
              onClick={closeMobileMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <Button
            href="#resume"
            variant="outline"
            size="sm"
            icon={FileText}
            className="btn-resume-nav"
          >
            Resume
          </Button>

          <button
            className="navbar-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
