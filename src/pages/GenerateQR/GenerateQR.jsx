import { useState } from "react";
import "./GenerateQR.css";
import { FaQrcode } from "react-icons/fa";

function GenerateQR() {

  const [subject, setSubject] = useState("");
  const [attendanceCode, setAttendanceCode] = useState("");

  function generateQR() {

    if(subject===""){
      alert("Please select subject");
      return;
    }

    const code = Math.floor(
      100000 + Math.random() * 900000
    );

    setAttendanceCode(code);

  }

  return (

    <div className="generateQR">

      <h1>Generate Attendance QR</h1>

      <div className="qr-card">

        <label>Select Subject</label>

        <select
          value={subject}
          onChange={(e)=>setSubject(e.target.value)}
        >

          <option value="">Choose Subject</option>

          <option>React JS</option>

          <option>Python</option>

          <option>DBMS</option>

          <option>Java</option>

        </select>

        <button onClick={generateQR}>

          <FaQrcode />

          Generate QR

        </button>

        {

          attendanceCode &&

          <div className="qr-box">

            <div className="fakeQR">

              QR CODE

            </div>

            <h2>Attendance Code</h2>

            <h1>{attendanceCode}</h1>

            <p>
              Students can enter this code to mark attendance.
            </p>

          </div>

        }

      </div>

    </div>

  );

}

export default GenerateQR;