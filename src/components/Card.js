import { HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack displat='flex' backgroundColor='white'  borderRadius='lg' color='black' >
    <Image
        src={imageSrc}
        alt='Dan Abramov'
      borderRadius='lg'
      />
      <VStack align='flex-start' padding='10px'>
        <Heading as='h5'size='sm' textAlign="start" >{title}</Heading>
        <Text color='gray' fontSize='sm'>{description}</Text>
        <Text fontSize='xs'>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /> </Text>
      </VStack>
    </VStack>
  );
};

export default Card;
