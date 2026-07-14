import "./StudentTable.css";
import { useNavigate } from "react-router-dom";
function StudentTable({ students = [], deleteStudent }) {
  const navigate = useNavigate();
  return (
    <div className="student-table">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Department</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            students.length === 0 ?
            (
              <tr>
                <td colSpan="6">
                  No Students Found
                </td>
              </tr>
            )
            :
            (
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.rollNo}</td>
                  <td>{student.department}</td>
                  <td>{student.email}</td>
                  <td>
                    <button
                      onClick={() =>
                        navigate(`/student/${student.id}`)
                      }
                    >
                      View
                    </button>

                    <button
                      onClick={() =>
                        navigate(`/student/edit/${student.id}`)
                      }
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteStudent(student.id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
    </div>
  );
}
export default StudentTable;