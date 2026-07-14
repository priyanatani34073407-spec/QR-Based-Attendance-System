import "./Reports.css";
import { useState, useEffect } from "react";
function Reports() {
  const [report, setReport] = useState([]);
  useEffect(() => {
    setReport([
      {
        id: 1,
        name: "Rahul",
        subject: "React JS",
        percentage: 95,
        status: "Excellent",
      },
      {
        id: 2,
        name: "Priya",
        subject: "Python",
        percentage: 82,
        status: "Good",
      },
      {
        id: 3,
        name: "Arjun",
        subject: "DBMS",
        percentage: 68,
        status: "Average",
      },
    ]);
  }, []);
  return (
    <div className="reports-page">
      <h1>Attendance Reports</h1>
      <div className="report-cards">
        <div className="report-card">
          <h2>{report.length}</h2>
          <p>Total Students</p>
        </div>

        <div className="report-card">
          <h2>
            {
              report.filter(
                (student) => student.percentage >= 75
              ).length
            }
          </h2>
          <p>Eligible Students</p>
        </div>

        <div className="report-card">
          <h2>
            {
              report.filter(
                (student) => student.percentage < 75
              ).length
            }
          </h2>
          <p>Short Attendance</p>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Attendance %</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            report.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.subject}</td>
                <td>{student.percentage}%</td>
                <td>{student.status}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
export default Reports;