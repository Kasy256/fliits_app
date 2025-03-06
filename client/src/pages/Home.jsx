import { useState, useEffect } from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BookCarStyle from '../components/BookYourStyle';
import { Link } from 'react-router-dom';
import CarImage from '../assets/images/share.webp'
import FeedbackButton from '../components/FeedbackButton';

const Home = () => {

  const [activeSections, setActiveSections] = useState('riders'); 

  const showRider = () => {
    console.log("Riders button clicked"); // Debugging
    setActiveSections('riders');
  };
  
  const showHost = () => {
    console.log("Hosts button clicked"); // Debugging
    setActiveSections('hosts');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <Header />
      <Hero />
      
      <FeedbackButton />
      {/* Sample Information section */}
      <p className="content-heading">Share Your Car With FL<span style={{ color: 'gold' }}>ii</span>TS</p>
      <div className="content-section">
        <div className="content-image">
          <img src={CarImage} alt="Share your car with FLiiTS" />
        </div>
        <div className="content-text">
          <div className="content-subtext">
            <p className="section-subtext">
              Unlock the potential of your vehicle by joining the <b>FL<span style={{ color: 'gold' }}>ii</span>TS</b> community. Earn extra income by renting out your car when you're not using it. It's simple, safe, and rewarding.
            </p><br />
            <Link to='/Carshare' className="share-car-button">Share Your Car</Link>
          </div>
        </div>
      </div>
      
      {/* How it works section */}
      <div className="works-sections">
        <p className="content-heading">How FL<span style={{ color: 'gold' }}>ii</span>TS Works</p>
        <div className="fliits-options-button">
          <button 
            id="fliits-rider" 
            className={`fliits-work-button ${activeSections === 'riders' ? 'active' : ''}`}
            onClick={showRider}
          >
            <span className="client-headings">FL<span style={{ color: 'gold' }}>ii</span>TS Rider</span>
          </button>
          <button 
            id="fliits-host" 
            className={`fliits-work-button ${activeSections === 'hosts' ? 'active' : ''}`}
            onClick={showHost}
          >
            <span className="client-headings">FL<span style={{ color: 'gold' }}>ii</span>TS Host</span>
          </button>
        </div>
        
        <div className="how-we-work-section">
          {activeSections === 'riders' && (
            <div className="works-contents active" id="riders">
              <ul className="rider-content">
                <li><strong>Browse Cars:</strong> Explore a wide range of cars available for rent near you. Filter by make, model, price, and location and find the perfect vehicle for your needs.</li>
                <li><strong>Book Your Ride:</strong> Select your desired car and choose the dates you need it. Review the rental terms and conditions and proceed to book. You’ll receive a confirmation once the owner approves.</li>
                <li><strong>Pick Up and Enjoy:</strong> Coordinate with the car owner to arrange a pick-up. Inspect the car, note damages, and start your journey.</li><br /><br /><br />
                <Link to='/AfterSearch' className="share-car-button">Order a ride</Link>
              </ul>
            </div>
          )}
          
          {activeSections === 'hosts' && (
            <div className="works-contents active" id="hosts">
              <ul className="hosts-content">
                <li><strong>List Your Car:</strong> Create a detailed listing for your car including photos, a thorough description, availability, and pricing. Set your rules and requirements for renters.</li>
                <li><strong>Approve Bookings:</strong> Receive booking requests from potential renters. Review their profiles and rental history, approve or decline requests based on your comfort level.</li>
                <li><strong>Meet and Greet:</strong> Arrange a meeting with the renter. Hand over the keys and ensure the renter understands all instructions for your vehicle.</li><br /><br /><br />
                <Link to='/Carshare' className="share-car-button">Share Your Car</Link>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Book your style section */}
      <p className="content-heading">Browse our limitless car sharing marketplace</p><br />
      <center><Link to='/AfterSearch' className="share-car-button">Book Your Style</Link></center><br />
      <br />
      <BookCarStyle />
    </div>
  );
};

export default Home;
