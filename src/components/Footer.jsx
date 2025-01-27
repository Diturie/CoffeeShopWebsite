import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>GET IN TOUCH</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Rruga B, Prishtine.
          </p>
          <p>
            <i className="fas fa-phone"></i> +383 49 552 144
          </p>
          <p>
            <i className="fas fa-envelope"></i> thedailygrind@example.com
          </p>
        </div>

        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <p>Follow us on social media!</p>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="footer-section">
          <h3>OPEN HOURS</h3>
          <p>MONDAY - FRIDAY</p>
          <p>8.00 AM - 10.00 PM</p>
          <p>SATURDAY - SUNDAY</p>
          <p>2.00 PM - 10.00 PM</p>
        </div>

        <div className="footer-section">
          <h3>NEWSLETTER</h3>
          <p>Join our coffee community! Subscribe to our newsletter for exclusive offers, the latest blends, and brewing tips straight to your inbox</p>
          <div className="newsletter">
            <input type="email" placeholder="Your Email" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © <span>Domain</span>. All Rights Reserved.
        </p>
        <p>
          Designed by <span>Diturie Mehmeti</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
