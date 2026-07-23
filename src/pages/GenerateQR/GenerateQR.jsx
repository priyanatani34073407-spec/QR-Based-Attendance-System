import { useState, useEffect } from "react";
import "./GenerateQR.css";
import { FaQrcode } from "react-icons/fa";
import api from "../../api/api";

function GenerateQR() {
  const [subjects, setSubjects] = useState([]);
  const [subject, setSubject] = useState("");
  const [attendanceCode, setAttendanceCode] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSubjects();
  }, []);

  async function fetchSubjects() {
    try {
      const response = await api.get("/subjects");
      setSubjects(response.data.subjects);
    } catch (error) {
      console.error(error);
      alert("Unable to load subjects.");
    }
  }

  async function generateQR() {
    if (!subject) {
      alert("Please select a subject.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/generate-qr", {
        subject,
      });

      setAttendanceCode(response.data.attendanceCode);
    } catch (error) {
      console.error(error);
      alert("Unable to generate QR.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="generateQR">
      <h1>Generate Attendance QR</h1>

      <div className="qr-card">
        <label>Select Subject</label>

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Choose Subject</option>

          {subjects.map((sub) => (
            <option key={sub._id} value={sub.name}>
              {sub.name}
            </option>
          ))}
        </select>

        <button onClick={generateQR} disabled={loading}>
          <FaQrcode />
          {loading ? "Generating..." : "Generate QR"}
        </button>

        {attendanceCode && (
          <div className="qr-box">
            <div className="fakeQR">
              QR CODE
            </div>

            <h2>Attendance Code</h2>

            <h1>{attendanceCode}</h1>

            <p>
              Students can scan the QR or use this code to mark attendance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GenerateQR;