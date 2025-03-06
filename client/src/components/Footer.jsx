import React from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
      <div className="footer-logo">
        <Link to='/'>FL<span style={{ color: 'gold' }}>ii</span>TS</Link>
        
      </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/investors">Investors</Link></li>
            <li><Link to="/policies">Policies</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li><Link to="/Carshare">Host with Us</Link></li>
            <li><Link to="/ride">Ride with Us</Link></li>
            <li><Link to="/host-tools">Host Tools</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Location</h3>
          <ul>
            <li><Link to="/africa">Africa</Link></li>
            <li><Link to="/asia">Asia</Link></li>
            <li><Link to="/north-america">North America</Link></li>
            <li><Link to="/south-america">South America</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Link to="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </Link>
            <aLink to="https://x.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </aLink>
            <Link to="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <p className="footer-bottom">&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </div>
  );
};

export default Footer;