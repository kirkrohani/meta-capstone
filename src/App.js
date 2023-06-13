import './index.css';

import { Route, Routes } from "react-router-dom";

import { AlertProvider } from "./context/alertContext";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";
import LoginPage from './pages/LoginPage'
import MenuPage from './pages/MenuPage';
import OrderOnlinePage from './pages/OrderOnlinePage'
import ReservationsPage from './pages/Reservations/ReservationsPage'
import { bookingsReducer } from './reducers/bookingsReducer';
import { useReducer } from 'react';

function App() {
  const [state, dispatch] = useReducer(bookingsReducer, {});

  return (
    <ChakraProvider>
      <AlertProvider>
        <main id="app">
          <Header />
          <Routes>
            <Route path="/"  element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations" element={<ReservationsPage bookingSlots={state} updateBookingSlots={dispatch} />} />
            <Route path="/order-online" element={<OrderOnlinePage />} />
            <Route path="/login"  element={<LoginPage />} />
          </Routes>
          <Footer />
        </main>
        </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
