// pages/shows.js
import React, { useState, useEffect } from 'react';
import ShowForm from '../components/ShowForm';
import { loadData } from '../lib/storage';
import Link from 'next/link';

const ShowsPage = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const storedShows = loadData('shows') || [];
    setShows(storedShows);
  }, []);

  const handleShowAdded = (newShow) => {
    const updatedShows = [...shows, newShow];
    setShows(updatedShows);
  };

  return (
    <div className="container">
      <nav className="navigation">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/agents">Agents</Link></li>
          <li><Link href="/clients">Clients</Link></li>
          <li><Link href="/bookings">Bookings</Link></li>
        </ul>
      </nav>
      <div className="content">
        <div className="form-container">
          <ShowForm onShowAdded={handleShowAdded} />
        </div>
        <div className="data">
          <h2>Shows</h2>
          {shows.map((show, index) => (
            <div key={index} className="agent-item">
              <p>{show.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowsPage;
