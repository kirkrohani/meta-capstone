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
      <section id="reservation-form-left">
        <div className="label-input-set">
          <label htmlFor="res-date" className="label">Choose A Date</label>
          <input type="date" id="res-date" onChange={dateChanged} value={date} required className="input-field"/>
        </div>
        <div className="label-input-set">
          <label htmlFor="res-time" className="label">Choose A Time</label>
          <select id="res-time" className="input-field" data-test-id="available-times-dropdown" onChange={timeChanged} value={time} required>
            <option  value="" disabled>Select an time...</option>
            {availableBookingSlots.map(time => <option key={time}>{time}</option>)}
          </select>
        </div>
      </section>
      <section id="reservation-form-right">
        <div className="label-input-set">
          <label htmlFor="guests" className="label">Number of guests</label>
          <input className="input-field" data-testid="number-of-guests-input" type="number" value={numberOfGuests}  placeholder="1" min="1" max="10" id="guests" onChange={numberOfGuestsChanged}  />
        </div>
        <div className="label-input-set">
          <label htmlFor="occasion" className="label">Occasion</label>
          <select className="input-field" id="occasion" onChange={occassionChanged} required defaultValue={''}>
              <option  value="" disabled>Select an occassion...</option>
              <option key="Birthday">Birthday</option>
              <option key="Anniversary">Anniversary</option>
          </select>
        </div>
        <Button name="Book Now"
        value="Book Now"
        type="submit"
        style={allInputsReceived() ? "standardButton" : "disabledButton"}
        data-testid="book-now-button"
        label="Book Now Button"/>
      </section>
   

      {/* <input type="submit" value="Book Now" data-testid="book-now-button" /> */}
    </form>
  );
}

export default ReservationsForm;