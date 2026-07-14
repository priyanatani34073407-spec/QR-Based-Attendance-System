// import StudentCard from "../../components/StudentCard/StudentCard";
// import StudentTable from "../../components/StudentTable/StudentTable";

// function Students() {
//   return (
//     <>
//       <StudentCard />
//       <StudentTable />
//     </>
//   );
// }

// export default Students;

import "./Students.css";

import StudentCard from "../../components/StudentCard/StudentCard";
import StudentTable from "../../Components/SubjectsTable/SubjectsTable";

function Students() {
  const students = [
    {
      id: 1,
      name: "Rahul Kumar",
      rollNo: "22CSE001",
      branch: "CSE",
      year: "III",
    },
    {
      id: 2,
      name: "Priya Sharma",
      rollNo: "22CSE002",
      branch: "AI",
      year: "III",
    },
    {
      id: 3,
      name: "Arun Kumar",
      rollNo: "22CSE003",
      branch: "ECE",
      year: "II",
    },
  ];
  return (
    <div className="students-page">
      <StudentCard students={students} />
      <StudentTable students={students} />
    </div>
  );
}
export default Students;