// File: src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content container">
        {/* Social Media Links */}
        <div className="social-media">
          <a href="https://www.facebook.com/McDonalds" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.instagram.com/mcdonalds/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a
            href="https://x.com/McDonalds?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>

        {/* Business Hours */}
        <div className="business-hours">
          <h4>Business Hours</h4>
          <p>Mon–Fri: 11:00 AM – 9:00 PM</p>
          <p>Sat–Sun: 10:00 AM – 10:00 PM</p>
        </div>
      </div>

      <p className="footer-note">© 2025 Uncle Sammy. All rights reserved.</p>
    </footer>
  );
}
