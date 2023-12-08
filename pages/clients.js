// pages/clients.js
import React, { useState, useEffect } from 'react';
import ClientForm from '../components/ClientForm';
import { loadData } from '../lib/storage';
import Link from 'next/link';

const ClientsPage = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const storedClients = loadData('clients') || [];
    setClients(storedClients);
  }, []);

  const handleClientAdded = (newClient) => {
    const storedClients = loadData('clients') || [];
    setClients(storedClients);
  };

  return (
    <div className="container">
      <nav className="navigation">
        {/* Navigation links would go here */}
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/agents">Agents</Link></li>
          <li><Link href="/shows">Shows</Link></li>
          <li><Link href="/bookings">Bookings</Link></li>
        </ul>
      </nav>
      <div className="content">
        <div className="form-container">
          <ClientForm onClientAdded={handleClientAdded} />
        </div>
        <div className="data">
          {clients.map((client, index) => (
            <div key={index} className="agent-item">
              <p>Company: {client.company}</p>
              <p>Contact: {client.contact}</p>
              <p>Email: {client.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
