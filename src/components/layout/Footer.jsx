import React from 'react';
import { personalDetails, navLinks } from '../../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-brand-name">{personalDetails.name}</span>
            <p className="footer-brand-desc">
              Recruiter-focused portfolio targeting Java Full Stack Developer & Java Developer fresher roles.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Navigation</h4>
            <div className="footer-links-list">
              {navLinks.slice(0, 4).map((link) => (
                <a key={link.name} href={link.href} className="footer-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links-list">
              {navLinks.slice(4).map((link) => (
                <a key={link.name} href={link.href} className="footer-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
          </div>

          <button className="footer-back-to-top" onClick={scrollToTop}>
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
