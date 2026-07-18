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

  function saveLastPage(page) {
    sessionStorage.setItem("lastPage", page);
  }

  function handleLogout() {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      localStorage.removeItem("currentUser");
      sessionStorage.removeItem("lastPage");
      navigate("/");
    }
  }

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-header">
        <div className="logo">
          <FaQrcode className="logo-icon" />
        </div>

        <div>
          <h2>QR Attend</h2>
          <p>Attendance System</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-menu">
        <NavLink
          to="/dashboard"
          className="nav-item"
          onClick={() => saveLastPage("/dashboard")}
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/students"
          className="nav-item"
          onClick={() => saveLastPage("/students")}
        >
          <FaUserGraduate />
          <span>Students</span>
        </NavLink>

        <NavLink
          to="/faculty"
          className="nav-item"
          onClick={() => saveLastPage("/faculty")}
        >
          <FaChalkboardTeacher />
          <span>Faculty</span>
        </NavLink>

        <NavLink
          to="/subjects"
          className="nav-item"
          onClick={() => saveLastPage("/subjects")}
        >
          <FaBook />
          <span>Subjects</span>
        </NavLink>

        <NavLink
          to="/attendance"
          className="nav-item"
          onClick={() => saveLastPage("/attendance")}
        >
          <FaClipboardCheck />
          <span>Attendance</span>
        </NavLink>

        <NavLink
          to="/generate-qr"
          className="nav-item"
          onClick={() => saveLastPage("/generate-qr")}
        >
          <FaQrcode />
          <span>Generate QR</span>
        </NavLink>

        <NavLink
          to="/reports"
          className="nav-item"
          onClick={() => saveLastPage("/reports")}
        >
          <FaChartBar />
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="/settings"
          className="nav-item"
          onClick={() => saveLastPage("/settings")}
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="admin-box">
          <div className="status"></div>

          <div>
            <h4>Administrator</h4>
            <p>Online</p>
          </div>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;