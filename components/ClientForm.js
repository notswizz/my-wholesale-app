import React, { useState } from 'react';
import { loadData, saveData } from '../lib/storage';

const ClientForm = ({ onClientAdded }) => {
    const [client, setClient] = useState({ name: '', location: '', email: '' });

    const handleChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const clients = loadData('clients');
        saveData('clients', [...clients, client]);
        if (onClientAdded) {
            onClientAdded(client);
        }
        setClient({ name: '', location: '', email: '' });
    };

    return (
        <div className="form-container">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={client.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" value={client.location} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={client.email} onChange={handleChange} />
                </div>
                <button type="submit" className="button">Add Client</button>
            </form>
        </div>
    );
};

export default ClientForm;
