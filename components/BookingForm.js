// components/BookingForm.js
import React, { useState, useEffect } from 'react';
import { saveData, loadData } from '../lib/storage';

const BookingForm = ({ onBookingAdded }) => {
  const [booking, setBooking] = useState({
    client: '',
    startDate: '',
    endDate: '',
    staffNeeded: []
  });
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(loadData('clients') || []);
  }, []);

  const handleDateChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleStaffNeededChange = (index, value) => {
    const updatedStaffNeeded = [...booking.staffNeeded];
    updatedStaffNeeded[index] = parseInt(value, 10) || 0;
    setBooking({ ...booking, staffNeeded: updatedStaffNeeded });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookings = loadData('bookings') || [];
    saveData('bookings', [...bookings, booking]);
    onBookingAdded();
    // Reset form fields
    setBooking({ client: '', startDate: '', endDate: '', staffNeeded: [] });
  };

  const generateStaffNeededFields = () => {
    if (!booking.startDate || !booking.endDate) return [];

    const startDate = new Date(booking.startDate);
    const endDate = new Date(booking.endDate);
    const daysDiff = (endDate - startDate) / (1000 * 3600 * 24);
    const days = daysDiff >= 0 ? daysDiff + 1 : 0; // To ensure we have a non-negative number of days

    return [...Array(days)].map((_, index) => (
      <div key={index}>
        <label htmlFor={`staffNeeded-${index}`}>{` ${new Date(startDate.getTime() + index * 1000 * 3600 * 24).toLocaleDateString()}:`}</label>
        <input 
          type="number" 
          id={`staffNeeded-${index}`}
          min="0"
          value={booking.staffNeeded[index] || 0}
          onChange={(e) => handleStaffNeededChange(index, e.target.value)}
          required 
        />
      </div>
    ));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="client">Client:</label>
          <select 
            id="client"
            name="client" 
            value={booking.client} 
            onChange={(e) => setBooking({ ...booking, client: e.target.value })}
            required
          >
            <option value="">Select Client</option>
            {clients.map((client, index) => (
              <option key={index} value={client.company}>{client.company}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input 
            type="date" 
            id="startDate"
            name="startDate" 
            value={booking.startDate} 
            onChange={handleDateChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input 
            type="date" 
            id="endDate"
            name="endDate" 
            value={booking.endDate} 
            onChange={handleDateChange} 
            required 
          />
        </div>
        {generateStaffNeededFields()}
        <button type="submit">Add Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
