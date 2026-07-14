import "./EditStudents.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditStudents() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: "Rahul",
    rollNo: "22CSE001",
    department: "CSE",
    email: "rahul@gmail.com",
  });
  function handleChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("Student Updated Successfully");
    navigate("/students");
  }
  return (
    <div className="edit-student">
      <h1>Edit Student</h1>
      <h3>Student ID : {id}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="rollNo"
          placeholder="Roll Number"
          value={student.rollNo}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={student.department}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
        />
        <div className="btn-group">

          <button type="submit">
            Update Student
          </button>

          <button
            type="button"
            onClick={() => navigate("/students")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditStudents;