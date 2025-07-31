import React, { useState } from 'react';
import './Submit.css';
import SubmitForm from './SubmitForm'; // 
import banner from '../assets/road1.jpg'; // 


export default function Submit() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setUnlocked(true);
    } else {
      alert('Incorrect password.');
    }
  };

  if (unlocked) {
    return (
      <div className="submit-page">
        <SubmitForm /> 
      </div>
    );
  }

  return (
    <div
      className="overlay-wrapper"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="blur-background" />
      <div className="password-box">
        <h2>Restricted Access</h2>
        <p>Energy conservation reports submitted during potential peak demand hours are currently available only to authorized building administrators.</p>
        <p>Please enter your administrator password to proceed.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
  
}
