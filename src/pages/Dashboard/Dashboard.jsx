import "./Dashboard.css";
import { useState, useEffect } from "react";
import api from "../../api/api";

import DashboardCard from "../../Components/DashboardCard/DashboardCard";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardCheck,
} from "react-icons/fa";

function Dashboard() {
  const [dashboard, setDashboard] = useState({
    totalStudents: 0,
    totalFaculty: 0,
    totalSubjects: 0,
    totalAttendance: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await api.get("/dashboard");

      if (res.data.success) {
        setDashboard(res.data);
      }
    } catch (err) {
      console.error("Dashboard Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading Dashboard...</h2>;
  }

  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <div className="dashboard-cards">

        <DashboardCard
          title="Students"
          value={dashboard.totalStudents}
          icon={<FaUserGraduate />}
        />

        <DashboardCard
          title="Faculty"
          value={dashboard.totalFaculty}
          icon={<FaChalkboardTeacher />}
        />

        <DashboardCard
          title="Subjects"
          value={dashboard.totalSubjects}
          icon={<FaBook />}
        />

        <DashboardCard
          title="Attendance"
          value={dashboard.totalAttendance}
          icon={<FaClipboardCheck />}
        />

      </div>

    </div>
  );
}

export default Dashboard;