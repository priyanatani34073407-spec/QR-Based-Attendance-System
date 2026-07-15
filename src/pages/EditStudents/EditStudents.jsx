import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditStudents.css";

function EditStudents() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const students =
      JSON.parse(localStorage.getItem("students")) || [];

    const student = students.find(
      (student) => String(student.id) === id
    );

    if (student) {
      setName(student.name);
      setRollNo(student.rollNo);
      setDepartment(student.department);
      setEmail(student.email);
    }
  }, [id]);

  function updateStudent() {
    if (
      name === "" ||
      rollNo === "" ||
      department === "" ||
      email === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const students =
      JSON.parse(localStorage.getItem("students")) || [];

    const updatedStudents = students.map((student) =>
      String(student.id) === id
        ? {
            ...student,
            name,
            rollNo,
            department,
            email,
          }
        : student
    );

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );

    alert("Student Updated Successfully");

    navigate("/students");
  }

  return (
    <div className="edit-page">

      <h1>Edit Student</h1>

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
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={updateStudent}>
        Update Student
      </button>

    </div>
  );
}

export default EditStudents;