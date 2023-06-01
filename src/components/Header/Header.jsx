import './Header.styles.css';

import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from 'react-router-dom';
import LinkWithIcon from '../LinkWithIcon';
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from '../../images/Logo .svg';

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: kirk.rohani@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const withHref = (render, url) => {

  }
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
    <header>
      <div className="logo">
        <img src={logo} alt="little lemon logo" width="250" />
      </div>
      <div className="navigation">
        <nav>
          <ul>
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><LinkWithIcon url={"/#about-section"} render={"About"} onclick={() => {handleClick("contactme")}} /></li>
            <li><Link to="/menu" className="nav-item">Menu</Link></li>
            <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
            <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
            <li><Link to="/login" className="nav-item">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
