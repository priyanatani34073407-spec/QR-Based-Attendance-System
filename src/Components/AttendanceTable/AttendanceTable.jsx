import "./AttendanceTable.css";
function AttendanceTable({ attendance }) {
  return (
    <div className="attendance-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            attendance.map((student)=>(
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.subject}</td>
                <td>{student.date}</td>
                <td>
                  <span
                    className={
                      student.status==="Present"
                      ? "present"
                      : "absent"
                    }
                  >
                    {student.status}
                  </span>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
export default AttendanceTable;