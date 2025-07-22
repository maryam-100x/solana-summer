import React from 'react';
import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">Solana Summer</h3>
          <p className="footer-tagline">Celebrating the spirit of Solana Beach</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4 className="link-group-title">Navigation</h4>
            <a href="#event" className="footer-link">Event</a>
            <a href="#coin" className="footer-link">Token</a>
            <a href="#buy" className="footer-link">Purchase</a>
          </div>
          
          <div className="link-group">
            <h4 className="link-group-title">Socials</h4>
            <div className="social-links">
              <a href="https://x.com/solanasummer" target="_blank" rel="noopener noreferrer" className="social-link">
                𝕏
              </a>
              <a href="https://x.com/i/communities/1921023478162993382" target="_blank" rel="noopener noreferrer" className="social-link">
                𝕏 Community
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} Solana Summer. All rights reserved.
          <br />
          In partnership with the City of Solana Beach, CA.
        </p>
      </div>
    </footer>
  );
};

export default Footer;