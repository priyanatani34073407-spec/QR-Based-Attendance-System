import { useState, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import StudentCard from "../../components/StudentCard/StudentCard";
import StudentTable from "../../components/StudentTable/StudentTable";
import api from "../../api/api";
import "./Students.css";

function Students() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(true);

  // ======================
  // Fetch Students
  // ======================
  async function fetchStudents() {
    try {
      setLoading(true);

      const response = await api.get("/students");

      setStudents(response.data.students);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  // ======================
  // Add Student
  // ======================
  async function addStudent() {
    if (
      name.trim() === "" ||
      rollNo.trim() === "" ||
      department.trim() === "" ||
      email.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await api.post("/students", {
        name,
        rollNo,
        department,
        email,
      });

      fetchStudents();

      setName("");
      setRollNo("");
      setDepartment("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  }

  // ======================
  // Delete Student
  // ======================
  async function deleteStudent(id) {
    try {
      await api.delete(`/students/${id}`);

      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="students-page">

      <div className="students-header">
        <div>
          <h1>Students Management</h1>
          <p>Manage all student records from one place.</p>
        </div>
      </div>

      <div className="add-form">

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Roll Number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={addStudent}>
          <FaUserPlus />
          <span>Add Student</span>
        </button>

      </div>

      <StudentCard students={students} />

      <StudentTable
        students={students}
        deleteStudent={deleteStudent}
      />

    </div>
  );
}

export default Students;