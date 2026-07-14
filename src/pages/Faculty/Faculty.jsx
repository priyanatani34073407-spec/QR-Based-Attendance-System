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
      <FacultyCard faculty={faculty} />
      <FacultyTable faculty={faculty} />
    </div>
  );
}
export default Faculty;