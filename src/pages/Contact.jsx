import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions, feedback, or want to get involved? We’d love to hear from you.</p>
      </section>

      <section className="contact-form-section">
        {submitted ? (
          <div className="thank-you-message">
            <h2>Thank you!</h2>
            <p>We’ll be in touch soon. 🌱</p>
          </div>
        ) : (
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        )}
      </section>

      <footer className="contact-footer">
        <p>📍 Boston University • Department of Facilities & Sustainability</p>
        <p>📧 energy@bu.edu</p>
      </footer>
    </div>
  );
};

export default Contact;
