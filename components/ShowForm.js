// components/ShowForm.js
import React, { useState } from 'react';
import { saveData, loadData } from '../lib/storage';

const ShowForm = ({ onShowAdded }) => {
  const [show, setShow] = useState({
    season: '',
    type: '',
    location: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    setShow({ ...show, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newShow = { ...show, name: `${show.season} ${show.location} ${show.type}` };
    const shows = loadData('shows') || [];
    saveData('shows', [...shows, newShow]);
    onShowAdded(newShow);
    setShow({ season: '', type: '', location: '', startDate: '', endDate: '' }); // Reset form
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="season">Season:</label>
          <select 
            id="season"
            name="season" 
            value={show.season} 
            onChange={handleChange} 
            required
          >
            <option value="">Select Season</option>
            <option value="Fall">Fall</option>
            <option value="Spring">Spring</option>
            <option value="Winter">Winter</option>
            <option value="Summer">Summer</option>
          </select>
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <input 
            id="type"
            type="text" 
            name="type" 
            value={show.type} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input 
            id="location"
            type="text" 
            name="location" 
            value={show.location} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input 
            id="startDate"
            type="date" 
            name="startDate" 
            value={show.startDate} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input 
            id="endDate"
            type="date" 
            name="endDate" 
            value={show.endDate} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Add Show</button>
      </form>
    </div>
  );
};

export default ShowForm;
