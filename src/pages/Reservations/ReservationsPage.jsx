import './Reservations.styles.css';

import React from "react";
import ReservationsForm from "./ReservationsForm";

const ReservationsPage = ({ bookingSlots, updateBookingSlots }) => {
  return (
    <div className="reservations-page">
      <ReservationsForm bookingSlots={bookingSlots} updateBookingSlots={updateBookingSlots} />
    </div>
  )
}

export default ReservationsPage;