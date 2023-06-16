import './Reservations.styles.css';

import React, { useState } from "react";

import Button from '../../components/Button/Button';
import { availableTimes } from '../../reducers/bookingsReducer';

const ReservationsForm = ({bookingSlots, updateBookingSlots, submitBookingForm}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occassion, setOccassion] = useState('');
  const availableBookingSlots = (bookingSlots && bookingSlots[date]) || availableTimes;

  const dateChanged = (e) => {
    setDate(e.target.value);
  }

  const timeChanged = (e) => {
    setTime(e.target.value);
  }

  const numberOfGuestsChanged = (e) => {
    setNumberOfGuests(e.target.value);
  }

  const occassionChanged = (e) => {
    setOccassion(e.target.value);
  }

  const allInputsReceived = () => {
    return date !== null && date !== ''
      && time !== null && time !== ''
      && numberOfGuests !== null && numberOfGuests >= 1 && numberOfGuests <= 10
      && occassion !== null && occassion !== '';
  }
  
  const submitReservation = (e) => {
    e.preventDefault();
    const formData = {
      type: 'create-reservation',
      date: date,
      time: time
    };
    updateBookingSlots(formData);
    submitBookingForm(formData);
  }

  return (
    <form id="reservations-form" onSubmit={submitReservation}>
      <label htmlFor="res-date">Choose date:</label>
      <input type="date" id="res-date" onChange={dateChanged} value={date} required/>
      <label htmlFor="res-time">Choose time:</label>
      <select id="res-time" data-test-id="available-times-dropdown" onChange={timeChanged} value={time} required>
        <option  value="" disabled>Select an time...</option>
        {availableBookingSlots.map(time => <option key={time}>{time}</option>)}
      </select>
      <label htmlFor="guests">Number of guests:</label>
      <input data-testid="number-of-guests-input" type="number" value={numberOfGuests}  placeholder="1" min="1" max="10" id="guests" onChange={numberOfGuestsChanged}  />
      <label htmlFor="occasion">Occasion:</label>
      <select id="occasion" onChange={occassionChanged} required defaultValue={''}>
          <option  value="" disabled>Select an occassion...</option>
          <option key="Birthday">Birthday</option>
          <option key="Anniversary">Anniversary</option>
      </select>
      <Button name="Book Now"
        value="Book Now"
        type="submit"
        style={allInputsReceived() ? "standardButton" : "disabledButton"}
        data-testid="book-now-button" />

      {/* <input type="submit" value="Book Now" data-testid="book-now-button" /> */}
    </form>
  );
}

export default ReservationsForm;