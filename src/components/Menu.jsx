import React from "react";
import "./Menu.css";
import latte from '../assets/images/Latte.jpg';
import americano from '../assets/images/americano.jpg';
import cappuccino from '../assets/images/cappucino.jpg';
import flatWhite from '../assets/images/flattWhite.jpg';
import frappuccino from '../assets/images/frapuccino.jpg';
import coldBrew from '../assets/images/coldBrew.jpg';
import mocha from '../assets/images/mocha.jpg';
import icedAmericano from '../assets/images/icedAmericano.jpg';

const Menu = () => {
  const products = [
    { id: 1, type: "Hot Coffee", name: "Latte", price: "$6", image: latte },
    { id: 2, type: "Hot Coffee", name: "Cappuccino", price: "$7", image: americano },
    { id: 3, type: "Hot Coffee", name: "Americano", price: "$5", image: cappuccino },
    { id: 4, type: "Hot Coffee", name: "Flat White", price: "$8", image: flatWhite },
    { id: 5, type: "Cold Coffee", name: "Cold Brew", price: "$6", image: coldBrew},
    { id: 6, type: "Cold Coffee", name: "Frappuccino", price: "$8", image:frappuccino  },
    { id: 7, type: "Cold Coffee", name: "Iced Americano", price: "$7", image: icedAmericano },
    { id: 8, type: "Cold Coffee", name: "Iced Mocha", price: "$9", image: mocha },
];


  return (
    <div id="menu" className="menu-container">
      <h2>Menu & Pricing</h2>
      <div className="menu">
        {["Hot Coffee", "Cold Coffee"].map((category) => (
          <div key={category} className="menu-section">
            <h3>{category}</h3>
            <div className="menu-items">
              {products
                .filter((product) => product.type === category)
                .map((product) => (
                  <div key={product.id} className="menu-item">
                    <img src={product.image} alt={product.name} />
                    <div className="menu-details">
                      <span className="menu-price">{product.price}</span>
                      <h4>{product.name}</h4>
                     
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
