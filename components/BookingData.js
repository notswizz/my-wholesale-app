import React from 'react';

const BookingData = ({ bookings }) => {
    return (
        <div className="data-container">
            {bookings.map(booking => (
                <div className="data-item" key={booking.id}>
                    <h3>Client: {booking.client}</h3>
                    <p>Date: {booking.date}</p>
                    <p>Details: {booking.details}</p>
                </div>
            ))}
        </div>
    );
};

export default BookingData;
