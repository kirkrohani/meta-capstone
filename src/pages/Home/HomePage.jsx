import './Home.styles.css';

import AboutSection from "../../components/AboutSection";
import Alert from "../../components/Alert";
import BannerSection from "../../components/Banner/BannerSection";
import React from "react";
import SpecialsSection from "../../components/SpecialsSection";
import TestimonialsSection from "../../components/TestimonialsSection";

const HomePage = () => {
  return (
    <div id="home-page">
      <BannerSection />
      <SpecialsSection />
      <TestimonialsSection />
      <AboutSection />
      <Alert />
    </div>
  )
}

export default HomePage;