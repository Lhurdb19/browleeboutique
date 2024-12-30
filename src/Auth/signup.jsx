import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handlShowPass = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password };
    console.log(newUser)
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    navigate('/login');
  };

  return (
    <div className="authentication-container">
      <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <span>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </span>
      <span>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </span>
      <span>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </span>
      <span>
        <label>Password:</label>
        <div className="show-pass">
          <input
            type={showPass ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
           <wrapper className='eye' onClick={handlShowPass}>
            {showPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </wrapper>
        </div>
      </span>
      <button type="submit">Sign Up</button>
     <div className="navigate">
     <p>Already registered user? </p>
      <span onClick={() => navigate('/login')}>Login</span>
     </div>
    </form>
    </div>
  );
}

export default Signup;