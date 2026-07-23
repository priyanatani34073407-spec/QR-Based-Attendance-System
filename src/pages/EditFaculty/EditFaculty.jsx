import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import "./EditFaculty.css";

function EditFaculty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchFaculty();
  }, []);

  async function fetchFaculty() {
    try {
      setLoading(true);
      setError("");

      const response = await api.get(`/faculty/${id}`);

      const faculty = response.data.faculty;

      setName(faculty.name);
      setDepartment(faculty.department);
      setSubject(faculty.subject);
      setEmail(faculty.email);
    } catch (error) {
      console.error(error);
      setError("Unable to fetch faculty details.");
    } finally {
      setLoading(false);
    }
  }

  async function updateFaculty() {
    if (
      !name.trim() ||
      !department.trim() ||
      !subject.trim() ||
      !email.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await api.put(`/faculty/${id}`, {
        name,
        department,
        subject,
        email,
      });

      alert("Faculty updated successfully.");

      navigate("/faculty");
    } catch (error) {
      console.error(error);
      alert("Unable to update faculty.");
    }
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="edit-page">
      <h1>Edit Faculty</h1>

      <input
        type="text"
        placeholder="Faculty Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={updateFaculty}>
        Update Faculty
      </button>
    </div>
  );
}

export default EditFaculty;