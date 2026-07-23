import "./Reports.css";
import { useState, useEffect } from "react";
import api from "../../api/api";

function Reports() {
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchReports();
  }, []);

  async function fetchReports() {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/reports");

      setReport(response.data.reports);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch reports.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Loading Reports...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const eligibleStudents = report.filter(
    (student) => student.percentage >= 75
  ).length;

  const shortAttendance = report.filter(
    (student) => student.percentage < 75
  ).length;

  return (
    <div className="reports-page">
      <h1>Attendance Reports</h1>

      <div className="report-cards">
        <div className="report-card">
          <h2>{report.length}</h2>
          <p>Total Students</p>
        </div>

        <div className="report-card">
          <h2>{eligibleStudents}</h2>
          <p>Eligible Students</p>
        </div>

        <div className="report-card">
          <h2>{shortAttendance}</h2>
          <p>Short Attendance</p>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Attendance %</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {report.length > 0 ? (
            report.map((student, index) => (
              <tr key={student._id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.subject}</td>
                <td>{student.percentage}%</td>
                <td>{student.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                No Reports Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;