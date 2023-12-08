// pages/agents.js
import React, { useState, useEffect } from 'react';
import AgentForm from '../components/AgentForm';
import { loadData } from '../lib/storage';
import Link from 'next/link';

const AgentsPage = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const storedAgents = loadData('agents') || [];
    setAgents(storedAgents);
  }, []);

  const handleAgentAdded = () => {
    const storedAgents = loadData('agents') || [];
    setAgents(storedAgents);
  };

  return (
      <div className="container">
        <nav className="navigation">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/clients">Clients</Link></li>
            <li><Link href="/shows">Shows</Link></li>
            <li><Link href="/bookings">Bookings</Link></li>
          </ul>
        </nav>
        <div className="content">
          <AgentForm onAgentAdded={handleAgentAdded} />
          <div className="data">
            <h2>Current Agents</h2>
            {agents.map((agent, index) => (
              <div key={index} className="agent-item">
                <p>Name: {agent.name}</p>
                <p>Location: {agent.location}</p>
                <p>Email: {agent.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default AgentsPage;
