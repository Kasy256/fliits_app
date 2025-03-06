import React, { useState } from 'react';
import '../styles/RentalDetail.css';

const RentalDetail = () => {
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [returnLocation, setReturnLocation] = useState('');

    return (
        <div className='rental-detail-container'>
            <h1>Rental Details</h1>
            <hr />
            <div>
                <h3>Pickup & Return Date/Time</h3>
                <div  className='pickup-return-dateTime'>
                    <div className='From'>
                        <p className='DateTime-title'>From</p>
                        <p className='DateTime-results'> 
                            <p>12/01/2025</p> 
                            <p>12:00 PM</p> 
                        </p>
                    </div>
                    <div className='To'>
                        <p className='DateTime-title'>To</p>
                        <p className='DateTime-results'> 
                            <p>12/01/2025</p> 
                            <p>12:00 PM</p> 
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Pickup & Return Location</h3>
                <div  className='pickup-return-dateTime'>
                    <div className='From'>
                        <p className='DateTime-results'> 
                            <p>Kololo, Kampala</p> 
                        </p>
                    </div>
                    <div className='To'>
                        <p className='DateTime-results'> 
                            <p>Lugogo, Kampala</p> 
                        </p>
                    </div>
                </div>
            </div>
            <div>
                    <p className='DateTime-results-total'>
                    <h2>Total Days/Hours: </h2> 
                        <p>1 Day</p> 
                        <p>12 Hours</p>
                    </p>
            </div>
        </div>
    );
};

export default RentalDetail;