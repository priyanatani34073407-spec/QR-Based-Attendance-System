import "./Navbar.css";
import {
  FaBell,
  FaUserCircle,
  FaSearch,
  FaMoon,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-left">

        <div className="search-box">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search..."
          />
        </div>

      </div>

      <div className="navbar-right">

        <button className="theme-btn">
          <FaMoon />
        </button>

        <div className="notification">
          <FaBell className="nav-icon" />
          <span className="badge">3</span>
        </div>

        <div className="profile">

          <FaUserCircle className="profile-icon" />

          <div>

            <h4>Administrator</h4>

            <p>Admin Panel</p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;