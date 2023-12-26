import React, { useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';

const Clist = () => {
  const [cList, setCList] = useState([]);

  const fetchClist = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCList(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const CURRENT_URL = `http://localhost:8080/clist/allClist`;
    fetchClist(CURRENT_URL);
  }, []);

  return (
    <Container className="mt-4">
      <h1 className="text-center">Clist</h1>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {cList.map(({ rid, name, position, type }) => (
            <tr key={rid}>
              <td>{name}</td>
              <td>{position}</td>
              <td>{type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Clist;
