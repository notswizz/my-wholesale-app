import React from 'react';
import styles from '../styles/Data.module.css';

const ShowData = ({ shows, onDeleteShow }) => {
    return (
        <div className={styles.dataContainer}>
            {shows.map(show => (
                <div className={styles.dataItem} key={show.id || 'N/A'}>
                    <h3>{show.id}</h3>
                    <p>{show.startDate}</p>
                    <p>{show.endDate}</p>
                    <button onClick={() => onDeleteShow(show.id)} className="delete-button">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ShowData;
