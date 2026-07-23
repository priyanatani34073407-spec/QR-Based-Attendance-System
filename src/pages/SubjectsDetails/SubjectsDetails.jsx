import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import "./SubjectsDetails.css";

function SubjectsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSubject();
  }, [id]);

  async function fetchSubject() {
    try {
      setLoading(true);
      setError("");

      const response = await api.get(`/subjects/${id}`);

      if (response.data.success) {
        setSubject(response.data.subject);
      } else {
        setError("Subject not found.");
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
    return <h2>Loading subject details...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!subject) {
    return <h2>Subject not found.</h2>;
  }

  return (
    <div className="details-page">
      <h1>Subject Details</h1>

      <div className="details-card">
        <p>
          <strong>Subject:</strong> {subject.name}
        </p>

        <p>
          <strong>Subject Code:</strong> {subject.code}
        </p>

        <p>
          <strong>Faculty:</strong> {subject.faculty}
        </p>

        <p>
          <strong>Semester:</strong> {subject.semester}
        </p>

        <p>
          <strong>Credits:</strong> {subject.credits}
        </p>

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

export default SubjectsDetails;