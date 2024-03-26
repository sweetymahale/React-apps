import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('<https://api.example.com/data>')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }), []  //empty dependancy array ensure this run only once on mount

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <div>
            <h1>Data</h1>
            { /* data */}
        </div>
    );
}