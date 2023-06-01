import { Avatar, Heading, VStack } from "@chakra-ui/react";

import FullScreenSection from "./FullScreenSection";
import React from "react";
import headerImage from '../images/150.jpg'

const greeting = "Hello, I am Kirk!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar name='Kirk Rohani' src={headerImage} size="2xl" />
      <Heading as='h5' size='sm'>{greeting}</Heading>
      <Heading as='h2' size='xl'>{bio1}</Heading>
      <Heading as='h2' size='xl'>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
