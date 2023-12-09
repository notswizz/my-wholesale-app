import React from 'react';

const AgentData = ({ agents, onDeleteAgent }) => {
    const formatLocation = (location) => {
        return Array.isArray(location) ? location.join(', ') : location;
    };

    return (
        <div className="data-container">
            {agents.map(agent => (
                <div className="data-item" key={agent.id}>
                    <h3>{agent.name}</h3>
                    <p>Email: {agent.email}</p>
                    <p>Phone: {agent.phone}</p>
                    <p>Location: {formatLocation(agent.location)}</p>
                    <p>Instagram: <a href={`https://www.instagram.com/${agent.instagram}/`} target="_blank" rel="noopener noreferrer">{agent.instagram}</a></p>
                    <button onClick={() => onDeleteAgent(agent.id)} className="delete-button">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default AgentData;
