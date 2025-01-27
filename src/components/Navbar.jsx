import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showOrderBox, setShowOrderBox] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderDetails: "",
    address: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const { name, email, orderDetails, address, phone } = formData;

    if (!name || !email || !orderDetails || !address || !phone) {
      alert("Please fill in all fields before submitting your order.");
      return;
    }

    alert("Your order has been placed successfully!");
    setCartItems([...cartItems, { orderDetails }]);
    setShowOrderBox(false);
    setFormData({ name: "", email: "", orderDetails: "", address: "", phone: "" });
  };

  return (
    <>
      <nav
        className="navbar"
        style={{
          backgroundImage: `url('/path/to/your/homepage-background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="navbar-logo">The Daily Grind</div>
        <div className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
        </div>
        <ul className={`navbar-links ${showMenu ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        <div className="navbar-actions">
          <button className="order-now-btn" onClick={() => setShowOrderBox(true)}>
            Order Now
          </button>
          <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-count">{cartItems.length}</span>
          </div>
        </div>
      </nav>

      {/* Order Box */}
      {showOrderBox && (
        <div className="order-box-overlay">
          <div className="order-box">
            <h2>Place Your Order</h2>
            <form onSubmit={handleOrderSubmit}>
              <label>
                Full Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
              </label>
              <label>
                Order Details:
                <textarea
                  name="orderDetails"
                  value={formData.orderDetails}
                  onChange={handleInputChange}
                  placeholder="What would you like to order?"
                ></textarea>
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter delivery address"
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </label>
              <div className="order-box-buttons">
                <button type="submit">Submit Order</button>
                <button type="button" onClick={() => setShowOrderBox(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Cart Box */}
      {showCart && (
        <div className="cart-box">
          <h3>Your Cart</h3>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.orderDetails}</li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
          <button className="close-cart-btn" onClick={() => setShowCart(false)}>Close</button>
        </div>
      )}
    </>
  );
};

export default Navbar;
