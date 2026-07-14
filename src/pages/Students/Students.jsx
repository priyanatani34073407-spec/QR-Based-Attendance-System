import { useState, useEffect } from "react";
import StudentCard from "../../components/StudentCard/StudentCard";
import StudentTable from "../../components/StudentTable/StudentTable";
function Students() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const studentData = [
      {
        id: 1,
        name: "Rahul",
        rollNo: "22CSE001",
        department: "CSE",
        email: "rahul@gmail.com",
      },
      {
        id: 2,
        name: "Priya",
        rollNo: "22CSE002",
        department: "AI",
        email: "priya@gmail.com",
      },
      {
        id: 3,
        name: "Arjun",
        rollNo: "22CSE003",
        department: "ECE",
        email: "arjun@gmail.com",
      },
    ];
    setStudents(studentData);
  }, []);
  function deleteStudent(id) {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );
    setStudents(updatedStudents);
  }
  return (
    <div>
      <StudentCard students={students} />
      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}
export default Students;