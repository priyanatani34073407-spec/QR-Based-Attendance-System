import "./FacultyTable.css";
import { useNavigate } from "react-router-dom";
function FacultyTable({ faculty }) {
  const navigate = useNavigate();
  return (
    <div className="faculty-table">
      <h2>Faculty List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Subject</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            faculty.map((teacher)=>(
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.name}</td>
                <td>{teacher.department}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.email}</td>
                <td>
                  <button
                  onClick={()=>navigate(`/faculty/${teacher.id}`)}
                  >
                    View

                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
export default FacultyTable;