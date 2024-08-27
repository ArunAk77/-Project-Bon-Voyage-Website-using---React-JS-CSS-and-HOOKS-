import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <div className="footerTop">
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">In need of smarter ways forward?</h2>
        <h1 className="footer-subtitle">Get in touch.</h1>

        <div className="footer-sections">
          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li>MySigns</li>
              <li>Internet of Things</li>
              <li>Business Intelligence</li>
              <li>Artificial Intelligence</li>
              <li>Apps</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li>Cloud</li>
              <li>Consultancy</li>
              <li>Modern Workplace</li>
              <li>Managed Services</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Sectors</h4>
            <ul>
              <li>Occupational health and safety services</li>
              <li>Logistics</li>
              <li>Industry</li>
              <li>Business services</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About us</h4>
            <ul>
              <li>About us</li>
              <li>Approach</li>
              <li>Success Stories</li>
              <li>Insights</li>
              <li>Work at</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Newsletter</h4>
            <form>
              <input type="email" placeholder="Email" required />
              <div className="checkbox-container">
                <input type="checkbox" required />
                <label>I agree with the terms and conditions and the privacy statement.</label>
              </div>
              <button type="submit" className="submit-button">To send</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-socials">
        <a rel="noopener noreferrer" href='https://www.facebook.com/profile.php?id=100036033393076' target='_blank'><FaFacebookF /></a>
        <a rel="noopener noreferrer" href='https://www.linkedin.com/feed/' target='_blank'><FaLinkedinIn /></a>
        <a rel="noopener noreferrer" href='https://x.com/infantarun11' target='_blank'><FaTwitter /></a>
        <a rel="noopener noreferrer" href='https://www.instagram.com/x_x_xa_kx_x_x/?hl=en' target='_blank'><FaInstagram /></a>
        <a rel="noopener noreferrer" href='https://mail.google.com/mail/u/0/' target='_blank'><FaEnvelope /></a>
      </div>

      <div className="footer-bottom">
        <span>© 2024 YourCompanyName</span>
        <div className="footer-links">
          <a href="/privacy-statement">Privacy statement</a>
          <a href="/terms-and-conditions">Terms and Conditions</a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;

