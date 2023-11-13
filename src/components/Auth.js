import React, { useState } from 'react';
import './Auth.css'; // Import the CSS file for styling

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle user login
  };

  const handleSignup = () => {
    // Handle user registration
  };

  return (
    <div className="auth-container">
      <h2>Login or Signup</h2>
      <form>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="button-container">
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
