import "./Subjects.css";
import SubjectCard from "../../components/SubjectCard/SubjectCard";
import SubjectTable from "../../components/SubjectsTable/SubjectsTable";
function Subjects() {
  const subjects = [
    {
      id: 1,
      name: "React JS",
      code: "CSE401",
      faculty: "Dr. Rajesh Kumar",
      semester: "VI",
      credits: 4,
    },

    {
      id: 2,
      name: "Python Programming",
      code: "CSE402",
      faculty: "Mrs. Priya Sharma",
      semester: "VI",
      credits: 3,
    },

    {
      id: 3,
      name: "Database Management",
      code: "CSE403",
      faculty: "Mr. Arun",
      semester: "VI",
      credits: 4,
    },
  ];
  return (
    <div className="subjects-page">
      <SubjectCard subjects={subjects} />
      <SubjectTable subjects={subjects} />
    </div>
  );
}
export default Subjects;