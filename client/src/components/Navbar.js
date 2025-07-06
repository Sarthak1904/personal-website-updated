import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

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
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <span className="nav-logo-dot"></span>Sarthak
      </Link>
      <div className="nav-links">
        <Link to="/about">ABOUT</Link>
        <Link to="/#work" onClick={handleWorkClick}>WORK</Link>
        <Link to="/contact">CONTACT</Link>
        <a href="/resume" className="nav-resume-link">RESUME</a>
      </div>
    </nav>
  );
};

export default Navbar; 