import React from "react";
import "./Products.css";
import liberica from '../assets/images/Liberica.jpg'
import arabica from '../assets/images/Arabica.jpg'
import espresso from '../assets/images/EspressoP.jpg'
import excelsa from '../assets/images/Excelsa.jpg'



const products = [
  {
    id: 1,
    name: "Arabica",
    price: 23,
    oldPrice: 50,
    image: arabica,
  },
  {
    id: 2,
    name: "Libberica Coffee",
    price: 18,
    oldPrice: 35,
    image: liberica,
  },
  {
    id: 3,
    name: "Black Coffee",
    price: 13,
    oldPrice: 20,
    image: excelsa,
  },
  {
    id: 4,
    name: "Espresso",
    price: 10,
    oldPrice: 24,
    image: espresso,
  },
];

const Products = ({ addToCart }) => {
  return (
    <div id="products" className="products-container">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <div className="product-price">
              <span className="current-price">${product.price}</span>
              <span className="old-price">${product.oldPrice}</span>
            </div>
            <button 
              className="add-to-cart" 
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
