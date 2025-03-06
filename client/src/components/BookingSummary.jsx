import React from 'react';
import '../styles/Bookingsummary.css';

const BookingSummary = () => {
    return (
        <div className='summary-container'>
            <h1>Booking Summary</h1>
            <hr />
            <div className='car-section'>
                <img src='benz.jfif' alt='Car image' />
                <div>
                    <h2>Mercedes Benz GLE 2018</h2>
                    <div className="basic-feature">
                        <p>SUV</p>
                        <p>Petrol</p>
                        <p>5 seats</p>
                    </div>
                    <p className='features-section'>Features: </p>
                </div>
            </div>
            <div className='host-info'>
                <h3>Host Information</h3>
                <div className="hostlabel">
                    <div className="host-details">
                        <p className='H-title'>Full Name</p>
                        <p className='H-reply'>Kasy Jonan</p>
                    </div>
                    <div className="host-details">
                        <p className='H-title'>Phone Number</p>
                        <p className='H-reply'>(256) 704361827</p>
                    </div>
                    <div className="host-details">
                        <p className='H-title'>Email</p>
                        <p className='H-reply'><a href="mailto:fliits@gmail.com">fliits@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingSummary;