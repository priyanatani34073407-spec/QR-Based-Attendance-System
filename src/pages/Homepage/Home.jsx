import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Homepage.css";

function Home() {
  return (
    <div>
      <Navbar />
      <section className="home">
        <h1>Welcome to QR-Based Attendance System</h1>
        <p>
          A simple MERN stack application to manage student attendance using QR
          codes.
        </p>

        <div className="buttons">
          <button>Student Login</button>
          <button>Faculty Login</button>
        </div>

        <div className="features">
          <div className="card">
            <h3>QR Attendance</h3>
            <p>Students can mark attendance using QR codes.</p>
          </div>

          <div className="card">
            <h3>Attendance Tracking</h3>
            <p>View and manage attendance records easily.</p>
          </div>

          <div className="card">
            <h3>Reports</h3>
            <p>Faculty can monitor attendance details.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;