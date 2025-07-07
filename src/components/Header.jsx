
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={process.env.PUBLIC_URL + '/images/logo.jpg'}
            alt="Uncle Sammy logo"
            width="40"
            className="me-2"
          />
          <span className="text-primary">Uncle Sammy</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            {['/', '/menu', '/about', '/contact', '/cart'].map((path, idx) => {
              const label = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
              return (
                <li className="nav-item" key={idx}>
                  <NavLink
                    className="nav-link"
                    to={path}
                    end
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
