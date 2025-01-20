import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css"; // Assuming you have a separate CSS file for the footer styles

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <h2>Stay Connected</h2>
          <p>Follow us on social media to get the latest updates and news.</p>
        </div>

        <div className="footer-links">
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
          <Link to="/policy" className="footer-link">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ecommerce. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
