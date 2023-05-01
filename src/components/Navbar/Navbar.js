import { Link } from "react-router-dom";
import { logOut } from "../../utilities/users-service";
import "./Navbar.css";

const Navbar = ({setUser}) => {
    
     const handleLogOut = () => {
       logOut();
       setUser(null);
     };

  return (
    <nav className="navbar">
      <h1>
        Connectify, <span>Welcome Back</span>
      </h1>
      <Link to="/">
        <button className="white_btn">Home</button>
      </Link>
      <Link to="/news">
        <button className="white_btn">News</button>
      </Link>
      <Link to="/events">
        <button className="white_btn">Events</button>
      </Link>
      <Link to="/">
        <button className="white_btn" onClick={handleLogOut}>
          Logout
        </button>
      </Link>
    </nav>
  );
}

export default Navbar