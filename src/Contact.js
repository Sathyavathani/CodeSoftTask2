import React, { useState } from 'react';
import './contact.css'; // Import the CSS file
import ThankingPage from './ThankingPage';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      {submitted ? (
        <ThankingPage />
      ) : (
        <>
          <h2>Contact Us</h2>
          <p>Need help or have any questions? Don't hesitate to reach out to us using the contact information provided below:</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <img src="images/email.png" className="contact-icon" alt="Email" />
              <a href="mailto:sathyatravels@gmail.com">sathyatravels@gmail.com</a>
            </div>
            <div className="contact-item">
              <img src="images/contact.png" className="contact-icon" alt="Phone" />
              <a href="tel:+919087654389">+91-9087654389</a>
            </div>
            <div className="contact-item">
              <img src="images/address.png" className="contact-icon" alt="Address" />
              <span>456 Explorer Ave, Wanderlust city</span>
            </div>
            <div className="contact-item">
              <img src="images/instagram.png" className="contact-icon" alt="Instagram" />
              <span>@sathyaTravels</span>
            </div>
          </div>

          <p>For additional information, you can also complete the form below, and we will respond to you as soon as we can:</p>
          
          <form method="post" onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}
