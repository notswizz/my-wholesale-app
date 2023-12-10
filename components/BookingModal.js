import React from 'react';

const Modal = ({ booking, onClose }) => {
    if (!booking) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h3>Booking Details</h3>
                <p>ID: {booking.id}</p>
                <p>Start Date: {booking.startDate}</p>
                <p>End Date: {booking.endDate}</p>
            </div>
        </div>
    );
};

export default Modal;
