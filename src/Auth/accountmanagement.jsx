import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../Lib/store';
import { useNavigate } from 'react-router-dom';

const Accountmanagement = () => {
  const user = useAuthStore((state) => state.user);
  const updateUser = useAuthStore((state) => state.updateUser);

  const [email, setEmail] = useState(user?.email || '');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setEmail(user.email);
    }
  }, [user]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newPassword && newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const updatedData = { email };
    if (newPassword) {
      updatedData.password = newPassword;
    }

    // Update the store with the new data
    updateUser(updatedData);

    // Reset form fields and show success message
    setNewPassword('');
    setConfirmPassword('');
    setError('Successfully Updated');
    navigate('/'); // Redirect after update
  };

  return (
    <div className='account-container'>
      <h2>Account Management</h2>
      <form onSubmit={handleSubmit}>
        <div className='change-email'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className='change-newpass'>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handlePasswordChange}
            placeholder="Enter new password"
          />
        </div>

        <div className='change-newpass'>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm new password"
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Update Account</button>
      </form>
    </div>
  );
};

export default Accountmanagement;
