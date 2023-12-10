import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ClientForm from '../components/ClientForm';
import ClientData from '../components/ClientData';
import { loadData, saveData } from '../lib/storage';

const ClientsPage = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        setClients(loadData('clients'));
    }, []);

    const handleClientAdded = (newClient) => {
        const updatedClients = [...clients, newClient];
        saveData('clients', updatedClients);
        setClients(updatedClients);
    };

    const handleDeleteClient = (clientId) => {
        const updatedClients = clients.filter(client => client.id !== clientId);
        saveData('clients', updatedClients);
        setClients(updatedClients);
    };

    return (
        <>
            <Header />
            <div className="container">
                <ClientForm onClientAdded={handleClientAdded} />
                <ClientData clients={clients} onDeleteClient={handleDeleteClient} />
            </div>
        </>
    );
};

export default ClientsPage;
