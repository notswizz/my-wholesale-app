import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ShowForm from '../components/ShowForm';
import ShowData from '../components/ShowData';
import { loadData, saveData } from '../lib/storage';

const ShowsPage = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        setShows(loadData('shows'));
    }, []);

    const handleShowAdded = (newShow) => {
        const updatedShows = [...shows, newShow];
        saveData('shows', updatedShows);
        setShows(updatedShows);
    };

    return (
        <>
            <Header />
            <div className="container">
                <ShowForm onShowAdded={handleShowAdded} />
                <ShowData shows={shows} />
            </div>
        </>
    );
};

export default ShowsPage;
