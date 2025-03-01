import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/CarCard.css';

const Cars = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [iconColor, setIconColor] = useState('black');

  useEffect(() => {
    if (location.state?.cars) {
      setCars(location.state.cars);
    }
  }, [location.state]);

  const handleClick = (e) => {
    e.stopPropagation(); 
    setIconColor(iconColor === 'black' ? 'gold' : 'black');
  };

  const handleCarInfo = (car) => {
    navigate('/CarInfoPage', { state: { car } });
  };

  return (
    <div className="cars-container">
      <h1>Search Results</h1>
      <div className="cars-grid">
        {cars.length > 0 ? (
          cars.map((car) => (
            <div 
              className="Card-container" 
              key={car._id} 
              onClick={() => handleCarInfo(car)}
            >
              {car.carPhotos?.frontView && (
                <img 
                  src={`${import.meta.env.VITE_SERVER_BASE_URL}/${car.carPhotos.frontView}`} 
                  alt="Car" 
                  className="car-img"
                />
              )}
              
              <div className="car-info">
                <div className="car-header">
                  <h4>{car.model} ({car.year})</h4>
                  <FaHeart 
                    style={{ color: iconColor, cursor: 'pointer' }} 
                    onClick={handleClick}
                  />
                </div>

                <div className="car-details">
                  <p className="car-location">
                    <FaMapMarkerAlt /> {car.city}, {car.country}
                  </p>
                  <p className="car-price">${car.dailyRate}/day</p>
                </div>

                <div className="car-specs">
                  <span>{car.type}</span>
                  <span>{car.seats} Seats</span>
                  <span>{car.fuelType}</span>
                  <span>{car.transmission}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-cars">No cars found matching your criteria</p>
        )}
      </div>
    </div>
  );
};

export default Cars;