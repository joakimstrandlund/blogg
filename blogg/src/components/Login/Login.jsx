import React, { useState, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { signInUser } from '../../Firebase/authFunctions';

// const Login = () => {
//   const { userLoggedIn } = useContext(AuthContext);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [IsSigningIn, SetIsSigningIn] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!isSigningIN) {
//       SetIsSigningIn(true);
//       await signInUser(email, password);
//     }
//   };

//   return (
//     <div>
//       {userLoggedIn && <Navigate to={'/'} replace={true} />}

//       <h1>Welcome back</h1>
//       <form onSubmit={onSubmit}>
//         <label>Email</label>
//         <input
//           type="mail"
//           autoComplete="email"
//           required
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         >
//           <p>Passoword</p>
//         </input>

//         <div>
//           <input
//             type="password"
//             autoComplete="current-password"
//             required
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           ></input>
//         </div>

//         {errorMessage && <span>{errorMessage}</span>}

//         {/* kan behövas mer kod här på knappen */}

//         <button type="submit" disabled={IsSigningIn}></button>
//       </form>

//       <p>
//         Dont have an account?{''} <Link to={'/register'}>Sign Up</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

const Login = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await signInUser(email, password);
      } catch (error) {
        setErrorMessage(error.message);
      }
      setIsSigningIn(false);
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={'/'} replace={true} />}

      <h1>Welcome back</h1>
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
        <label>Password</label>
        <input
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {errorMessage && <span>{errorMessage}</span>}
        <button type="submit" disabled={isSigningIn}>
          Sign In
        </button>
      </form>

      <p>
        Don't have an account? <Link to={'/register'}>Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
