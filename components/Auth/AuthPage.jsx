'use client';

import { useState } from 'react';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Submitting:', { email, password });
  
    const endpoint = isSignUp ? '/api/auth/signup' : '/api/auth/login';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    console.log('Response:', response);
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData);
      setMessage(errorData.message);
      return;
    }
  
    const data = await response.json();
    setMessage(data.message);
    console.log(email, password)
  };

  return (
    <div>
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">
          {isSignUp ? 'Create Account' : 'Sign In'}
        </button>
      </form>
      <p>{message}</p>
      <button onClick={() => setIsSignUp((prev) => !prev)}>
        {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
      </button>
    </div>
  );
};

export default AuthPage;