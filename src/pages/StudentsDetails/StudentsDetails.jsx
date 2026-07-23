import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/api";
import "./StudentsDetails.css";

function StudentsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
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
        setStudent(response.data.student);
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

  if (loading) {
    return <h2>Loading student details...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!student) {
    return <h2>Student not found.</h2>;
  }

  return (
    <div className="details-page">
      <h1>Student Details</h1>

      <div className="details-card">
        <p>
          <strong>Name:</strong> {student.name}
        </p>

        <p>
          <strong>Roll No:</strong> {student.rollNo}
        </p>

        <p>
          <strong>Department:</strong> {student.department}
        </p>

        <p>
          <strong>Email:</strong> {student.email}
        </p>

        {student.year && (
          <p>
            <strong>Year:</strong> {student.year}
          </p>
        )}

        {student.attendance && (
          <p>
            <strong>Attendance:</strong> {student.attendance}%
          </p>
        )}

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default StudentsDetails;