// pages/bookings.js
import React, { useState, useEffect } from 'react';
import BookingForm from '../components/BookingForm';
import { loadData } from '../lib/storage';
import Link from 'next/link';

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = loadData('bookings') || [];
    setBookings(storedBookings);
  }, []);

  const handleBookingAdded = (newBooking) => {
    const storedBookings = loadData('bookings') || [];
    setBookings(storedBookings);
  };

  return (
    <div className="container">
      <nav className="navigation">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/agents">Agents</Link></li>
          <li><Link href="/clients">Clients</Link></li>
          <li><Link href="/shows">Shows</Link></li>
        </ul>
      </nav>
      <div className="content">
        <div className="form-container">
          <BookingForm onBookingAdded={handleBookingAdded} />
        </div>
        <div className="data">
          <h2>Bookings</h2>
          {bookings.map((booking, index) => (
            <div key={index} className="agent-item">
              <p>Client: {booking.client}</p>
              <p>Start Date: {booking.startDate}</p>
              <p>End Date: {booking.endDate}</p>
              <p>Days: {
  Array.isArray(booking.staffNeeded) 
    ? booking.staffNeeded.reduce((total, num) => total + num, 0)
    : 'Not specified'
}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
