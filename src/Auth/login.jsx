import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../Lib/store';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handlShowPass = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      registeredUser &&
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      login(registeredUser);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
   <div className="authentication-container">
     <form onSubmit={handleSubmit}>
      <h2>Login</h2>
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
            {showPass ? <IoEyeOffOutline /> : <IoEyeOutline /> }
          </wrapper>
        </div>
      </span>
      <button type="submit">Login</button>
      <div className="navigate">
      <p> Don't have an account?</p>
      <span onClick={() => navigate("/signup")}>Signup</span>
      </div>
    </form>
   </div>
  );
}

export default Login;