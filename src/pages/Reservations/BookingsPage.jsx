import './Bookings.styles.css';

import { Heading } from "@chakra-ui/react";
import React from "react";
import ReservationsForm from "./BookingsForm";

const BookingsPage = ({ bookingSlots, updateBookingSlots, submitBookingForm }) => {
  return (
    <div id="reservations-page">
      <Heading as="h1" className="heading">
        Book A Table
      </Heading>
      <ReservationsForm
        bookingSlots={bookingSlots}
        updateBookingSlots={updateBookingSlots}
        submitBookingForm={submitBookingForm} />
    </div>
  )
}

export default BookingsPage;