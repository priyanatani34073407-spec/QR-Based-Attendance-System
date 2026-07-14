import { useState } from "react";
import "./Settings.css";

function Settings() {

  const [collegeName,setCollegeName]=useState("ABC Engineering College");

  const [academicYear,setAcademicYear]=useState("2026-27");

  return (

    <div className="settings-page">

      <h1>Settings</h1>

      <div className="settings-card">

        <label>College Name</label>

        <input

        type="text"

        value={collegeName}

        onChange={(e)=>setCollegeName(e.target.value)}

        />

        <label>Academic Year</label>

        <input

        type="text"

        value={academicYear}

        onChange={(e)=>setAcademicYear(e.target.value)}

        />

        <button>

          Save Settings

        </button>

      </div>

    </div>

  );

}

export default Settings;