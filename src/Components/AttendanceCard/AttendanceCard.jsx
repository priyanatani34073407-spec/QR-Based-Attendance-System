import "./AttendanceCard.css";
import {
  FaUserCheck,
  FaUserTimes,
  FaUsers,
} from "react-icons/fa";

function AttendanceCard({ attendance }) {

  const total = attendance.length;

  const present = attendance.filter(
    (student) => student.status === "Present"
  ).length;

  const absent = attendance.filter(
    (student) => student.status === "Absent"
  ).length;

  return (

    <div className="attendance-cards">

      <div className="attendance-card">

        <FaUsers className="card-icon"/>

        <h2>{total}</h2>

        <p>Total Students</p>

      </div>

      <div className="attendance-card">

        <FaUserCheck className="card-icon"/>

        <h2>{present}</h2>

        <p>Present</p>

      </div>

      <div className="attendance-card">

        <FaUserTimes className="card-icon"/>

        <h2>{absent}</h2>

        <p>Absent</p>

      </div>

    </div>

  );

}

export default AttendanceCard;