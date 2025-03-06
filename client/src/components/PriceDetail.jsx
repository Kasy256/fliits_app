import React from 'react';
import '../styles/PriceDetails.css';

const PriceDetail = () => {
    return (
        <div className="price-detail-container">    
            <h2>Price Details</h2>
            <hr />
            <div className="receipt-item">
                <span className="receipt-title">Base Price</span>
                <span className="price">$100.00</span>
            </div>
            <div className="receipt-item">
                <span className="receipt-title">Tax & Service Fee</span>
                <span className="price">$20.00</span>
            </div>
            <div className="receipt-item">
                <span className="receipt-title">Insurance</span>
                <span className="price">$15.00</span>
            </div>
            <div className="receipt-item">
                <span className="receipt-title">Fuel Charges</span>
                <span className="price">$10.00</span>
            </div>
            <div className="receipt-item">
                <span className="receipt-title">Discount</span>
                <span className="price">-$5.00</span>
            </div>
            <hr />
            <div className="receipt-item total">
                <span className="receipt-title-total">Total Price</span>
                <span className="price-total">$140.00</span>
            </div>
        </div>
    );
};

export default PriceDetail;