import './Bookings.styles.css';

import { Heading } from "@chakra-ui/react";
import React from "react";

const BookingConfirmed = () => {
  return (
    <div id="reservation-confirmed-page">
      <Heading as="h1" className="heading">
        Reservation booking successful!
      </Heading>
    </div>
  )
}

export default BookingConfirmed;