// components/AgentForm.js
import React, { useState } from 'react';
import { saveData, loadData } from '../lib/storage';

const AgentForm = ({ onAgentAdded }) => {
  const [agent, setAgent] = useState({ name: '', location: '', email: '' });

  const handleChange = (e) => {
    setAgent({ ...agent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const agents = loadData('agents') || [];
    saveData('agents', [...agents, agent]);
    onAgentAdded(agent); // Assuming onAgentAdded is to be called with the new agent data
    setAgent({ name: '', location: '', email: '' }); // Reset form
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            value={agent.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input 
            type="text" 
            id="location"
            name="location" 
            value={agent.location} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            value={agent.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Add Agent</button>
      </form>
    </div>
  );
};

export default AgentForm;
