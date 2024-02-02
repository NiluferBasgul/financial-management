// Import necessary dependencies
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Update the import statement
import api from '../services/api';

// LoginPage component
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Access the navigate function
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('/login', { email, password });

      if (response.data.token) {
        // Redirect to the home page after successful login
        navigate('/');
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;
