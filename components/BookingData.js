import React from 'react';
import styles from '../styles/Data.module.css';

const BookingData = ({ bookings, onDeleteBooking, onShowBookingDetails }) => {
    const getTotalDays = (agentCounts) => {
        return Array.isArray(agentCounts) ? agentCounts.reduce((a, b) => a + b, 0) : 0;
    };

    return (
        <div className={styles.dataContainer}>
            {bookings.map(booking => (
                <div className={styles.dataItem} key={booking.id} onClick={() => onShowBookingDetails(booking)}>
                    <h3>{booking.client}</h3>
                    <p>{booking.show}</p>
                    <p>{booking.startDate}</p>
                    <p>{booking.endDate}</p>
                    <p>Total Days: {getTotalDays(booking.agentCounts)}</p>
                    <button onClick={(e) => {e.stopPropagation(); onDeleteBooking(booking.id);}} className="delete-button">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default BookingData;
