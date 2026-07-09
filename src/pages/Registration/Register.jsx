import { useState } from "react";
import "./Register.css";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");
  const [semester, setSemester] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if(
      fullName === "" ||
      email === "" ||
      mobile === "" ||
      password === "" ||
      confirmPassword === "" ||
      rollNumber === ""
    ){
      setError("Please fill all required fields");
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
      setError("Enter valid email address");
      return;
    }

    const mobilePattern = /^[0-9]{10}$/;
    if(!mobilePattern.test(mobile)){
      setError("Mobile number must contain 10 digits");
      return;
    }

    if(password.length < 8){
      setError("Password must contain minimum 8 characters");
      return;
    }

    if(password !== confirmPassword){
      setError("Password does not match");
      return;
    }

    if(!terms){
      setError("Please accept Terms and Conditions");
      return;
    }

    setSuccess("Registration Successful");
    console.log({
      fullName,
      email,
      mobile,
      rollNumber,
      college,
      branch,
      year,
      section,
      semester,
      academicYear
    });

    resetForm();
  }

  function resetForm(){
    setFullName("");
    setEmail("");
    setMobile("");
    setPassword("");
    setConfirmPassword("");
    setGender("");
    setDob("");
    setRollNumber("");
    setCollege("");
    setBranch("");
    setYear("");
    setSection("");
    setSemester("");
    setAcademicYear("");
    setTerms(false);
  }
  return (
    <div className="register-container">
      <div className="register-box">
        <h1>
          Student Registration
        </h1>
        {
          error &&
          <p className="error">
            {error}
          </p>
        }

        {
          success &&
          <p className="success">
            {success}
          </p>
        }

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />

          <select
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
          >

            <option value="">
              Select Gender
            </option>
            <option>
              Male
            </option>

            <option>
              Female
            </option>

            <option>
              Other
            </option>
          </select>

          <input
            type="date"
            value={dob}
            onChange={(e)=>setDob(e.target.value)}
          />

          <input
            type="text"
            placeholder="Roll Number"
            value={rollNumber}
            onChange={(e)=>setRollNumber(e.target.value)}
          />

          <input
            type="text"
            placeholder="College Name"
            value={college}
            onChange={(e)=>setCollege(e.target.value)}
          />

          <select
            value={branch}
            onChange={(e)=>setBranch(e.target.value)}
          >
            <option value="">
              Select Branch
            </option>
            <option>
              CSE
            </option>

            <option>
              CSE-ARTIFICAL INTELI
            </option>

            <option>
              CSE-DATA SCIENCE
            </option>

            <option>
              CSE-CYBER SECURITY
            </option>

            <option>
              CSE-ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
            </option>

            <option>
              ECE
            </option>

          </select>

          <select
            value={year}
            onChange={(e)=>setYear(e.target.value)}
          >

            <option value="">
              Select Year
            </option>

            <option>
              1st Year
            </option>

            <option>
              2nd Year
            </option>

            <option>
              3rd Year
            </option>

            <option>
              4th Year
            </option>

          </select>

          <input
            type="text"
            placeholder="Section"
            value={section}
            onChange={(e)=>setSection(e.target.value)}
          />

          <input
            type="text"
            placeholder="Semester"
            value={semester}
            onChange={(e)=>setSemester(e.target.value)}
          />

          <input
            type="text"
            placeholder="Academic Year"
            value={academicYear}
            onChange={(e)=>setAcademicYear(e.target.value)}
          />

          <label>
            Profile Photo
          </label>

          <input
            type="file"
            accept="image/*"
          />


          <label>
            <input
              type="checkbox"
              checked={terms}
              onChange={(e)=>setTerms(e.target.checked)}
            />
            Accept Terms & Conditions
          </label>
          <div className="buttons">
            <button type="submit">
              Register
            </button>

            <button
              type="button"
              onClick={resetForm}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;