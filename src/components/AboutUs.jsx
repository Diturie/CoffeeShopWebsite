import React from "react";
import aboutImage from '../assets/images/about.png'
import "./AboutUs.css";

const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="about" className="about-us-container">
      <h1 className="main-title">Serving Since 1980</h1>
      <div className="content">
        <div className="content-item">
          <h3>Our Story</h3>
          <p>
            Since 1980, we’ve been dedicated to creating memorable coffee experiences. From humble beginnings, our passion for crafting the perfect cup of coffee has brought people together to share moments of joy and connection.
          </p>
          <p>
            Over the years, we’ve grown into a community-driven brand, always focused on quality and authenticity. We believe in making every cup of coffee a celebration of flavor, tradition, and innovation.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="content-image">
          <img src={aboutImage} alt="Coffee Splash" />
        </div>
        <div className="content-item">
          <h3>Our Vision</h3>
          <p>
            Our vision is to inspire a world where coffee is more than just a beverage—it’s a way to connect, create, and unwind. We aim to be a leader in delivering exceptional coffee experiences.
          </p>
          <ul>
            <li>Providing the best coffee experience</li>
            <li>Crafting quality coffee products</li>
            <li>Building a community around coffee culture</li>
          </ul>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
      <button className="scroll-to-top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};


export default AboutUs;
