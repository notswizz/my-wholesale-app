import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header'; // Adjust the path as per your folder structure
import { loadData } from '../lib/storage'; // Assuming loadData fetches the data

const HomePage = () => {
  const [totalClients, setTotalClients] = useState(0);
  const [totalAgents, setTotalAgents] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);

  useEffect(() => {
    const clients = loadData('clients'); // Load clients data
    setTotalClients(clients.length); // Set the total number of clients

    const agents = loadData('agents'); // Load agents data
    setTotalAgents(agents.length); // Set the total number of agents

    const bookings = loadData('bookings'); // Load bookings data
    setTotalBookings(bookings.length); // Set the total number of bookings
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h1>The Smith Agency</h1>
        <div className="logo-container" style={{ textAlign: 'center', margin: '40px 0' }}>
          <Image src="/tsa.png" alt="TSA Logo" width={500} height={300} />
        </div>
        <div className="content" style={{ padding: '0 20px', textAlign: 'center' }}>
          <h2>Total Clients: {totalClients}</h2> {/* Displaying the total number of clients */}
          <h2>Total Agents: {totalAgents}</h2> {/* Displaying the total number of agents */}
          <h2>Total Bookings: {totalBookings}</h2> {/* Displaying the total number of bookings */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
