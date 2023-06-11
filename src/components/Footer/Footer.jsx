import './Footer.styles.css';

import { Link } from 'react-router-dom';
import LinkWithIcon from  '../LinkWithIcon';
import React from "react";

const Footer = () => {
    const handleClick = (anchor) => () => {
      const id = `${anchor}-section`;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
  
  return (
    <footer id="footer-section">
      <div className="footer-leftside">
        <img src={require('../../images/restaurant.jpg')} alt="restaurant footer image" />
        <div className="footer-doormat-navigation">
          <ol>
            <li>Doormat Navigation</li>
            <li><LinkWithIcon url={"/#about-section"} render={"About"} onclick={() => {handleClick("about")}} /></li>
            <li><Link to="/menu" className="nav-item">Menu</Link></li>
            <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
            <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
            <li><Link to="/login" className="nav-item">Login</Link></li>
          </ol>
        </div>
      </div>
      <div className="footer-rightside">
        <div className="footer-contact">
          <ol>
            <li>Contact</li>
            <li>12345 My Address</li>
            <li>972-555-5555</li>
            <li>meta@meta.com</li>
          </ol>
        </div>
        <div className="footer-socialmedia-links">
          <ol>
            <li>Social Media Links</li>
            <li>12345 My Address</li>
            <li>972-555-5555</li>
            <li>meta@meta.com</li>
          </ol>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
