import './Reservations.styles.css';

import React from "react";
import ReservationsForm from "./ReservationsForm";

const ReservationsPage = ({ bookingSlots, updateBookingSlots, submitBookingForm }) => {
  return (
    <div className="reservations-page">
      <ReservationsForm
        bookingSlots={bookingSlots}
        updateBookingSlots={updateBookingSlots}
        submitBookingForm={submitBookingForm} />
    </div>
  )
}

export default ReservationsPage;