import React from 'react';
import './Register.css';

const Register = () => {
 return (
    <div className="register">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
 );
}

export default Register;