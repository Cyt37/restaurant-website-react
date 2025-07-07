import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/cart', label: 'Cart' }
];

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header>
      <div className="logo-and-nav container">
        <Link to="/" className="logo">
          <img src="/images/logo.jpg" alt="Logo" />
          <span>Uncle Sammy</span>
        </Link>
        <nav>
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={pathname === l.to ? 'active-link' : ''}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="hamburger" id="hamburger-btn">
            <span /><span /><span />
          </button>
        </nav>
      </div>
    </header>
  );
}
