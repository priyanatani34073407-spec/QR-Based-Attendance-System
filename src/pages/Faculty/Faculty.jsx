import { FaChalkboardTeacher, FaUserPlus } from "react-icons/fa";
import "./Faculty.css";
import FacultyCard from "../../components/FacultyCard/FacultyCard";
import FacultyTable from "../../components/FacultyTable/FacultyTable";

function Faculty() {

  const faculty = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      department: "CSE",
      subject: "React JS",
      email: "rajesh@gmail.com",
    },
    {
      id: 2,
      name: "Mrs. Priya Sharma",
      department: "AI",
      subject: "Python",
      email: "priya@gmail.com",
    },
    {
      id: 3,
      name: "Mr. Arun",
      department: "ECE",
      subject: "IoT",
      email: "arun@gmail.com",
    },
  ];

  return (
    <div className="faculty-page">

      <div className="faculty-header">

        <div>

          <h1>
            <FaChalkboardTeacher />
            Faculty Management
          </h1>

          <p>
            Manage faculty members, departments and subjects.
          </p>

        </div>

        <button className="add-faculty-btn">

          <FaUserPlus />

          Add Faculty

        </button>

      </div>

      <FacultyCard faculty={faculty} />

      <FacultyTable faculty={faculty} />

    </div>
  );
}

export default Faculty;