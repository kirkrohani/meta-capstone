import { Box, HStack } from "@chakra-ui/react";
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
        backgroundColor="#18181b"
      >
        <Box color="white" maxWidth="1280px" margin="0 auto">
          <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <nav>
              {/* Add social media links based on the `socials` data */}
              <HStack px={16} py={0} justifyContent="space-between" spacing="4">
                {socials.map(
                  social => <LinkWithIcon key={social.url}  url={social.url} render={<FontAwesomeIcon icon={social.icon} size="1x" />} />
                )}
              </HStack>
            </nav>
            <nav>
              <HStack spacing={8}>
                {/* Add links to Projects and Contact me section */}
                <LinkWithIcon url={"/#projects-section"} render={"Projects"} onclick={() => { handleClick("projects") }} />
                <LinkWithIcon url={"/#contactme-section"} render={"Contact Me"} onclick={() => {handleClick("contactme")}} />
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    </header>
  );
};
export default Header;
