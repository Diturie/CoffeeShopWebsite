import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faCoffee, faAward, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';


const Services = () => {
  return (
    <section id="services" className="services-container">
      <div className="services-header">
        <h2>Fresh & Organic Beans</h2>
      </div>
      <div className="services-grid">
        <div className="service-item">
          <img src={image1} alt="Fastest Door Delivery" />
          <div className="service-content">
            <div className="icon">
              <FontAwesomeIcon icon={faTruck} />
            </div>
            <h3>Fastest Door Delivery</h3>
            <p>
              Our delivery service is tailored to meet your needs with speed and efficiency. Whether it’s a fresh bag of beans or your favorite coffee product, we ensure it reaches you in no time.
            </p>
          </div>
        </div>

        <div className="service-item">
          <img src={image2} alt="Fresh Coffee Beans" />
          <div className="service-content">
            <div className="icon">
              <FontAwesomeIcon icon={faCoffee} />
            </div>
            <h3>Fresh Coffee Beans</h3>
            <p>
              We source the finest organic beans from around the globe, ensuring freshness and quality in every cup. Experience the rich aroma and exquisite flavors of freshly roasted coffee.
            </p>
          </div>
        </div>

        <div className="service-item">
          <img src={image3} alt="Best Quality Coffee" />
          <div className="service-content">
            <div className="icon">
              <FontAwesomeIcon icon={faAward} />
            </div>
            <h3>Best Quality Coffee</h3>
            <p>
              Our commitment to excellence means we use only the highest quality ingredients and techniques. Every cup is crafted to perfection for an unmatched coffee experience.
            </p>
          </div>
        </div>

        <div className="service-item">
          <img src={image4} alt="Online Table Booking" />
          <div className="service-content">
            <div className="icon">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
            <h3>Online Table Booking</h3>
            <p>
              Reserve your spot with ease using our online table booking system. Enjoy a hassle-free experience and focus on what matters most—great coffee and great company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Services;
