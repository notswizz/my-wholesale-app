import React from 'react';
import styles from '../styles/Data.module.css';

const AgentData = ({ agents, onDeleteAgent }) => {
    const formatLocation = (location) => {
        return Array.isArray(location) ? location.join(', ') : location;
    };

    return (
        <div className={styles.dataContainer}>
            {agents.map(agent => (
                <div className={styles.dataItem} key={agent.id}>
                    <h3>{agent.name}</h3>
                    <p>Email: {agent.email}</p>
                    <p>Phone: {agent.phone}</p>
                    <p>Location: {formatLocation(agent.location)}</p>
                    <p>Instagram: <a href={`https://www.instagram.com/${agent.instagram}/`} target="_blank" rel="noopener noreferrer">{agent.instagram}</a></p>
                    <button onClick={() => onDeleteAgent(agent.id)} className={styles.deleteButton}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default AgentData;
