import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src="https://api.iconify.design/fluent-emoji:seedling.svg" alt="Bloom" width="24" height="24" />
            <span>Bloom Studio</span>
          </Link>
          <p>Crafting digital experiences that feel alive.</p>
        </div>

        <div className="footer__links">
          <div>
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/#services">Services</Link>
            <Link to="/#work">Our Work</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:hello@bloomstudio.co">Email Us</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Bloom Studio. All rights reserved.</span>
        <span>Made with care ✦</span>
      </div>
    </footer>
  );
}