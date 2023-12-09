import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ClientForm from '../components/ClientForm';
import ClientData from '../components/ClientData';
import { loadData } from '../lib/storage';

const ClientsPage = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        setClients(loadData('clients'));
    }, []);

    const handleClientAdded = (newClient) => {
        setClients(prevClients => [...prevClients, newClient]);
    };

    return (
        <>
            <Header />
            <div className="container">
                <ClientForm onClientAdded={handleClientAdded} />
                <ClientData clients={clients} />
            </div>
        </>
    );
};

export default ClientsPage;
