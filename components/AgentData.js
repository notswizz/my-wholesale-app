import React from 'react';

const AgentData = ({ agents }) => {
    return (
        <div className="data-container">
            {agents.map(agent => (
                <div className="data-item" key={agent.id}>
                    <h3>{agent.name}</h3>
                    <p>Email: {agent.email}</p>
                    <p>Phone: {agent.phone}</p>
                </div>
            ))}
        </div>
    );
};

export default AgentData;
