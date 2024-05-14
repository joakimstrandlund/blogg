import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
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
      </div>
      <Link className="profile" to="/ProfilePage">
        Profile
      </Link>
    </div>
  );
};

export default NavBar;
