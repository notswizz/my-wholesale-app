import React from 'react';

const ShowData = ({ shows }) => {
    return (
        <div className="data-container">
            {shows.map(show => (
                <div className="data-item" key={show.id}>
                    <h3>{show.title}</h3>
                    <p>Date: {show.date}</p>
                    <p>Venue: {show.venue}</p>
                </div>
            ))}
        </div>
    );
};

export default ShowData;
