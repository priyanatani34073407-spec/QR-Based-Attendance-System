import "./Dashboard.css";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardCheck,
  FaQrcode,
  FaChartLine,
} from "react-icons/fa";
function Dashboard() {
  const dashboardCards = [
    {
      id: 1,
      title: "Students",
      value: 120,
      icon: <FaUserGraduate />,
    },
    {
      id: 2,
      title: "Faculty",
      value: 15,
      icon: <FaChalkboardTeacher />,
    },
    {
      id: 3,
      title: "Subjects",
      value: 8,
      icon: <FaBook />,
    },
    {
      id: 4,
      title: "Today's Attendance",
      value: 96,
      icon: <FaClipboardCheck />,
    },
    {
      id: 5,
      title: "QR Generated",
      value: 4,
      icon: <FaQrcode />,
    },
    {
      id: 6,
      title: "Attendance %",
      value: "80%",
      icon: <FaChartLine />,
    },
  ];
  const attendance = [
    {
      id: 1,
      student: "Rahul",
      subject: "React",
      status: "Present",
    },
    {
      id: 2,
      student: "Priya",
      subject: "Java",
      status: "Present",
    },
    {
      id: 3,
      student: "Anjali",
      subject: "Python",
      status: "Absent",
    },
  ];
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p className="welcome">
        Welcome back, Admin 👋
      </p>
      <div className="card-container">
        {dashboardCards.map((card) => (
          <div
            className="card"
            key={card.id}
          >
            <div className="card-icon">
              {card.icon}
            </div>
            <h2>{card.value}</h2>
            <p>{card.title}</p>
          </div>
        ))}
      </div>
      <div className="dashboard-table">
        <h2>Today's Attendance</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student</th>
              <th>Subject</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.student}</td>
                <td>{student.subject}</td>
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
            ))}
          </tbody>
        </table>
      </div>
      <div className="activity">
        <h2>Recent QR Activity</h2>
        <ul>
          <li>React - QR Generated - 09:30 AM</li>
          <li>Python - QR Generated - 10:15 AM</li>
          <li>Java - QR Generated - 11:20 AM</li>
        </ul>
      </div>
    </div>
  );
}
export default Dashboard;