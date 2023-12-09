import React, { useState } from 'react';
import { loadData, saveData } from '../lib/storage';

const ShowForm = ({ onShowAdded }) => {
    const [show, setShow] = useState({ title: '', date: '', venue: '' });

    const handleChange = (e) => {
        setShow({ ...show, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const shows = loadData('shows');
        const newShow = { ...show, id: Date.now().toString() }; // Ensure a unique ID
        saveData('shows', [...shows, newShow]);
        if (onShowAdded) {
            onShowAdded(newShow);
        }
        setShow({ title: '', date: '', venue: '' }); // Reset form fields
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={show.title} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" value={show.date} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="venue">Venue:</label>
                    <input type="text" id="venue" name="venue" value={show.venue} onChange={handleChange} />
                </div>
                <button type="submit" className="button">Add Show</button>
            </form>
        </div>
    );
};

export default ShowForm;
