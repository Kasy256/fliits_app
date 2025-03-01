import { useState, useEffect } from 'react';
import { FaMedal, FaGasPump, FaCouch, FaStar, FaCogs, FaCarSide, 
         FaMapMarkerAlt, FaPlay, FaSnowflake, FaBatteryFull, FaCheck } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/CarInfoPage.css';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const CarInfoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const car = location.state?.car;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleBookClick = () => {
    if (isLoggedIn) {
      navigate('/PaymentPage');
    } else {
      navigate(`/Login?redirect=/PaymentPage`);
    }
  };

  if (!car) return <div className="loading">Loading car details...</div>;

  return (
    <div className="car-info-container">
      {/* Image Section */}
      <div className="car-pics">
        <div className="main-pic-section">
          <img 
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${car.carPhotos?.frontView}`} 
            alt={`${car.model} front view`} 
            className="main-pic"
          />
        </div>
        <div className="more-pics">
          <img 
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${car.carPhotos?.sideView}`} 
            alt={`${car.model} side view`} 
            className="sub-pic" 
          />
          <img 
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${car.carPhotos?.interiorView}`} 
            alt={`${car.model} interior`} 
            className="sub-pic" 
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="details-container">
        {/* Car Profile */}
        <div className="car-profile">
          <h2 className="car-title">{car.model} ({car.year})</h2>
          
          <div className="key-specs">
            <div className="spec-item">
              <FaStar className="spec-icon" />
              <span>5.0 (25 reviews)</span>
            </div>
            <div className="spec-item">
              <FaCouch className="spec-icon" />
              <span>{car.seats} Seats</span>
            </div>
            <div className="spec-item">
              <FaGasPump className="spec-icon" />
              <span>{car.fuelType}</span>
            </div>
            <div className="spec-item">
              <FaCogs className="spec-icon" />
              <span>{car.transmission}</span>
            </div>
          </div>

          {/* Host Info */}
          <div className="host-info">
            <img src="/default-host.jpg" alt="Host" className="host-photo" />
            <div className="host-details">
              <h3 className="host-name">
                {car.host?.name || 'Professional Host'}
                <FaMedal className="host-badge" />
              </h3>
              <p className="host-since">Host since {car.host?.since || '2020'}</p>
            </div>
          </div>

          {/* Description */}
          <div className="description-section">
            <h3 className="section-title">Description</h3>
            <p className="car-description">
              {car.description || 'Premium vehicle with excellent maintenance and care'}
            </p>
          </div>

          {/* Features */}
          <div className="features-section">
            <h3 className="section-title">Features</h3>
            <div className="features-grid">
              <div className="feature-item">
                <FaCarSide className="feature-icon" />
                <span>All-Wheel Drive</span>
              </div>
              <div className="feature-item">
                <FaSnowflake className="feature-icon" />
                <span>Air Conditioning</span>
              </div>
              <div className="feature-item">
                <FaPlay className="feature-icon" />
                <span>Apple CarPlay</span>
              </div>
              <div className="feature-item">
                <FaBatteryFull className="feature-icon" />
                <span>Wireless Charging</span>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="requirements-section">
            <h3 className="section-title">Requirements</h3>
            <div className="requirements-list">
              <div className="requirement-item">
                <FaCheck className="requirement-icon" />
                <span>Minimum 25 years old</span>
              </div>
              <div className="requirement-item">
                <FaCheck className="requirement-icon" />
                <span>Valid driver's license</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Widget */}
        <div className="booking-widget">
          <div className="pricing-box">
            <div className="price-header">
              <h3 className="daily-price">${car.dailyRate}/day</h3>
              <div className="rating">
                <FaStar className="star-icon" />
                <span>5.0 (25)</span>
              </div>
            </div>

            {/* Date Pickers */}
            <div className="date-selectors">
              <div className="date-group">
                <label>Pick-up</label>
                <div className="datetime-inputs">
                  <input type="date" className="date-input" />
                  <input type="time" className="time-input" />
                </div>
              </div>
              <div className="date-group">
                <label>Drop-off</label>
                <div className="datetime-inputs">
                  <input type="date" className="date-input" />
                  <input type="time" className="time-input" />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="location-section">
              <label>Pickup Location</label>
              <input
                type="text"
                className="location-input"
                value={`${car.city}, ${car.country}`}
                readOnly
              />
            </div>

            <button 
              className="book-button"
              onClick={handleBookClick}
            >
              Continue to Book
            </button>

            <div className="support-section">
              <button className="inquiry-button">Ask Host a Question</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInfoPage;