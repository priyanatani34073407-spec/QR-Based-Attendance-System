import { useEffect, useState } from "react";
import { FaBook, FaPlus } from "react-icons/fa";
import api from "../../api/api";
import SubjectCard from "../../components/SubjectCard/SubjectCard";
import SubjectsTable from "../../components/SubjectsTable/SubjectsTable";
import "./Subjects.css";

function Subjects() {
  const [subjects, setSubjects] = useState([]);

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [faculty, setFaculty] = useState("");
  const [semester, setSemester] = useState("");
  const [credits, setCredits] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==========================
  // Fetch Subjects
  // ==========================
  async function fetchSubjects() {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/subjects");

      if (response.data.success) {
        setSubjects(response.data.subjects);
      } else {
        setError("No subjects found.");
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

  useEffect(() => {
    fetchSubjects();
  }, []);

  // ==========================
  // Add Subject
  // ==========================
  async function addSubject() {
    if (
      !name.trim() ||
      !code.trim() ||
      !faculty.trim() ||
      !semester.trim() ||
      !credits
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await api.post("/subjects", {
        name,
        code,
        faculty,
        semester,
        credits,
      });

      await fetchSubjects();

      setName("");
      setCode("");
      setFaculty("");
      setSemester("");
      setCredits("");

      alert("Subject added successfully.");
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Unable to connect to the server.");
      }
    }
  }

  // ==========================
  // Delete Subject
  // ==========================
  async function deleteSubject(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this subject?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/subjects/${id}`);

      await fetchSubjects();

      alert("Subject deleted successfully.");
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Unable to connect to the server.");
      }
    }
  }

  if (loading) {
    return <h2>Loading subjects...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="subjects-page">
      <div className="subjects-header">
        <h1>
          <FaBook /> Subject Management
        </h1>

        <p>Manage all subjects from one place.</p>
      </div>

      <div className="add-form">
        <input
          type="text"
          placeholder="Subject Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <input
          type="text"
          placeholder="Faculty Name"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
        />

        <input
          type="text"
          placeholder="Semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        />

        <input
          type="number"
          placeholder="Credits"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
        />

        <button onClick={addSubject}>
          <FaPlus />
          <span>Add Subject</span>
        </button>
      </div>

      <SubjectCard subjects={subjects} />

      {subjects.length === 0 ? (
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          No Subjects Found
        </h3>
      ) : (
        <SubjectsTable
          subjects={subjects}
          deleteSubject={deleteSubject}
        />
      )}
    </div>
  );
}

export default Subjects;