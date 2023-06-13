import './Reservations.styles.css';

import React, { useReducer, useState } from "react";

import { availableTimes } from '../../reducers/bookingsReducer';

const ReservationsForm = ({bookingSlots, updateBookingSlots}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occassion, setOccassion] = useState('Birthday');
  const availableBookingSlots = bookingSlots[date] || availableTimes;

  const dateChange = (e) => {
    console.log('dateChange: ', e.target.value);
    setDate(e.target.value);
    console.log('Available Booking Slots: ', bookingSlots[date]);
  }

  const timeChange = (e) => {
    console.log('timeChange: ', e.target.value);
    setTime(e.target.value);
  }

  const numberOfGuestsChange = (e) => {
    console.log('numberOfGuestsChange: ', e.target.value);
    setNumberOfGuests(e.target.value);
  }

  const occassionChange = (e) => {
    console.log('setOccassion: ', e.target.value);
    setOccassion(e.target.value);
  }

  const resetToDefaults = () => {
    setDate('');
    setTime('');
    setNumberOfGuests(1);
    setOccassion('Birtday');
  }

  const submitReservation = (e) => {
    e.preventDefault();
    console.log('submitting: ', date, time, numberOfGuests, occassion);
    updateBookingSlots({
      type: 'create-reservation',
      date: date,
      time: time
    });
    resetToDefaults();
  }

  return (
    <form id="reservations-form" onSubmit={submitReservation}>
      <label htmlFor="res-date">Choose date:</label>
      <input type="date" id="res-date" onChange={dateChange} value={date} />
      <label htmlFor="res-time">Choose time:</label>
      <select id="res-time " onChange={timeChange} value={time}>
        {availableBookingSlots.map(time => <option key={time}>{time}</option> )}
      </select>
      <label htmlFor="guests">Number of guests:</label>
      <input type="number" value={numberOfGuests}  placeholder="1" min="1" max="10" id="guests" onChange={numberOfGuestsChange} />
      <label htmlFor="occasion">Occasion:</label>
      <select id="occasion" onChange={occassionChange} value={occassion}>
          <option key="Birthday">Birthday</option>
          <option key="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default ReservationsForm;