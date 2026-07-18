import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import "./FacultyTable.css";

function FacultyTable({ faculty }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const filteredFaculty = faculty.filter(
    (teacher) =>
      teacher.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      teacher.department
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      teacher.subject
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Faculty List</h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search Faculty..."
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
            <th>Department</th>
            <th>Subject</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredFaculty.length > 0 ? (
            filteredFaculty.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.name}</td>
                <td>
                  <span className="dept-badge">
                    {teacher.department}
                  </span>
                </td>
                <td>
                  <span className="subject-badge">
                    {teacher.subject}
                  </span>
                </td>
                <td>{teacher.email}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="view-btn"
                      onClick={() =>
                        navigate(`/faculty/${teacher.id}`)
                      }
                    >
                      <FaEye />
                    </button>

                    <button className="edit-btn">
                      <FaEdit />
                    </button>

                    <button className="delete-btn">
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
                No Faculty Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default FacultyTable;