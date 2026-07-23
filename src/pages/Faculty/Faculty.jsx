import { useEffect, useState } from "react";
import { FaChalkboardTeacher, FaUserPlus } from "react-icons/fa";
import api from "../../api/api";
import FacultyCard from "../../components/FacultyCard/FacultyCard";
import FacultyTable from "../../components/FacultyTable/FacultyTable";
import "./Faculty.css";

function Faculty() {
  const [faculty, setFaculty] = useState([]);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==========================
  // Fetch Faculty
  // ==========================
  async function fetchFaculty() {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/faculty");

      setFaculty(response.data.faculty);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch faculty.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFaculty();
  }, []);

  // ==========================
  // Add Faculty
  // ==========================
  async function addFaculty() {
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
      await api.post("/faculty", {
        name,
        department,
        subject,
        email,
      });

      await fetchFaculty();

      setName("");
      setDepartment("");
      setSubject("");
      setEmail("");

      alert("Faculty added successfully.");
    } catch (error) {
      console.error(error);
      alert("Unable to add faculty.");
    }
  }

  // ==========================
  // Delete Faculty
  // ==========================
  async function deleteFaculty(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this faculty member?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/faculty/${id}`);

      await fetchFaculty();

      alert("Faculty deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("Unable to delete faculty.");
    }
  }

  if (loading) {
    return <h2>Loading faculty...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="faculty-page">
      <div className="faculty-header">
        <div>
          <h1>
            <FaChalkboardTeacher />
            Faculty Management
          </h1>

          <p>
            Manage faculty members, departments and subjects.
          </p>
        </div>
      </div>

      <div className="add-form">
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

        <button onClick={addFaculty}>
          <FaUserPlus />
          <span>Add Faculty</span>
        </button>
      </div>

      <FacultyCard faculty={faculty} />

      {faculty.length === 0 ? (
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          No Faculty Found
        </h3>
      ) : (
        <FacultyTable
          faculty={faculty}
          deleteFaculty={deleteFaculty}
        />
      )}
    </div>
  );
}

export default Faculty;