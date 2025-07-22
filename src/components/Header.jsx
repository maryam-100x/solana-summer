import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiTwitter } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="/" className="logo">
          <span className="logo-icon">🌞</span>
          <span className="logo-text">Solana Summer</span>
        </a>
        
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <button 
            className="mobile-close-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiX />
          </button>
          
          <a 
            href="#coin" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Token
          </a>
          <a 
            href="#event" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Event
          </a>
          <a 
            href="https://letsbonk.fun/token/Hdmx6XcGyWNdEwYGcBaAQLYWgniiea7ioPCgzknkbonk" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Buy
          </a>
          <a 
            href="https://x.com/solanasummer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link social-link"
          >
        <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>𝕏</span>
          </a>
        </nav>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;