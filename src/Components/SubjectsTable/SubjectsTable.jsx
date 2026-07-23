import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import "./SubjectsTable.css";

function SubjectsTable({ subjects = [], deleteSubject }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(search.toLowerCase()) ||
      subject.code.toLowerCase().includes(search.toLowerCase()) ||
      subject.faculty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Subjects List</h2>

        <div className="search-box">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search Subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Subject</th>
            <th>Code</th>
            <th>Faculty</th>
            <th>Semester</th>
            <th>Credits</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredSubjects.length > 0 ? (
            filteredSubjects.map((subject, index) => (
              <tr key={subject._id}>
                <td>{index + 1}</td>

                <td>{subject.name}</td>

                <td>{subject.code}</td>

                <td>{subject.faculty}</td>

                <td>{subject.semester}</td>

                <td>{subject.credits}</td>

                <td>
                  <div className="action-buttons">

                    <button
                      className="view-btn"
                      onClick={() =>
                        navigate(`/subject/${subject._id}`)
                      }
                    >
                      <FaEye />
                    </button>

                    <button
                      className="edit-btn"
                      onClick={() =>
                        navigate(`/edit-subject/${subject._id}`)
                      }
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Delete this subject?"
                          )
                        ) {
                          deleteSubject(subject._id);
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
              <td colSpan="7" className="empty-table">
                No Subjects Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SubjectsTable;