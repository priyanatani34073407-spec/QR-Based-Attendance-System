import "./Dashboard.css";

function Dashboard() {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <div>
          <h1>Dashboard</h1>

          <p className="welcome">
            Welcome back, {currentUser?.name || "Administrator"} 👋
          </p>
        </div>

      </div>

      <div className="dashboard-cards">

        <div className="card stat-card">
          <h3>Total Students</h3>
          <h2>150</h2>
          <span>Registered Students</span>
        </div>

        <div className="card stat-card">
          <h3>Total Faculty</h3>
          <h2>18</h2>
          <span>Faculty Members</span>
        </div>

        <div className="card stat-card">
          <h3>Today's Attendance</h3>
          <h2>120</h2>
          <span>Present Students</span>
        </div>

        <div className="card stat-card">
          <h3>Absent Today</h3>
          <h2>30</h2>
          <span>Need Attention</span>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="card attendance-card">

          <h2>Attendance Overview</h2>

          <div className="progress">

            <div
              className="progress-fill"
              style={{ width: "80%" }}
            ></div>

          </div>

          <p>80% Attendance Today</p>

        </div>

        <div className="card activity-card">

          <h2>Recent Activities</h2>

          <ul>

            <li>✅ QR generated for CSE-A</li>

            <li>👨‍🎓 120 Students marked attendance</li>

            <li>📚 New Subject Added</li>

            <li>👨‍🏫 Faculty updated attendance</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;