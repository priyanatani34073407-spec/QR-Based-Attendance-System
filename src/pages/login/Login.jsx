import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaQrcode,
} from "react-icons/fa";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      const lastPage =
        sessionStorage.getItem("lastPage") ||
        "/dashboard";

      navigate(lastPage);
    }
  }, [navigate]);

  function handleLogin() {
    if (email.trim() === "" || password.trim() === "") {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const users =
        JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (user) =>
          user.email === email &&
          user.password === password
      );

      if (user) {
        localStorage.setItem("isLoggedIn", "true");

        localStorage.setItem(
          "currentUser",
          JSON.stringify(user)
        );

        const lastPage =
          sessionStorage.getItem("lastPage") ||
          "/dashboard";

        navigate(lastPage);
      } else {
        setMessage("Invalid Email or Password");
      }

      setLoading(false);
    }, 1500);
  }

  function handleClear() {
    setEmail("");
    setPassword("");
    setMessage("");
  }

  return (
    <div className="login-container">

      {/* Background Animation */}
      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>
      <div className="bg-circle circle3"></div>

      {/* Left Section */}
      <div className="login-left">

        <div className="logo-wrapper">
          <FaQrcode className="login-logo" />
        </div>

        <h1>QR Attendance System</h1>

        <p>
          Smart Attendance Management
          <br />
          for Modern Classrooms
        </p>

      </div>

      {/* Right Section */}
      <div className="login-right">

        <div className="login-card">

          <h2>Welcome Back 👋</h2>

          <p className="subtitle">
            Sign in to access your dashboard
          </p>

          {/* Email */}
          <div className="input-group">

            <FaUser className="input-icon" />

            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

          {/* Password */}
          <div className="input-group">

            <FaLock className="input-icon" />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <span
              className="eye"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>

          </div>

          {/* Buttons */}
          <div className="buttons">

            <button
              onClick={handleLogin}
              disabled={loading}
            >
              {loading
                ? "Logging In..."
                : "Login"}
            </button>

            <button
              className="clear"
              onClick={handleClear}
            >
              Clear
            </button>

          </div>

          {/* Error */}
          {message && (
            <p className="message">
              {message}
            </p>
          )}

          {/* Demo */}
          <div className="demo">

            <strong>
              Registered User Login
            </strong>

            <p>
              Use your registered email and
              password to continue.
            </p>

          </div>

          {/* Register */}
          <p className="register-link">

            Don't have an account?

            <Link to="/register">
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;