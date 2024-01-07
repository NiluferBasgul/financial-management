import React, { useState, useEffect } from 'react';
import api from '../services/api';

function RevenuePage() {
 const [revenues, setRevenues] = useState([]);

 useEffect(() => {
    async function fetchData() {
      const response = await api.get('/revenues');
      setRevenues(response.data);
    }

    fetchData();
 }, []);

 return (
    <div>
      <h2>Revenues</h2>
      <ul>
        {revenues.map(revenue => (
          <li key={revenue.id}>
            <revenue revenue={revenue} />
          </li>
        ))}
      </ul>
    </div>
 );
}

export default RevenuePage;