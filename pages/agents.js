import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import AgentForm from '../components/AgentForm';
import AgentData from '../components/AgentData';
import { loadData } from '../lib/storage';

const AgentsPage = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        // Assuming 'loadData' is a function that retrieves data from localStorage
        setAgents(loadData('agents'));
    }, []);

    const handleAgentAdded = (newAgent) => {
        // Assuming 'saveData' is a function that saves data to localStorage
        const updatedAgents = [...agents, newAgent];
        saveData('agents', updatedAgents);
        setAgents(updatedAgents);
    };

    return (
        <>
            <Header />
            <div className="container">
                <AgentForm onAgentAdded={handleAgentAdded} />
                <AgentData agents={agents} />
            </div>
        </>
    );
};

export default AgentsPage;
