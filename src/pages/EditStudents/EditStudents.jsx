import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import "./EditStudents.css";

function EditStudents() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStudent();
  }, [id]);

  async function fetchStudent() {
    try {
      setLoading(true);
      setError("");

      const response = await api.get(`/students/${id}`);

      if (response.data.success) {
        const student = response.data.student;

        setName(student.name);
        setRollNo(student.rollNo);
        setDepartment(student.department);
        setEmail(student.email);
      } else {
        setError("Student not found.");
      }
    } catch (error) {
      console.error(error);

      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Unable to connect to the server.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateStudent() {
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
      setSaving(true);

      await api.put(`/students/${id}`, {
        name,
        rollNo,
        department,
        email,
      });

      alert("Student updated successfully.");

      navigate("/students");
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Unable to connect to the server.");
      }
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <h2>Loading student...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
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

      <button
        onClick={updateStudent}
        disabled={saving}
      >
        {saving ? "Updating..." : "Update Student"}
      </button>
    </div>
  );
}

export default EditStudents;