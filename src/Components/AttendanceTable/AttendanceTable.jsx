import "./AttendanceTable.css";

function AttendanceTable({ attendance = [] }) {
  return (
    <div className="attendance-table">
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Student Name</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {attendance.length > 0 ? (
            attendance.map((student, index) => (
              <tr key={student._id}>
                <td>{index + 1}</td>

                <td>{student.name}</td>

                <td>{student.subject}</td>

                <td>
                  {new Date(student.date).toLocaleDateString()}
                </td>

                <td>
                  <span
                    className={
                      student.status === "Present"
                        ? "present"
                        : "absent"
                    }
                  >
                    {student.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="empty-table">
                No Attendance Records Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceTable;