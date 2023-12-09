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
        const newBooking = { ...booking, id: Date.now().toString() }; // Ensure a unique ID
        saveData('bookings', [...bookings, newBooking]);
        if (onBookingAdded) {
            onBookingAdded(newBooking);
        }
        setBooking({ client: '', date: '', details: '' }); // Reset form fields
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
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
