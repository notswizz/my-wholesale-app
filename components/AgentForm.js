import React, { useState } from 'react';
import { loadData, saveData } from '../lib/storage';

const AgentForm = ({ onAgentAdded }) => {
    const [agent, setAgent] = useState({ name: '', email: '', phone: '' });

    const handleChange = (e) => {
        setAgent({ ...agent, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const agents = loadData('agents');
        saveData('agents', [...agents, agent]);
        if (onAgentAdded) {
            onAgentAdded(agent);
        }
        setAgent({ name: '', email: '', phone: '' });
    };

    return (
        <div className="form-container">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={agent.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={agent.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={agent.phone} onChange={handleChange} />
                </div>
                <button type="submit" className="button">Add Agent</button>
            </form>
        </div>
    );
};

export default AgentForm;
