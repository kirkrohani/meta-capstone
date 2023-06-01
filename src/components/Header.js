import { Box, HStack, ListItem, UnorderedList } from "@chakra-ui/react";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkWithIcon from './LinkWithIcon';
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from '../images/Logo .svg';

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
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#FFFFFF"
      >
        <Box color="black" maxWidth="1280px" margin="0 auto">
          <HStack
            px={16}
            py={12}
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={logo} alt="little lemon logo" width="250" />
            <nav>
              <UnorderedList styleType="none">
                <HStack spacing={8}>
                  <ListItem><LinkWithIcon url={"/#home-section"} render={"Home"} onclick={() => { handleClick("home") }} /></ListItem>
                  <ListItem><LinkWithIcon url={"/#contactme-section"} render={"About"} onclick={() => {handleClick("contactme")}} /></ListItem>
                  <ListItem> <LinkWithIcon url={"/#contactme-section"} render={"Menu"} onclick={() => {handleClick("contactme")}} /></ListItem>
                  <ListItem><LinkWithIcon url={"/#contactme-section"} render={"Reservations"} onclick={() => {handleClick("contactme")}} /></ListItem>
                  <ListItem><LinkWithIcon url={"/#contactme-section"} render={"Order Online"} onclick={() => {handleClick("contactme")}} /></ListItem>
                  <ListItem><LinkWithIcon url={"/#contactme-section"} render={"Login"} onclick={() => {handleClick("contactme")}} /></ListItem>
                </HStack>  
              </UnorderedList>

            </nav>
          </HStack>
        </Box>
      </Box>
    </header>
  );
};
export default Header;
