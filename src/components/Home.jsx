
import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';

export default function Home() {
  return (
    <>
      <div className="bg-light py-5">
        <div className="container text-center">
          <img
            src={process.env.PUBLIC_URL + '/images/banner.jpg'}
            alt="Delicious food banner"
            className="img-fluid rounded mb-4"
          />
          <h1 className="display-4 text-primary mb-3">Welcome to Uncle Sammy</h1>
          <p className="lead mb-4">Where flavor meets tradition.</p>
          <Link to="/cart" className="btn btn-primary btn-lg">
            View Cart / Checkout
          </Link>
        </div>
      </div>

      <Gallery />
    </>
  );
}
