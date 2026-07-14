import "./FacultyDetails.css";
import { useParams } from "react-router-dom";

function FacultyDetails() {
  const { id } = useParams();
  return (
    <div className="details-page">
      <h1>Faculty Details</h1>
      <div className="details-card">
        <h2>Faculty ID : {id}</h2>
        <p><strong>Name :</strong> Dr. Rajesh Kumar</p>
        <p><strong>Department :</strong> CSE</p>
        <p><strong>Subject :</strong> React JS</p>
        <p><strong>Email :</strong> rajesh@gmail.com</p>
      </div>
    </div>
  );
}
export default FacultyDetails;