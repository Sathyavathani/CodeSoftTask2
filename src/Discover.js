import React, { useState } from 'react';
import './discover.css'; // CSS for styling
import { useNavigate } from 'react-router-dom';

const Discover = () => {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const destinations = [
        {
            id: 1,
            name: 'Paris,France',
            imageUrl: 'images/paris.jpg',
            description: 'Experience the bustling metropolis of Tokyo, with its blend of modern skyscrapers and historic temples.',
        },
        {
            id: 2,
            name: 'Tokyo,Japan',
            imageUrl: 'images/tokyo.jpg',
            description: 'Escape to the picturesque island of Santorini, famous for its white-washed buildings and stunning sunsets.',
        },
        {
            id: 3,
            name: 'USA NewYork',
            imageUrl: 'images/usa.jpg',
            description: 'Relax on the beautiful beaches of Maui, surrounded by lush landscapes and clear blue waters.',
        },
    ];

    const handleDestinationClick = (destination) => {
        if (selectedDestination === destination) {
            setSelectedDestination(null);
        } else {
            setSelectedDestination(destination);
        }
    };
var navigate=new useNavigate()
   var booknow=()=>{
        navigate("/booking")
    }

    return (
        <div className="discover-page">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Discover Your Next Adventure</h1>
                    <p>Explore breathtaking destinations and plan your perfect getaway.</p>
                </div>
            </section>

            <section className="destination-section">
                <div className="destination-grid">
                    {destinations.map((destination) => (
                        <div key={destination.id} className={`destination-card ${selectedDestination === destination ? 'selected' : ''}`}>
                            <img src={destination.imageUrl} alt={destination.name} />
                            <div className="destination-info">
                                <h3>{destination.name}</h3>
                                <p>{destination.description}</p>
                                <button onClick={() => handleDestinationClick(destination)} className="btn btn-book">
                                    {selectedDestination === destination ? 'Close' : 'Learn More'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={`booking-info ${selectedDestination ? 'show' : ''}`}>
                {selectedDestination && (
                    <div className="booking-details">
                        <h2>Booking Information</h2>
                        <p><strong>Destination:</strong> {selectedDestination.name}</p>
                       
                    </div>
                )}
            </section>
            <button onClick={booknow} className="btn btn-book">Book Now</button>

            <footer>
                <p>Contact Us: sathyatravels@gmail.com</p>
            </footer>
        </div>
    );
};

export default Discover;
