import './Specials.styles.css';

import Button  from '../Button/Button';
import DATA from '../../data/specials-data';
import React from "react";
import deliveryImage from '../../images/Dish icon.svg';

const SpecialsSection = () => {
  const imageBaseURL = '../../images/';
  return (
      <section id="specials-section">
        <div className="specialsTopDiv">
          <h1>This Weeks Specials!</h1>  
        <Button
          name="Online Menu"
          value="Online Menu"
          style="standardButton"
          label="Online Menu Button" />
        </div>
        <div className="specialsBottomDiv">
        {DATA.map( (specialItem, index) => {
          return (
            <div key={specialItem.name + index}  className="special">
              <img className='specialImage' src={require('../../images/' + specialItem.imageURL)} alt="special iamge" />
              <div className="line1">
                <p className='specialName'>{specialItem.name}</p>
                <p className='specialPrice'>{specialItem.price}</p>
              </div>
              <p className='specialDesc'>{specialItem.description}</p>
              <p className='orderADelivery'>Order a delivery<img className='deliveryImage' src={deliveryImage} alt="delivery image" /></p>
            </div>);
          })}

        </div>
      </section>
  );
};

export default SpecialsSection;
