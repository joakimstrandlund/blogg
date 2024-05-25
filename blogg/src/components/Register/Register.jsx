import React, { useState, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { createUser } from '../../Firebase/authFunctions';

import './Register.css';

const Register = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await createUser(email, password);
      } catch (error) {
        setErrorMessage(error.message);
      }
      setIsRegistering(false);
    }
  };

  return (
    <div className="container-register">
      <div>
        {userLoggedIn && <Navigate to={'/'} replace={true} />}
        <h1 className="create">Create a new account</h1>
        <form className="register" onSubmit={onSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/* <div> */}
          <label>Password</label>
          <input
            disabled={isRegistering}
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {/* </div> */}

          {/* <div> */}
          <label>Confirm Password</label>
          <input
            disabled={isRegistering}
            type="password"
            placeholder="Confirm password"
            autoComplete="off"
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          {/* </div> */}

          {errorMessage && <span>{errorMessage}</span>}

          <button type="submit" disabled={isRegistering}>
            {isRegistering ? 'Signing Up...' : 'Sign Up'}
          </button>

          <div className="log-in">
            Already have an account? <Link to={'/login'}>Log In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
