import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import BookingData from '../components/BookingData';
import { loadData, saveData } from '../lib/storage';

const BookingsPage = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        setBookings(loadData('bookings'));
    }, []);

    const handleBookingAdded = (newBooking) => {
        const updatedBookings = [...bookings, newBooking];
        saveData('bookings', updatedBookings);
        setBookings(updatedBookings);
    };

    const handleDeleteBooking = (bookingId) => {
        const updatedBookings = bookings.filter(booking => booking.id !== bookingId);
        saveData('bookings', updatedBookings);
        setBookings(updatedBookings);
    };

    return (
        <>
            <Header />
            <div className="container">
                <BookingForm onBookingAdded={handleBookingAdded} />
                <BookingData bookings={bookings} onDeleteBooking={handleDeleteBooking} />
            </div>
        </>
    );
};

export default BookingsPage;
