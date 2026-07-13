import { useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import "./Login.css";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleLogin() {
    if (email === "" || password === "") {
      alert("Please fill all fields.");
      return;
    }
    if (!emailPattern.test(email)) {
      alert("Enter a valid Email.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      if (
        email === "admin@gmail.com" &&
        password === "Admin@123"
      ) {
        setIsLoggedIn(true);
      } else {
        alert("Invalid Login Credentials");
      }
      setLoading(false);
    }, 2000);
  }
  function handleLogout() {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setRole("Student");
  }
  return (
    <>
      {
        isLoggedIn ?
          <>
            <div className="top-bar">
              <h2>
                QR Attendance Management System
              </h2>
              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
            <Dashboard />
          </>
          :
          <div className="login-container">
            <div className="login-box">
              <h1>QR-Based-Attendance-System</h1>
              <p>
                Sign in to continue
              </p>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter College Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="show-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="role-section">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="Student"
                    checked={role === "Student"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Student
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="Faculty"
                    checked={role === "Faculty"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Faculty
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="Admin"
                    checked={role === "Admin"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Admin
                </label>
              </div>
              <button
                className="login-btn"
                onClick={handleLogin}
                disabled={loading}
              >
                {
                  loading ?
                    "Logging In..."
                    :
                    "Login"
                }
              </button>
            </div>
          </div>
      }
    </>
  );
}
export default Login;