import "./FacultyCard.css";
import {
  FaChalkboardTeacher,
  FaBuilding,
  FaBook,
} from "react-icons/fa";

function FacultyCard({ faculty = [] }) {
  const totalFaculty = faculty.length;

  const totalDepartments = new Set(
    faculty.map((teacher) => teacher.department)
  ).size;

  const totalSubjects = new Set(
    faculty.map((teacher) => teacher.subject)
  ).size;

  return (
    <div className="faculty-cards">
      <div className="faculty-card">
        <FaChalkboardTeacher className="card-icon" />
        <h2>{totalFaculty}</h2>
        <p>Total Faculty</p>
      </div>

      <div className="faculty-card">
        <FaBuilding className="card-icon" />
        <h2>{totalDepartments}</h2>
        <p>Departments</p>
      </div>

      <div className="faculty-card">
        <FaBook className="card-icon" />
        <h2>{totalSubjects}</h2>
        <p>Subjects</p>
      </div>
    </div>
  );
}

export default FacultyCard;