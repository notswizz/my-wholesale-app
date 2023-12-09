import React from 'react';

const AgentData = ({ agents }) => {
    return (
        <div className="data-container">
            {agents.map(agent => (
                <div className="data-item" key={agent.id}>
                    <h3>{agent.name}</h3>
                    <p>Location: {agent.location}</p>
                    <p>Email: {agent.email}</p>
                </div>
            ))}
        </div>
    );
};

export default AgentData;
