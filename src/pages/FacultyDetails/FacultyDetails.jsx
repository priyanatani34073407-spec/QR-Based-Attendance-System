import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import "./FacultyDetails.css";

function FacultyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [faculty, setFaculty] = useState(null);
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

      setFaculty(response.data.faculty);
    } catch (error) {
      console.error(error);
      setError("Unable to fetch faculty details.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Loading faculty details...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!faculty) {
    return <h2>Faculty not found.</h2>;
  }

  return (
    <div className="details-page">
      <h1>Faculty Details</h1>

      <div className="details-card">
        <p><strong>Name:</strong> {faculty.name}</p>
        <p><strong>Department:</strong> {faculty.department}</p>
        <p><strong>Subject:</strong> {faculty.subject}</p>
        <p><strong>Email:</strong> {faculty.email}</p>

        <button
          className="back-btn"
          onClick={() => navigate("/faculty")}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default FacultyDetails;