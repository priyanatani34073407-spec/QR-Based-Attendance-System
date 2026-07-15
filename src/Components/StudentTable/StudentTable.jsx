import { useNavigate } from "react-router-dom";
import "./StudentTable.css";

function StudentTable({ students, deleteStudent }) {
  const navigate = useNavigate();

  return (
    <div className="student-table">

      <h2>Students List</h2>

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

          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>

                <td>{student.id}</td>

                <td>{student.name}</td>

                <td>{student.rollNo}</td>

                <td>{student.department}</td>

                <td>{student.email}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate(`/student/edit/${student.id}`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => {
                      const confirmDelete =
                        window.confirm(
                          "Are you sure you want to delete this student?"
                        );

                      if (confirmDelete) {
                        deleteStudent(student.id);
                      }
                    }}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                No Students Found
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}

export default StudentTable;