// components/ClientForm.js
import React, { useState } from 'react';
import { saveData, loadData } from '../lib/storage';

const ClientForm = ({ onClientAdded }) => {
  const [client, setClient] = useState({ company: '', contact: '', email: '' });

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const clients = loadData('clients') || [];
    saveData('clients', [...clients, client]);
    onClientAdded(client); // Assuming onClientAdded is to be called with the new client data
    setClient({ company: '', contact: '', email: '' }); // Reset form
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="company">Company:</label>
          <input 
            type="text" 
            id="company"
            name="company" 
            value={client.company} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="contact">Contact:</label>
          <input 
            type="text" 
            id="contact"
            name="contact" 
            value={client.contact} 
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
            value={client.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Add Client</button>
      </form>
    </div>
  );
};

export default ClientForm;
