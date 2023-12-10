import React from 'react';

const ClientData = ({ clients, onDeleteClient }) => {
    return (
        <div className="data-container">
            {clients.map(client => (
                <div className="data-item" key={client.id}>
                    <h3>{client.company}</h3>
                    {/* Check and format the website URL */}
                    <p>Website: 
                        <a href={client.website.startsWith('http') ? client.website : `http://${client.website}`} 
                           target="_blank" 
                           rel="noopener noreferrer">
                           {client.website}
                        </a>
                    </p>
                    <p>Contact Name: {client.contact}</p>
                    <p>Email: {client.email}</p>
                    <p>Booth Location: {client.boothLocation}</p>
                    <button onClick={() => onDeleteClient(client.id)} className="delete-button">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ClientData;
