import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import "./StudentTable.css";

function StudentTable({ students = [], deleteStudent }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(search.toLowerCase()) ||
      student.department.toLowerCase().includes(search.toLowerCase())
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
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student._id}>
                <td>{student.rollNo}</td>

                <td>{student.name}</td>

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
                        navigate(`/student/${student._id}`)
                      }
                    >
                      <FaEye />
                    </button>

                    <button
                      className="edit-btn"
                      onClick={() =>
                        navigate(`/student/edit/${student._id}`)
                      }
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteStudent(student._id)}
                      >
                        <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="empty-table">
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