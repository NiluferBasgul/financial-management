import React, { useState, useEffect } from 'react';
import api from '../services/api';

function DashboardPage() {
 const [data, setData] = useState({});

 useEffect(() => {
    async function fetchData() {
      const response = await api.get('/dashboard');
      setData(response.data);
    }

    fetchData();
 }, []);

 return (
    <div>
      <h2>Dashboard</h2>
      {/* Render the data fetched from the backend */}
    </div>
 );
}

export default DashboardPage;