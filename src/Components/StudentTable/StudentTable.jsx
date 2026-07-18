import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import "./StudentTable.css";

function StudentTable({ students, deleteStudent }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter(
    (student) =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.rollNo
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.department
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="table-container">

      <div className="table-header">

        <h2>Students List</h2>

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search Student..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>

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

          {filteredStudents.length > 0 ? (

            filteredStudents.map((student) => (

              <tr key={student.id}>

                <td>{student.id}</td>

                <td>{student.name}</td>

                <td>{student.rollNo}</td>

                <td>

                  <span className="dept-badge">
                    {student.department}
                  </span>

                </td>

                <td>{student.email}</td>

                <td>

                  <div className="action-buttons">

                    <button
                      className="view-btn"
                      onClick={() =>
                        navigate(`/student/${student.id}`)
                      }
                    >
                      <FaEye />
                    </button>

                    <button
                      className="edit-btn"
                      onClick={() =>
                        navigate(`/student/edit/${student.id}`)
                      }
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Delete this student?"
                          )
                        ) {
                          deleteStudent(student.id);
                        }
                      }}
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="6"
                className="empty-table"
              >
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