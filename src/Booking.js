import React, { useState } from 'react';
import ThankingPage from './ThankingPage';
export default function Booking() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmitted(true);
    };
  return (
    <div>
         <div className="contact-container">
      {submitted ? (
        <ThankingPage />
      ) : (
        <>
          <h2>Contact Us</h2>
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
              <label htmlFor="phoneno">phoneno:</label>
              <input type="text" id="phno" name="phno" required />
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
        
    </div>
  )
}
