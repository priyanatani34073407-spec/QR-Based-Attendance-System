import "./Attendance.css";
import { useState, useEffect } from "react";
import AttendanceCard from "../../components/AttendanceCard/AttendanceCard";
import AttendanceTable from "../../components/AttendanceTable/AttendanceTable";
import api from "../../api/api";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAttendance();
  }, []);

  async function fetchAttendance() {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/attendance");

      setAttendance(response.data.attendance);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch attendance.");
    } finally {
      setLoading(false);
    }
  }

  const filteredAttendance = attendance.filter(
    (student) =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.subject
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  if (loading) {
    return <h2>Loading attendance...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="attendance-page">
      <h1>Attendance Management</h1>

      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <AttendanceCard attendance={filteredAttendance} />

      <AttendanceTable attendance={filteredAttendance} />
    </div>
  );
}

export default Attendance;