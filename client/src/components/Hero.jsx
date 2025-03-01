import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaCar } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('rent');
  const navigate = useNavigate();

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const searchParams = { location, startDate, endDate, startTime, endTime };
    navigate('/AfterSearch', { state: { searchParams } });
  };

  const handleCarSearch = async (e) => {
    e.preventDefault();
    console.log("handleCarSearch called"); 
    try {
      console.log("Search Term:", searchTerm); // Log the search term
      const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/cars?search=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }
      const data = await response.json();
      console.log("Cars Found:", data); // Log the cars found
      navigate(`/cars?search=${encodeURIComponent(searchTerm)}`, { state: { cars: data } });
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  return (
    <section className="hero">
      <div className="search-tabs">
        <button
          className={`tab ${activeTab === 'rent' ? 'active' : ''}`}
          onClick={() => setActiveTab('rent')}
        >
          <FaCar /> Rent a Car
        </button>
        <button
          className={`tab ${activeTab === 'find' ? 'active' : ''}`}
          onClick={() => setActiveTab('find')}
        >
          <FaSearch /> Find a Car
        </button>
      </div>

      {activeTab === 'rent' ? (
        <form className="booking" onSubmit={handleBookingSubmit}>
          {/* Existing booking form inputs */}
          <div className="location">
            <div className="booking-titles">
              <label htmlFor="destination">Location</label>
            </div>
            <div className="booking-inputs">
              <input
                type="search"
                name="destination"
                id="destination"
                placeholder="City, Hotel or Airport"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="separator"></div>

          <div className="dates">
            <div className="booking-titles">
              <label htmlFor="start">From</label>
            </div>
            <div className="booking-inputs">
              <input
                type="text"
                name="start"
                placeholder="Add Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                onFocus={(e) => (e.target.type = 'date')}
                required
              />
              <input
                type="text"
                name="startTime"
                placeholder="Add Time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                onFocus={(e) => (e.target.type = 'time')}
                required
              />
            </div>
          </div>
          <div className="separator"></div>

          <div className="time">
            <div className="booking-titles">
              <label htmlFor="start">To</label>
            </div>
            <div className="booking-inputs">
              <input
                type="text"
                name="stop"
                placeholder="Add Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                onFocus={(e) => (e.target.type = 'date')}
                required
              />
              <input
                type="text"
                name="stopTime"
                placeholder="Add Time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                onFocus={(e) => (e.target.type = 'time')}
                required
              />
            </div>
          </div>
          <button type="submit" id="search">
            <FaSearch />
          </button>
        </form>
      ) : (
        <form className="car-search" onSubmit={handleCarSearch}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search cars by model, city, or Country"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="car-search-input"
            />
            <button type="submit" className="car-search-button">
              <FaSearch />
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Hero;