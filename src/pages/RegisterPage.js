import React, { useState } from 'react';
import api from '../services/api';

function RegisterPage() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [error, setError] = useState('');

 async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await api.post('/register', { name, email, password });

      if (response.data.user) {
        // Navigate to the LoginPage or show a success message.
      }
    } catch (err) {
      setError(err.response.data.message);
    }
 }

 return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
 );
}

export default RegisterPage;