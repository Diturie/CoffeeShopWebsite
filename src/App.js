import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";


import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage />
      <AboutUs />
      <Services />
      <Menu />
      <Products />
      <Testimonials />
      <Footer />

    </div>
  );
};

export default App;



