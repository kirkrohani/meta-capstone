import './Testimonials.styles.css';

import Button  from '../Button/Button';
import DATA from '../../data/testimonials-data';
import React from "react";
import deliveryImage from '../../images/Dish icon.svg';

const TestimonialsSection = () => {
  const imageBaseURL = '../../images/';
  console.log('DATA: ', DATA);
  return (
      <section id="testimonials-section">
        <div className="testimonialsTopDiv">
          <h1>Testimonials</h1>  
        </div>
        <div className="testimonialsBottomDiv">
        {DATA.map(testimonialItem => {
          return (
            <div className="testimonial">
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
