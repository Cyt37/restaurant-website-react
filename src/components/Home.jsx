// File: src/components/Home.jsx
import React from 'react';
import Gallery from './Gallery';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero">
        <img
          src={process.env.PUBLIC_URL + '/images/banner.jpg'}
          alt="Delicious food banner"
        />
        <div className="hero-text">
          <h1>Welcome to Uncle Sammy</h1>
          <p>Where flavor meets tradition.</p>
          <Link to="/cart" className="hero-order-btn">
            View Cart / Checkout
          </Link>
        </div>
      </section>
      <Gallery />
    </>
  );
}
