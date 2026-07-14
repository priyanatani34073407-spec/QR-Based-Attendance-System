import "./AttendanceTable.css";

function AttendanceTable({ attendance }) {

  return (

    <div className="attendance-table">

      <h2>Attendance Records</h2>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Student</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {

            attendance.map((record)=>(

              <tr key={record.id}>

                <td>{record.id}</td>

                <td>{record.student}</td>

                <td>{record.subject}</td>

                <td>{record.date}</td>

                <td>

                  <span
                    className={
                      record.status === "Present"
                        ? "present"
                        : "absent"
                    }
                  >
                    {record.status}
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