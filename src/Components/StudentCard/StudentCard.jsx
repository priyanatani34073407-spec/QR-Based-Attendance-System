import "./StudentCard.css";
import {
  FaUserGraduate,
  FaUserCheck,
  FaUniversity,
} from "react-icons/fa";

function StudentCard({ students }) {
  const totalStudents = students.length;
  const totalBranches = new Set(
    students.map((student) => student.branch)
  ).size;
  const activeStudents = students.length;
  return (
    <div className="student-cards">
      <div className="student-card">
        <FaUserGraduate className="card-icon" />
        <h2>{totalStudents}</h2>
        <p>Total Students</p>
      </div>

      <div className="student-card">
        <FaUserCheck className="card-icon" />
        <h2>{activeStudents}</h2>
        <p>Active Students</p>
      </div>

      <div className="student-card">
        <FaUniversity className="card-icon" />
        <h2>{totalBranches}</h2>
        <p>Departments</p>
      </div>
    </div>
  );
}
export default StudentCard;