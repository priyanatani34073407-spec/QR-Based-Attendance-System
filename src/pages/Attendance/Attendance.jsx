import "./Attendance.css";

import AttendanceCard from "../../components/AttendanceCard/AttendanceCard";
import AttendanceTable from "../../components/AttendanceTable/AttendanceTable";

function Attendance() {

  const attendance = [

    {
      id: 1,
      student: "Rahul Kumar",
      subject: "React JS",
      date: "13-07-2026",
      status: "Present",
    },

    {
      id: 2,
      student: "Priya Sharma",
      subject: "Python",
      date: "13-07-2026",
      status: "Present",
    },

    {
      id: 3,
      student: "Arun Kumar",
      subject: "DBMS",
      date: "13-07-2026",
      status: "Absent",
    },

  ];

  return (

    <div className="attendance-page">

      <AttendanceCard attendance={attendance} />

      <AttendanceTable attendance={attendance} />

    </div>

  );

}

export default Attendance;