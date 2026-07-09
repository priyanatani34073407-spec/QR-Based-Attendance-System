import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h3>Menu</h3>

      <ul>
        <li>Dashboard</li>
        <li>Mark Attendance</li>
        <li>Attendance History</li>
        <li>Generate QR</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>

    </aside>
  );
}

export default Sidebar;