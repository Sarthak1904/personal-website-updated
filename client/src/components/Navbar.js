import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effect to close the menu when the route changes
  useEffect(() => {
    closeMenu();
  }, [location]);
  
  // Effect for scrolling to sections
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleWorkClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('work');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu(); // Close menu after clicking
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <span className="nav-logo-dot"></span>Sarthak
      </Link>
      
      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/about" onClick={closeMenu}>ABOUT</Link>
        <Link to="/#work" onClick={handleWorkClick}>WORK</Link>
        <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
        <a href="/resume" className="nav-resume-link" onClick={closeMenu}>RESUME</a>
      </div>
    </nav>
  );
};

export default Navbar;  