import React, { useState, useEffect } from 'react';

const FacultyComponent = () => {
    const [facultyData, setFacultyData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/faculty/getAllFaculty'); // Replace with your actual API endpoint
                const jsonData = await response.json();
                setFacultyData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Faculty Data</h1>
            {facultyData.map((faculty, index) => (
                <div key={index} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{faculty.fname}</h5>
                        <p className="card-text">
                            <strong>Faculty ID:</strong> {faculty.fid} <br />
                            <strong>Name:</strong> {faculty.fdesignation} <br />
                            <strong>Department:</strong> {faculty.fdept} <br />
                            <strong>Qualification:</strong> {faculty.fqualification} <br />
                            <strong>Designation:</strong> {faculty.fdesignation} <br />
                            <strong>Experience:</strong> {faculty.fexp} years <br />
                            <strong>Date of Birth:</strong> {faculty.fdob} <br />
                            <strong>Domain of Expertise:</strong> {faculty.fdoc} <br />
                            <strong>Mobile:</strong> {faculty.fmobile} <br />
                            <strong>Email:</strong> {faculty.femail} <br />
                            <strong>Other Qualification:</strong> {faculty.fotherqual} <br />
                            <strong>Status:</strong> {faculty.status === 1 ? 'Active' : 'Inactive'} <br />
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FacultyComponent;
