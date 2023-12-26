import React, { useState } from 'react';

const AddIQACMember = () => {
    const [newMember, setNewMember] = useState({
        name: '',
        position: '',
        type: 'iqac', // assuming this is a default value
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewMember((prevMember) => ({
            ...prevMember,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('your_api_endpoint_here', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMember),
            });

            if (response.ok) {
                console.log('Member added successfully');
                // You might want to reset the form or perform additional actions
            } else {
                console.error('Failed to add member');
            }
        } catch (error) {
            console.error('Error adding member:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h1>Add IQAC Member</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={newMember.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Position:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="position"
                        value={newMember.position}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Member
                </button>
            </form>
        </div>
    );
};

export default AddIQACMember;
