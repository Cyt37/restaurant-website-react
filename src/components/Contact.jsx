
import React from 'react';

export default function Contact() {
  return (
    <main className="container py-5">
      <h1 className="mb-4 text-primary">Contact Us</h1>

      {/* Map */}
      <div className="ratio ratio-16x9 mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48470.16590900187!2d-74.06107497832035!3d40.59932040000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245073382cb6d%3A0xb6b4d09f304c6056!2sMcDonald&#39;s!5e0!3m2!1sen!2sus!4v1749082806964!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>

      {/* Form */}
      <h2 className="mb-3">Send Us a Message</h2>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" required />
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            required
          ></textarea>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </main>
  );
}
