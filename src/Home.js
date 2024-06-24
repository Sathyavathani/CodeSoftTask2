import React from 'react';
import './home.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
export default function Home() {

  let navigate = useNavigate();
  var discover = () => {
    navigate('/discover');//navigate to this page
  }

  var contact = () => {
    navigate('/contact');//navigate to this page
  }
  return (
    <div className="home-container">
      <div >
        <h1>Welcome to Sathya Travels</h1>
        <p>Your adventure starts here</p>
        <button className="cta-button" onClick={discover}>Explore Now</button>
      </div>

      <div className="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src="images/paris.jpg" alt="Destination 1" />
            <h3>Paris, France</h3>
            <p>The city of lights</p>
          </div>
          <div className="destination-card">
            <img src="images/tokyo.jpg" alt="Destination 2" />
            <h3>Tokyo, Japan</h3>
            <p>Experience the blend of tradition and technology</p>
          </div>
          <div className="destination-card">
            <img src="images/usa.jpg" alt="Destination 3" />
            <h3>New York, USA</h3>
            <p>The city that never sleeps</p>
          </div>
          <div className="destination-card">
            <img src="images/australia.jfif" alt="Destination 4" />
            <h3>Sydney, Australia</h3>
            <p>Explore the land down under</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to start your journey?</h2>
        <p align='center'>Contact us today and plan your next adventure with Sathya Travels!</p>
        <button className="cta-button" onClick={contact}>Get in Touch</button>
      </div>
    </div>
  );
}
