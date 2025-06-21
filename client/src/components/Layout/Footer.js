import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Our Store</h3>
            <p>
              Your one-stop shop for top-quality products at affordable prices.
              We deliver happiness to your doorstep with free shipping, easy
              returns, and 24/7 support.
            </p>
            <p>Email: support@ecommerce.com</p>
            <p>Phone: +91-9876543210</p>
            <p>Address: 123 Market Street, Mumbai, India</p>
          </div>

          <div className="footer-column">
            <h3>Shop By Category</h3>
            <ul>
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home & Kitchen</li>
              <li>Beauty & Health</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Customer Care</h3>
            <ul>
              <li>
                <Link to="/help" className="footer-link">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/returns" className="footer-link">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="footer-link">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/order-tracking" className="footer-link">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Stay Updated</h3>
            <p>
              Sign up to receive exclusive offers, latest deals, and new
              arrivals in your inbox.
            </p>
            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-extra">
          <div className="footer-social">
            <a href="/" className="social-icon">
              Facebook
            </a>
            <a href="/" className="social-icon">
              Instagram
            </a>
            <a href="/" className="social-icon">
              Twitter
            </a>
            <a href="/" className="social-icon">
              LinkedIn
            </a>
          </div>

          <div className="footer-payments">
            <p>We Accept</p>
            <div className="payment-icons">
              <span>Visa</span>
              <span>MasterCard</span>
              <span>PayPal</span>
              <span>UPI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ecommerce. All Rights Reserved.</p>
        <p>
          <Link to="/about" className="footer-link">
            About Us
          </Link>{" "}
          |
          <Link to="/policy" className="footer-link">
            {" "}
            Privacy Policy
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
