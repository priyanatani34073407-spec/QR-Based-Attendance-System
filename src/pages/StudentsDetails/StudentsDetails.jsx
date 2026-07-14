import "./StudentsDetails.css";
import { useParams } from "react-router-dom";

function StudentsDetails() {

  const { id } = useParams();

  return (
    <div className="details-page">

      <h1>Student Details</h1>

      <div className="details-card">

        <h2>Student ID : {id}</h2>

        <p><strong>Name :</strong> Rahul Kumar</p>

        <p><strong>Roll No :</strong> 22CSE001</p>

        <p><strong>Department :</strong> CSE</p>

        <p><strong>Year :</strong> III B.Tech</p>

        <p><strong>Email :</strong> rahul@gmail.com</p>

        <p><strong>Attendance :</strong> 92%</p>

      </div>

    </div>
  );
}

export default StudentsDetails;