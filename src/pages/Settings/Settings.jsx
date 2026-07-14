import "./Settings.css";
import { useState } from "react";
function Settings() {
  const [profile, setProfile] = useState({
    admin: "Admin",
    email: "admin@gmail.com",
    college: "Chalapathi Institute of Technology",
  });
  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  }
  function saveSettings() {
    localStorage.setItem(
      "adminProfile",
      JSON.stringify(profile)
    );
    alert("Settings Saved Successfully");
  }
  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <div className="settings-form">
        <label>Administrator Name</label>
        <input
          type="text"
          name="admin"
          value={profile.admin}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
        />

        <label>College</label>
        <input
          type="text"
          name="college"
          value={profile.college}
          onChange={handleChange}
        />

        <button onClick={saveSettings}>
          Save Settings
        </button>
      </div>
    </div>
  );
}
export default Settings;