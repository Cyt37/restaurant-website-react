
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Social Media */}
          <div className="col-md-6 mb-3 mb-md-0">
            <h5>Follow Us</h5>
            <a
              href="https://www.facebook.com/McDonalds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/mcdonalds/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3"
            >
              Instagram
            </a>
            <a
              href="https://x.com/McDonalds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              Twitter
            </a>
          </div>

          {/* Business Hours */}
          <div className="col-md-6">
            <h5>Business Hours</h5>
            <p className="mb-1">Mon–Fri: 11:00 AM – 9:00 PM</p>
            <p>Sat–Sun: 10:00 AM – 10:00 PM</p>
          </div>
        </div>

        <div className="text-center mt-3">
          <small>© 2025 Uncle Sammy. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
