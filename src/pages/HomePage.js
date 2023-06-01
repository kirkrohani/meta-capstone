import AboutSection from "../components/AboutSection";
import Alert from "../components/Alert";
import BannerSection from "../components/BannerSection";
import { Heading } from "@chakra-ui/react";
import React from "react";
import SpecialsSection from "../components/SpecialsSection";
import TestimonialsSection from "../components/TestimonialsSection";

const MenuPage = () => {
  return (
    <div className="home-page">
      <Heading as="h1" id="home-page">
        Home Page
      </Heading>
      <BannerSection />
      <SpecialsSection />
      <TestimonialsSection />
      <AboutSection />
      <Alert />
    </div>
  )
}

export default MenuPage;