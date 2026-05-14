import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-logo">
        <img src="/v-logo.svg" alt="" aria-hidden="true" />
        <span>V · ACTOR</span>
      </div>

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
        <li><a href="#story" onClick={closeMenu}>Story</a></li>
        <li><a href="#theater" onClick={closeMenu}>Theater</a></li>
        <li><a href="#work" onClick={closeMenu}>Work</a></li>
        <li><Link to="/profile" onClick={closeMenu}>Profile</Link></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      <button
        className={`nav-toggle ${menuOpen ? 'active' : ''}`}
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
