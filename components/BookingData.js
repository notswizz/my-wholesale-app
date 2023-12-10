import React from 'react';

const BookingData = ({ bookings, onDeleteBooking }) => {
    const getTotalDays = (agentCounts) => {
        // Check if agentCounts exists and is an array before reducing
        return Array.isArray(agentCounts) ? agentCounts.reduce((a, b) => a + b, 0) : 0;
    };

    return (
        <div className="data-container">
            {bookings.map(booking => (
                <div className="data-item" key={booking.id}>
                    <h3>{booking.id}</h3>
                    <p>{booking.startDate}</p>
                    <p>{booking.endDate}</p>
                    <p>Total Days: {getTotalDays(booking.agentCounts)}</p>
                    <button onClick={() => onDeleteBooking(booking.id)} className="delete-button">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default BookingData;
