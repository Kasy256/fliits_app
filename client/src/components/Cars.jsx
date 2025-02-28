import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Hero.css';
const Cars = () => {
  const location = useLocation();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (location.state?.cars) {
      setCars(location.state.cars);
    }
  }, [location.state]);

  return (
    <div className="cars-container">
      <h1>Search Results</h1>
      {cars.length > 0 ? (
        <ul className="cars-list">
          {cars.map((car) => (
            <li key={car._id} className="car-item">
              <h2>{car.model} ({car.year})</h2>
              <p><strong>Location:</strong> {car.city}, {car.country}</p>
              <p><strong>Type:</strong> {car.type}</p>
              <p><strong>Color:</strong> {car.color}</p>
              <p><strong>Seats:</strong> {car.seats}</p>
              <p><strong>Fuel Type:</strong> {car.fuelType}</p>
              <p><strong>Transmission:</strong> {car.transmission}</p>
              <p><strong>Daily Rate:</strong> ${car.dailyRate}</p>
              <p><strong>Weekly Rate:</strong> ${car.weeklyRate}</p>
              <p><strong>Monthly Rate:</strong> ${car.monthlyRate}</p>
              <p><strong>Security Deposit:</strong> ${car.securityDeposit}</p>
              <p><strong>Extra Mileage Fee:</strong> ${car.extraMileageFee}/mile</p>
              <p><strong>Late Return Fee:</strong> ${car.lateReturnFee}/hour</p>
              <p><strong>Cleaning Fee:</strong> ${car.cleaningFee}</p>
              <p><strong>Description:</strong> {car.carDescription}</p>
              <p><strong>Renter Conditions:</strong> {car.renterConditions}</p>
              <p><strong>Goals:</strong> {car.goals}</p>
              <p><strong>Additional Info:</strong> {car.additionalInfo}</p>
              <div className="car-photos">
                <h3>Photos:</h3>
                {car.carPhotos?.frontView && (
                  <img
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/${car.carPhotos.frontView}`}
                    alt="Front View"
                  />
                )}
                {car.carPhotos?.rearView && (
                  <img
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/${car.carPhotos.rearView}`}
                    alt="Rear View"
                  />
                )}
                {car.carPhotos?.leftSideView && (
                  <img
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/${car.carPhotos.leftSideView}`}
                    alt="Left Side View"
                  />
                )}
                {car.carPhotos?.rightSideView && (
                  <img
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/${car.carPhotos.rightSideView}`}
                    alt="Right Side View"
                  />
                )}
                {car.carPhotos?.frontInterior && (
                  <img
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/${car.carPhotos.frontInterior}`}
                    alt="Front Interior"
                  />
                )}
                {car.carPhotos?.backInterior && (
                  <img
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/${car.carPhotos.backInterior}`}
                    alt="Back Interior"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cars found.</p>
      )}
    </div>
  );
};

export default Cars;
