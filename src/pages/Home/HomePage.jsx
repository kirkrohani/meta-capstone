import './Home.styles.css';

import AboutSection from "../../components/About/AboutSection";
import Alert from "../../components/Alert";
import BannerSection from "../../components/Banner/BannerSection";
import React from "react";
import SpecialsSection from "../../components/Specials/SpecialsSection";
import TestimonialsSection from "../../components/Testimonials/TestimonialsSection";

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