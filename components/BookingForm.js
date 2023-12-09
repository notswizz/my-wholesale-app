import React, { useState } from 'react';
import { loadData, saveData } from '../lib/storage';

const BookingForm = ({ onBookingAdded }) => {
    const [booking, setBooking] = useState({ client: '', date: '', details: '' });

    const handleChange = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookings = loadData('bookings');
        saveData('bookings', [...bookings, booking]);
        if (onBookingAdded) {
            onBookingAdded(booking);
        }
        setBooking({ client: '', date: '', details: '' });
    };

    return (
        <div className="form-container">
            <form>
                <div className="form-group">
                    <label htmlFor="client">Client:</label>
                    <input type="text" id="client" name="client" value={booking.client} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" value={booking.date} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="details">Details:</label>
                    <textarea id="details" name="details" value={booking.details} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="button">Add Booking</button>
            </form>
        </div>
    );
};

export default BookingForm;
