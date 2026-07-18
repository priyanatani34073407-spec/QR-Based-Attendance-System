import { useState, useEffect } from "react";
import "./Settings.css";

function Settings() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className = theme;

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="settings-page">

      <h1>Settings</h1>

      <div className="theme-box">

        <h2>Select Theme</h2>

        <button
          onClick={() => setTheme("light")}
        >
          ☀️ Light Theme
        </button>

        <button
          onClick={() => setTheme("dark")}
        >
          🌙 Dark Theme
        </button>

      </div>

    </div>
  );
}

export default Settings;