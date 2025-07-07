import React from 'react';

export default function Contact() {
  return (
    <main className="contact-page container">
      <h1>Contact Us</h1>

      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48470.16590900187!2d-74.06107497832035!3d40.59932040000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245073382cb6d%3A0xb6b4d09f304c6056!2sMcDonald&#39;s!5e0!3m2!1sen!2sus!4v1749082806964!5m2!1sen!2sus"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </section>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}

