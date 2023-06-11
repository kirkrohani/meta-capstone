import './About.styles.css';

import React from "react";

const AboutSection = () => {
  return (
    <section id="about-section">
      <div className="about-leftside">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      </div>
      <div className="about-rightside">
        <div className="below-image">
          <img src={require('../../images/Mario and Adrian A.jpg')} />
        </div>
        <div className="above-image">
          <img src={require('../../images/restaurant chef B.jpg')} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
