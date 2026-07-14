import "./SubjectCard.css";
import {
  FaBook,
  FaChalkboardTeacher,
  FaLayerGroup,
} from "react-icons/fa";

function SubjectCard({ subjects }) {

  const totalSubjects = subjects.length;

  const totalFaculty = new Set(
    subjects.map((subject) => subject.faculty)
  ).size;

  const totalSemesters = new Set(
    subjects.map((subject) => subject.semester)
  ).size;

  return (
    <div className="subject-cards">

      <div className="subject-card">

        <FaBook className="card-icon" />

        <h2>{totalSubjects}</h2>

        <p>Total Subjects</p>

      </div>

      <div className="subject-card">

        <FaChalkboardTeacher className="card-icon" />

        <h2>{totalFaculty}</h2>

        <p>Faculty Assigned</p>

      </div>

      <div className="subject-card">

        <FaLayerGroup className="card-icon" />

        <h2>{totalSemesters}</h2>

        <p>Semesters</p>

      </div>

    </div>
  );
}

export default SubjectCard;