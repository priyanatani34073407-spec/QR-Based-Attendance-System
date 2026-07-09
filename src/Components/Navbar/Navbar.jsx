import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        QR Attendance System
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Dashboard</li>
        <li>Attendance</li>
        <li>Profile</li>
        <li>
          <button className="logout-btn">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;