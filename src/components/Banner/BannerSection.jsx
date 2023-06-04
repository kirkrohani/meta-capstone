import './Banner.style.css';

import Button  from '../Button/Button';
import React from "react";
import restaurantFood from "../../images/restauranfood.jpg";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const BannerSection = () => (
  <section id="banner-section">
      <div className="banner-leftside">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Button name="Reserve a Table" value="Reserve a Table" style="standardButton" />
      </div>
    <div className="banner-rightside">
      <img src={restaurantFood} alt="restaurant food" />
    </div>
  </section>
);

export default BannerSection;
