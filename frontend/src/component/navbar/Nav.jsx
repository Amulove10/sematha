import React, { useState, useEffect } from 'react';
import './nav.css';
import logo from '../../assets/logo_dark.png'
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
     <a href="#home"><img  src={logo} alt="" /></a>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Services</a>
        <a href="#project">Projects</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
        <button className="nav-btn">Get Started</button>

      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
}

export default Nav;
