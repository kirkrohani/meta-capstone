import './index.css';

import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useReducer, useState } from 'react';

import { AlertProvider } from "./context/alertContext";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";
import LoginPage from './pages/LoginPage'
import MenuPage from './pages/MenuPage';
import OrderOnlinePage from './pages/OrderOnlinePage'
import ReservationConfirmed from './pages/Reservations/ReservationConfirmed';
import ReservationsPage from './pages/Reservations/ReservationsPage'
import { bookingsReducer } from './reducers/bookingsReducer';

function App() {
  const [state, dispatch] = useReducer(bookingsReducer, {});
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const navigate = useNavigate();
  const submitBookingForm = (formData) => {
    if (submitAPI(formData)) {
      setBookingConfirmed(true);
    }
  }

  useEffect(() => {
    if (bookingConfirmed) {
      setBookingConfirmed(false);
      navigate("/reservationConfirmed");
    }
  }, [bookingConfirmed]);

  return (
    <ChakraProvider>
      <AlertProvider>
        <main id="app">
          <Header />
          <Routes>
            <Route path="/"  element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations"
              element={<ReservationsPage
                bookingSlots={state}
                updateBookingSlots={dispatch}
                submitBookingForm={submitBookingForm} />} />
            <Route path="/order-online" element={<OrderOnlinePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reservationConfirmed"  element={<ReservationConfirmed />} />
          </Routes>
          <Footer />
        </main>
        </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
