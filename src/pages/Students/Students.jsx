import { useState, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import StudentCard from "../../components/StudentCard/StudentCard";
import StudentTable from "../../components/StudentTable/StudentTable";
import "./Students.css";

function Students() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedStudents = JSON.parse(
      localStorage.getItem("students")
    );

    if (savedStudents) {
      setStudents(savedStudents);
    } else {
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

      localStorage.setItem(
        "students",
        JSON.stringify(studentData)
      );
    }
  }, []);

  function addStudent() {
    if (
      name.trim() === "" ||
      rollNo.trim() === "" ||
      department.trim() === "" ||
      email.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      rollNo,
      department,
      email,
    };

    const updatedStudents = [
      ...students,
      newStudent,
    ];

    setStudents(updatedStudents);

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );

    setName("");
    setRollNo("");
    setDepartment("");
    setEmail("");
  }

  function deleteStudent(id) {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );
  }

  return (
    <div className="students-page">

      {/* Page Header */}

      <div className="students-header">

        <div>

          <h1>Students Management</h1>

          <p>
            Manage all student records from one place.
          </p>

        </div>

      </div>

      {/* Add Student Form */}

      <div className="add-form">

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Roll Number"
          value={rollNo}
          onChange={(e) =>
            setRollNo(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) =>
            setDepartment(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button onClick={addStudent}>
          <FaUserPlus />
          <span>Add Student</span>
        </button>

      </div>

      {/* Student Summary Cards */}

      <StudentCard students={students} />

      {/* Student Table */}

      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
      />

    </div>
  );
}

export default Students;