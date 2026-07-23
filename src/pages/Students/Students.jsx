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
  const [error, setError] = useState("");

  // ======================
  // Fetch Students
  // ======================
  async function fetchStudents() {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/students");

      setStudents(response.data.students);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch students.");
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
      !name.trim() ||
      !rollNo.trim() ||
      !department.trim() ||
      !email.trim()
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

      await fetchStudents();

      setName("");
      setRollNo("");
      setDepartment("");
      setEmail("");

      alert("Student added successfully.");
    } catch (error) {
      console.error(error);
      alert("Unable to add student.");
    }
  }

  // ======================
  // Delete Student
  // ======================
  async function deleteStudent(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/students/${id}`);

      await fetchStudents();

      alert("Student deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("Unable to delete student.");
    }
  }

  // ======================
  // Loading & Error
  // ======================
  if (loading) {
    return <h2>Loading students...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
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

      {students.length === 0 ? (
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          No students found.
        </h3>
      ) : (
        <StudentTable
          students={students}
          deleteStudent={deleteStudent}
        />
      )}
    </div>
  );
}

export default Students;