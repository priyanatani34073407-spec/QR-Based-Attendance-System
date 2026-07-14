import "./Navbar.css";
import { FaBell, FaUserCircle } from "react-icons/fa";
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h2>QR Attendance System</h2>
      </div>
      <div className="navbar-right">
        <FaBell className="nav-icon" />
        <FaUserCircle className="nav-icon profile-icon" />
      </div>
    </header>
  );
}
export default Navbar;