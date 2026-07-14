import "./Reports.css";
import { FaChartBar } from "react-icons/fa";

function Reports() {

  return (

    <div className="reports-page">

      <h1>Attendance Reports</h1>

      <div className="report-card">

        <FaChartBar className="report-icon"/>

        <h2>Attendance Summary</h2>

        <p>Total Students : 120</p>

        <p>Present Today : 110</p>

        <p>Absent Today : 10</p>

        <p>Overall Attendance : 91.7%</p>

      </div>

    </div>

  );

}

export default Reports;