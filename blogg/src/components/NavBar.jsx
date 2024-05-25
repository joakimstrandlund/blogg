import { Link } from 'react-router-dom';
import './NavBar.css';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
// import { signOutUser } from 'firebase/auth';
import { signInUser, signOutUser } from '../Firebase/authFunctions';

const NavBar = () => {
  const { currentUser, userLoggedIn } = useContext(AuthContext);

  return (
    <div className="NavBar">
      {/* <h1 className="logga">logga</h1> */}

      <Link to="/">
        <img className="logo" src="https://cdn-icons-png.freepik.com/256/11207/11207604.png?semt=ais_hybrid" />
      </Link>

      <div>
        <Link className="link" to="/AboutPage">
          About
        </Link>

        <Link className="link" to="/InformationPage">
          Information
        </Link>

        <Link className="link" to="/ProfilePage">
          Profile
        </Link>
      </div>

      <div className="user">
        <p>{currentUser && currentUser.email}</p>
        {userLoggedIn && (
          <button className="log-out-btn" onClick={signOutUser}>
            Log out
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
