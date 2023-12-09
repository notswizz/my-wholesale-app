import React from 'react';

const ClientData = ({ clients }) => {
    return (
        <div className="data-container">
            {clients.map(client => (
                <div className="data-item" key={client.id}>
                    <h3>{client.name}</h3>
                    <p>Location: {client.location}</p>
                    <p>Email: {client.email}</p>
                </div>
            ))}
        </div>
    );
};

export default ClientData;
