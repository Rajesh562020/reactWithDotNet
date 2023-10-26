import React, { useState, useEffect } from 'react';

function TestApi() {
    const [data, setData] = useState({});
    useEffect(() => {
        // URL of your CORS Anywhere proxy server
        const proxyUrl = 'http://localhost:5000'; // Use the URL of your CORS Anywhere server

        // URL of the target API
        const apiUrl = 'https://reactapi.dialmytrip.com/api/Services/DMTLogin';

        // Request body data
        const requestData = {
            UserID: '9266598695',
            ApiPassword: 'ajeet@4321',
            apikey: 'Njk1MjAyMC0wMi0xMSAxMTozNDoyMQ==',
            Appversion: '2.64',
            Lat: '28.206357',
            Long: '76.7915362',
        };

        // Fetch API request when the component mounts, using the proxy server
        fetch(`${proxyUrl}/${apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'UserID': '9266598695',
                'ApiPassword': 'ajeet@4321',
                'apikey': 'Njk1MjAyMC0wMi0xMSAxMTozNDoyMQ==',

                // Set the content type header
                // Add any other headers as needed
            },
            body: JSON.stringify(requestData), // Send the data in the request body
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                // Handle any errors
                console.error('API request error:', error);
            });
    }, []);

    return (
        <div>
            <h1>Test Api</h1>
            {/* Render your API response data here */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default TestApi;
