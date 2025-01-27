import React, { useState } from "react";
import "./HomePage.css";

const Homepage = () => {
  const [showReservationBox, setShowReservationBox] = useState(false);
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    const { name, email, date, time, guests } = reservationData;

    if (!name || !email || !date || !time || !guests) {
      alert("Please fill in all fields before submitting your reservation.");
      return;
    }

    alert("Your reservation has been successfully made!");
    setShowReservationBox(false);
    setReservationData({ name: "", email: "", date: "", time: "", guests: "" });
  };

  return (
    <div className="homepage">
     
      <div className="homepage-content">
        <h2>Welcome to</h2>
        <h1>Your Favorite Cafe</h1>
        <h2>Enjoy the best dining experience</h2>
        <button className="reservation-btn" onClick={() => setShowReservationBox(true)}>
          Book a Reservation
        </button>
      </div>

      {showReservationBox && (
        <div className="reservation-box-overlay">
          <div className="reservation-box">
            <button className="close-btn" onClick={() => setShowReservationBox(false)}>
              &times;
            </button>
            <h2>Book Your Table</h2>
            <form onSubmit={handleReservationSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={reservationData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={reservationData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
              </label>
              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  value={reservationData.date}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Time:
                <input
                  type="time"
                  name="time"
                  value={reservationData.time}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Guests:
                <input
                  type="number"
                  name="guests"
                  value={reservationData.guests}
                  onChange={handleInputChange}
                  placeholder="Number of guests"
                />
              </label>
              <div className="reservation-box-buttons">
                <button type="submit">Book Now</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;

