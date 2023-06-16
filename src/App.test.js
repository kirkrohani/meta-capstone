import { fireEvent, render, screen } from '@testing-library/react';

import BannerSection from './components/Banner/BannerSection';
import ReservationsForm from './pages/Reservations/ReservationsForm';

global.fetchAPI = global.$ = require('https://cdn.jsdelivr.net/gh/Meta-Front-End-Developer-PC/capstone/api.js') 

test('renders learn react link', () => {
  render(<BannerSection />);
  const headingElement = screen.getByText(/little lemon/i);
  expect(headingElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
    render(<ReservationsForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Checks if submit button called', () => {
  render(<ReservationsForm
    bookingSlots={['17:00', '17:30', '18:00', '18:30', '19:00', '20:00', '21:00', '22:00']}
    updateBookingSlots={jest.fn()}
    fetchAPI={jest.fn()} />);
  const btn = screen.getByTestId("book-now-button");
  const guestsInput = screen.getByTestId("number-of-guests-input");
  fireEvent.change(guestsInput, {target: {value: '3'}})
  fireEvent.click(btn); 
  expect(guestsInput.value).toBe('1');
})