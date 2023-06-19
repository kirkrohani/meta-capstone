import './Testimonials.styles.css';

import DATA from '../../data/testimonials-data';
import React from "react";
import deliveryImage from '../../images/Dish icon.svg';

const TestimonialsSection = () => {
  const imageBaseURL = '../../images/';
  return (
      <section id="testimonials-section">
        <div className="testimonialsTopDiv">
          <h1>Testimonials</h1>  
        </div>
        <div className="testimonialsBottomDiv">
        {DATA.map((testimonialItem, index) => {
          return (
            <div key={index} className="testimonial">
              <p className="testimonialRating">Rating 5 Stars</p>
              <img className='testimonialImage' src={require('../../images/' + testimonialItem.imageURL)} alt="testimonial iamge" />
              <p className='testimonialDesc'>{testimonialItem.description}</p>
            </div>);
          })}

        </div>
      </section>
  );
};

export default TestimonialsSection;
