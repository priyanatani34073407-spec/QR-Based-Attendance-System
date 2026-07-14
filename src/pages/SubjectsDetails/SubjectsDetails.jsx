import "./SubjectsDetails.css";
import { useParams } from "react-router-dom";

function SubjectsDetails() {

  const { id } = useParams();

  return (

    <div className="details-page">

      <h1>Subject Details</h1>

      <div className="details-card">

        <h2>Subject ID : {id}</h2>

        <p><strong>Subject :</strong> React JS</p>

        <p><strong>Subject Code :</strong> CSE401</p>

        <p><strong>Faculty :</strong> Dr. Rajesh Kumar</p>

        <p><strong>Semester :</strong> VI</p>

        <p><strong>Credits :</strong> 4</p>

        <p><strong>Status :</strong> Active</p>

      </div>

    </div>

  );

}

export default SubjectsDetails;

