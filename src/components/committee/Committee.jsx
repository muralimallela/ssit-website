import React, { useState, useEffect } from "react";

const CommitteeList = () => {
  const [committees, setCommittees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch("http://localhost:8080/committee/allCommittees");
        const data = await response.json();
        setCommittees(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Committees</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Committee</th>
            <th scope="col">Coordinator</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {committees.map((committee) => (
            <tr key={committee.sno}>
              <th scope="row">{committee.sno}</th>
              <td>{committee.cmtee}</td>
              <td>{committee.cord}</td>
              <td>{committee.email}</td>
              <td>{committee.mno}</td>
              <td>
                <a href={committee.hlink} target="_blank" rel="noopener noreferrer">
                  {committee.hlink}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommitteeList;
