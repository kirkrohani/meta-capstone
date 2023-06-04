import './Specials.styles.css';

import Button  from '../Button/Button';
import React from "react";
import deliveryImage from '../../images/Dish icon.svg';
import image1 from '../../images/greek salad.jpg';

const SpecialsSection = () => {
  return (
      <section id="specials-section">
        <div className="specialsTopDiv">
          <h1>This Weeks Specials!</h1>  
          <Button name="Online Menu" value="Online Menu" style="standardButton" />
        </div>
        <div className="specialsBottomDiv">
          <div className="special">
          <img src={image1} alt="special iamge" />
          <div className="line1">
            <p className='specialName'>Greek Salad</p>
            <p className='specialPrice'>$12.99</p>
            </div>
            <p className='specialDesc'>description description description description
              description description description description
              description description description description
              description description description description
            </p>
            <p className='orderADelivery'>Order a delivery<img src={deliveryImage} alt="delivery image" /></p>
        </div>
             <div className="special">
            <img src={image1} alt="special iamge" />
            <p>"Greek Salad</p>
            <p>"$12.99"</p>
            <p>description description description description
              description description description description
              description description description description
              description description description description
            </p>
            <p>order a delivery<img src={deliveryImage} alt="delivery image" /></p>
        </div>
             <div className="special">
            <img src={image1} alt="special iamge" />
            <p>"Greek Salad</p>
            <p>"$12.99"</p>
            <p>description description description description
              description description description description
              description description description description
              description description description description
            </p>
            <p>order a delivery<img src={deliveryImage} alt="delivery image" /></p>
          </div>
        </div>
      </section>
  );
};

export default SpecialsSection;
