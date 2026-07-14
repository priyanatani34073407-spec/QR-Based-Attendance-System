import "./SubjectsTable.css";
import { useNavigate } from "react-router-dom";

function SubjectsTable({ subjects = [] }) {

  const navigate = useNavigate();

  return (
    <div className="subject-table">

      <h2>Subject List</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Code</th>
            <th>Faculty</th>
            <th>Semester</th>
            <th>Credits</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {subjects.length === 0 ? (

            <tr>
              <td colSpan="7">No Subjects Available</td>
            </tr>

          ) : (

            subjects.map((subject) => (

              <tr key={subject.id}>

                <td>{subject.id}</td>
                <td>{subject.name}</td>
                <td>{subject.code}</td>
                <td>{subject.faculty}</td>
                <td>{subject.semester}</td>
                <td>{subject.credits}</td>

                <td>
                  <button
                    onClick={() => navigate(`/subject/${subject.id}`)}
                  >
                    View
                  </button>
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default SubjectsTable;