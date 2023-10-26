import React, { useState, useEffect } from 'react';

const TestApiAsp = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        populateMessage();
    }, []);

    const populateMessage = async () => {
        try {
            const response = await fetch("api/message"); // Replace 'api/message' with the correct endpoint on your server
            const data = await response.text();
            setMessage(data);
            console.log(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1 id="tabelLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {loading ? <p><em>Loading...</em></p> : <p>{message}</p>}
        </div>
    );
};

export default TestApiAsp;
