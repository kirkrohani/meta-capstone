import AboutSection from "./components/AboutSection";
import Alert from "./components/Alert";
import { AlertProvider } from "./context/alertContext";
import BannerSection from "./components/BannerSection";
import { ChakraProvider } from "@chakra-ui/react";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SpecialsSection from "./components/SpecialsSection";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main id="home-section">
          <Header />
          <BannerSection />
          <SpecialsSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
