import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar__logo">
        <img
          src="https://api.iconify.design/fluent-emoji:seedling.svg"
          alt="Bloom"
          width="28"
          height="28"
        />
        <span>Bloom Studio</span>
      </Link>

      <div className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/#services" onClick={() => setOpen(false)}>Services</Link>
        <Link to="/#work" onClick={() => setOpen(false)}>Work</Link>
        <Link to="/contact" className={`navbar__cta ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
      </div>

      <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span className={open ? 'line line--x1' : 'line'} />
        <span className={open ? 'line line--x2' : 'line'} />
        <span className={open ? 'line line--x3' : 'line'} />
      </button>
    </nav>
  );
}