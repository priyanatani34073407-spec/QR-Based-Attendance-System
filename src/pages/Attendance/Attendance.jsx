import "./Attendance.css";
import { useState, useEffect } from "react";
import AttendanceCard from "../../components/AttendanceCard/AttendanceCard";
import AttendanceTable from "../../components/AttendanceTable/AttendanceTable";
function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setAttendance([
      {
        id:1,
        name:"Rahul",
        subject:"React JS",
        date:"14-07-2026",
        status:"Present",
      },

      {
        id:2,
        name:"Priya",
        subject:"Python",
        date:"14-07-2026",
        status:"Absent",
      },

      {
        id:3,
        name:"Arjun",
        subject:"DBMS",
        date:"14-07-2026",
        status:"Present",
      },
    ]);
  }, []);
  const filteredAttendance = attendance.filter((student)=>
    student.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="attendance-page">
      <h1>Attendance Management</h1>
      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <AttendanceCard attendance={filteredAttendance}/>
      <AttendanceTable attendance={filteredAttendance}/>
    </div>
  );
}
export default Attendance;