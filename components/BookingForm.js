import React, { useState, useEffect } from 'react';
import { loadData, saveData } from '../lib/storage';

const BookingForm = ({ onBookingAdded }) => {
    const [booking, setBooking] = useState({
        show: '',
        client: '',
        startDate: '',
        endDate: '',
        agentCounts: [],
    });

    // Load clients and shows data
    const [clients, setClients] = useState(loadData('clients') || []);
    const [shows, setShows] = useState(loadData('shows') || []);

    useEffect(() => {
        // Preload clients and shows, if not already loaded
        if (!clients.length) setClients(loadData('clients') || []);
        if (!shows.length) setShows(loadData('shows') || []);
    }, [clients.length, shows.length]);

    const handleChange = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    };

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setBooking({ ...booking, [name]: value });

        if (name === 'endDate' || (name === 'startDate' && booking.endDate)) {
            const start = new Date(booking.startDate + 'T00:00:00Z');
            const end = new Date(value + 'T00:00:00Z');
            const diffDays = (end - start) / (1000 * 60 * 60 * 24) + 1;
            setBooking(prev => ({ ...prev, agentCounts: Array(diffDays).fill(prev.agentCounts[0] || 0) }));
        }
    };

    const handleAgentCountChange = (index, value) => {
        const updatedAgentCounts = [...booking.agentCounts];
        updatedAgentCounts[index] = Number(value);
        setBooking({ ...booking, agentCounts: updatedAgentCounts });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBooking = {
            ...booking,
            id: `${booking.show}-${new Date().getTime()}`, // Generate a unique ID for the booking
            totalDays: booking.agentCounts.reduce((acc, val) => acc + val, 0),
        };

        const updatedBookings = [...loadData('bookings'), newBooking];
        saveData('bookings', updatedBookings);
        onBookingAdded(newBooking);
        setBooking({ show: '', client: '', startDate: '', endDate: '', agentCounts: [] });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="show">Show:</label>
                    <select id="show" name="show" value={booking.show} onChange={handleChange}>
                        {shows.map(show => <option key={show.id} value={show.id}>{show.id}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="client">Client:</label>
                    <select id="client" name="client" value={booking.client} onChange={handleChange}>
                        {clients.map(client => <option key={client.id} value={client.company}>{client.company}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date" id="startDate" name="startDate" value={booking.startDate} onChange={handleDateChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">End Date:</label>
                    <input type="date" id="endDate" name="endDate" value={booking.endDate} onChange={handleDateChange} />
                </div>
                {booking.agentCounts.map((count, index) => (
                    <div key={index} className="form-group">
                        <label htmlFor={`agentCount-${index}`}>
                            Agents on {new Date(booking.startDate).toISOString().slice(0, 10)}:
                        </label>
                        <input
                            type="number"
                            id={`agentCount-${index}`}
                            min="0"
                            value={count}
                            onChange={(e) => handleAgentCountChange(index, e.target.value)}
                        />
                    </div>
                ))}
                <button type="submit" className="button">Add Booking</button>
            </form>
        </div>
    );
};

export default BookingForm;