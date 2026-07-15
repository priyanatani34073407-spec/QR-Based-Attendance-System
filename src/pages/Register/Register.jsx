import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [message, setMessage] = useState("");

  function handleRegister() {

    if (
      name === "" ||
      email === "" ||
      password === ""
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(
      (user) => user.email === email
    );

    if (userExists) {
      setMessage("Email already registered.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Registration Successful");

    navigate("/");
  }

  function handleClear() {
    setName("");
    setEmail("");
    setPassword("");
    setMessage("");
  }

  return (
    <div className="register-container">

      <div className="register-card">

        <h1>Create Account</h1>

        <p>Register to continue</p>

        <div className="input-group">

          <FaUser className="input-icon" />

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

        </div>

        <div className="input-group">

          <FaEnvelope className="input-icon" />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

        </div>

        <div className="input-group">

          <FaLock className="input-icon" />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <span
            className="eye"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
          >
            {showPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </span>

        </div>

        <div className="buttons">

          <button onClick={handleRegister}>
            Register
          </button>

          <button
            className="clear"
            onClick={handleClear}
          >
            Clear
          </button>

        </div>

        {message && (
          <p className="message">
            {message}
          </p>
        )}

        <p className="login-link">
          Already have an account?{" "}
          <Link to="/">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;