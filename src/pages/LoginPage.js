import React, { useState } from 'react';
import api from '../services/api';

function LoginPage() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');

 async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('/login', { email, password });

      if (response.data.token) {
        // Store the received access token securely and use it to access protected resources.
      }
    } catch (err) {
      setError(err.response.data.message);
    }
 }

 return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
 );
}

export default LoginPage;