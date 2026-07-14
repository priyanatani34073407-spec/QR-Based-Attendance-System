import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";

import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardCheck,
  FaQrcode,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <aside className="sidebar">

      <div className="sidebar-title">
        <h2>MENU</h2>
      </div>

      <nav>

        <NavLink to="/dashboard" className="nav-item">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/students" className="nav-item">
          <FaUserGraduate />
          <span>Students</span>
        </NavLink>

        <NavLink to="/faculty" className="nav-item">
          <FaChalkboardTeacher />
          <span>Faculty</span>
        </NavLink>

        <NavLink to="/subjects" className="nav-item">
          <FaBook />
          <span>Subjects</span>
        </NavLink>

        <NavLink to="/attendance" className="nav-item">
          <FaClipboardCheck />
          <span>Attendance</span>
        </NavLink>

        <NavLink to="/generate-qr" className="nav-item">
          <FaQrcode />
          <span>Generate QR</span>
        </NavLink>

        <NavLink to="/reports" className="nav-item">
          <FaChartBar />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/settings" className="nav-item">
          <FaCog />
          <span>Settings</span>
        </NavLink>

      </nav>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;