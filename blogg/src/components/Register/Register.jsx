import React, { useState, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { createUser } from '../../Firebase/authFunctions';

// const Register = () => {
//   const { userLoggedIn } = useContext(AuthContext);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setconfirmPassword] = useState('');
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!isRegistering) {
//       setIsRegistering(true);
//       await createUser(email, password);
//     }
//   };

//   return (
//     <div>
//       {userLoggedIn && <Navigate to={'/'} replace={true} />}
//       <h1>Create a new account</h1>
//       <form onSubmit={onSubmit}>
//         <label>Email</label>
//         <input
//           type="email"
//           autoComplete="email"
//           required
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         >
//           {' '}
//         </input>
//         <div>
//           <label>Password</label>
//           <input
//             disabled={isRegistering}
//             type="password"
//             autoComplete="new-password"
//             required
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           ></input>
//         </div>

//         <div>
//           <label>Conform Password</label>
//           <input
//             disabled={isRegistering}
//             type="password"
//             autoComplete="off"
//             required
//             value={confirmPassword}
//             onChange={(e) => {
//               setconfirmPassword(e.target.value);
//             }}
//           ></input>
//         </div>

//         {errorMessage && <span>{errorMessage}</span>}

//         <button type="submit" disabled={isRegistering}>
//           {isRegistering ? 'Signing Up...' : 'Sign Up'}
//         </button>

//         <div>
//           Already have an account? <Link to={'/login'}>Continue</Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;

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
    <div>
      {userLoggedIn && <Navigate to={'/'} replace={true} />}
      <h1>Create a new account</h1>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div>
          <label>Password</label>
          <input
            disabled={isRegistering}
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            disabled={isRegistering}
            type="password"
            autoComplete="off"
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>

        {errorMessage && <span>{errorMessage}</span>}

        <button type="submit" disabled={isRegistering}>
          {isRegistering ? 'Signing Up...' : 'Sign Up'}
        </button>

        <div>
          Already have an account? <Link to={'/login'}>Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
