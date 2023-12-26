import React, { useState, useEffect } from 'react';

const DataComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/alumni/allAlumni'); // Replace with your actual API endpoint
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Data from API</h1>
            {data.map((item, index) => (
                <div key={index} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                            <strong>Hall Ticket:</strong> {item.hallticket} <br />
                            <strong>Email:</strong> {item.email} <br />
                            <strong>City:</strong> {item.city} <br />
                            <strong>State:</strong> {item.state} <br />
                            <strong>Country:</strong> {item.country} <br />
                            <strong>Year of Passing:</strong> {item.yop} <br />
                            <strong>Qualification:</strong> {item.qualification} <br />
                            <strong>Department:</strong> {item.dept} <br />
                            <strong>Organisation:</strong> {item.organisation} <br />
                            <strong>Designation:</strong> {item.designation} <br />
                            <strong>Higher Education:</strong> {item.hedu} <br />
                            <strong>Higher Education City:</strong> {item.hcity} <br />
                            <strong>Higher Education State:</strong> {item.hstate} <br />
                            <strong>Higher Education Country:</strong> {item.hcountry} <br />
                            <strong>Research Activity:</strong> {item.ract} <br />
                            <strong>Phone Number:</strong> {item.phno} <br />
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DataComponent;
