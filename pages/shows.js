import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ShowForm from '../components/ShowForm';
import ShowData from '../components/ShowData';
import { loadData } from '../lib/storage';

const ShowsPage = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        setShows(loadData('shows'));
    }, []);

    const handleShowAdded = (newShow) => {
        setShows(prevShows => [...prevShows, newShow]);
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
