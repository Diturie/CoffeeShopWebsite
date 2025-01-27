import React, { useState } from "react";
import client1 from '../assets/images/client1.jpg'
import client2 from '../assets/images/client2.jpg'
import client3 from '../assets/images/client3.jpg'
import client4 from '../assets/images/client4.jpg'
import client5 from '../assets/images/client5.jpg'
import client6 from '../assets/images/client6.jpg'
import client7 from '../assets/images/client7.jpg'
import client8 from '../assets/images/client8.jpg'
import client9 from '../assets/images/client9.jpg'
import client10 from '../assets/images/client10.jpg'
import client11 from '../assets/images/client11.jpg'
import client12 from '../assets/images/client12.jpg'


import "./Testimonials.css";

const testimonials = [
  { id: 1, name: "Arbër Hoxha", feedback: "Kafeja këtu është thjesht fantastike! Ambienti është shumë i rehatshëm.", image:client1 },
  { id: 2, name: "Alba Krasniqi", feedback: "Kafeja më e mirë që kam provuar ndonjëherë. E rekomandoj pa hezitim!", image: client2 },
  { id: 3, name: "Blerim Gashi", feedback: "Stafi është shumë i sjellshëm dhe zgjedhja e kafesë është e shkëlqyer.", image: client3 },
  { id: 4, name: "Eriona Halili", feedback: "Ky vend është perfekt për të punuar dhe për t’u çlodhur. E adhuroj!", image:client4 },
  { id: 5, name: "Dritan Leka", feedback: "Espresoja këtu është e jashtëzakonshme, dhe ëmbëlsirat janë ideale.", image:client5 },
  { id: 6, name: "Valbona Shala", feedback: "Një vend i shkëlqyer për të kaluar kohë me miqtë dhe për të shijuar kafen.", image:client6 },
  { id: 7, name: "Arben Rama", feedback: "Çdo filxhan kafeje është i përgatitur në mënyrë perfekte. Më pëlqen shumë!", image: client7 },
  { id: 8, name: "Lorena Zeka", feedback: "I dashuroj ofertat e sezonit dhe shijet unike të kafesë që ofrojnë.", image: client8 },
  { id: 9, name: "Gentian Islami", feedback: "Ambienti këtu është shumë i qetë. Një arratisje perfekte nga zhurma e qytetit.", image: client9 },
  { id: 10, name: "Anisa Dervishi", feedback: "Shërbim i shkëlqyer, kafe fantastike dhe një atmosferë shumë mikpritëse.", image: client10 },
  { id: 11, name: "Besnik Selimi", feedback: "Ky vend është bërë një ndalesë e rregullt për mua. Përvojë e shkëlqyer!", image: client11 },
  { id: 12, name: "Fjorda Maloku", feedback: "Kafe e shkëlqyer, dekor i bukur dhe muzikë e mrekullueshme. E rekomandoj!", image: client12 },
];


const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(testimonials.length / itemsPerPage); // Përcakton numrin total të faqeve

  const handleDotClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div id="testimonials" className="testimonials-container">
      <h2 className="testimonials-title">Testimonial</h2>
      <h3 className="testimonials-subtitle">Our Clients Say</h3>
      <div className="testimonials-slider">
        <div
          className="testimonials-slider-inner"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div className="testimonial-page" key={pageIndex}>
              {testimonials
                .slice(pageIndex * itemsPerPage, pageIndex * itemsPerPage + itemsPerPage)
                .map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-card">
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-feedback">{testimonial.feedback}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <div className="testimonial-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentPage ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
