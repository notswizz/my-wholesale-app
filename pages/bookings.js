import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import BookingData from '../components/BookingData';
import { loadData } from '../lib/storage';

const BookingsPage = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        setBookings(loadData('bookings'));
    }, []);

    const handleBookingAdded = (newBooking) => {
        setBookings(prevBookings => [...prevBookings, newBooking]);
    };

    return (
        <>
            <Header />
            <div className="container">
                <BookingForm onBookingAdded={handleBookingAdded} />
                <BookingData bookings={bookings} />
            </div>
        </>
    );
};

export default BookingsPage;
