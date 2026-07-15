import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Dashboard() {

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  return (
    <div>

      <Navbar />

      <div className="dashboard-container">

        <Sidebar />

        <div className="dashboard-content">

          <h1>Dashboard</h1>

          <p className="welcome">
            Welcome Back, {currentUser?.name} 👋
          </p>

          <div className="cards">

            <div className="card">
              <h3>Total Students</h3>
              <p>150</p>
            </div>

            <div className="card">
              <h3>Present Today</h3>
              <p>120</p>
            </div>

            <div className="card">
              <h3>Absent Today</h3>
              <p>30</p>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Dashboard;