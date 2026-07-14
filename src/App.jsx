import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout/Layout";

// Pages
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Students from "./pages/Students/Students";
import Faculty from "./pages/Faculty/Faculty";
import Subjects from "./pages/Subjects/Subjects";
import Attendance from "./pages/Attendance/Attendance";
import GenerateQR from "./pages/GenerateQR/GenerateQR";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";

// Details Pages
import StudentsDetails from "./pages/StudentsDetails/StudentsDetails";
import FacultyDetails from "./pages/FacultyDetails/FacultyDetails";
import SubjectsDetails from "./pages/SubjectsDetails/SubjectsDetails";

// 404 Page
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>

      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      {/* Students */}
      <Route
        path="/students"
        element={
          <Layout>
            <Students />
          </Layout>
        }
      />

      {/* Faculty */}
      <Route
        path="/faculty"
        element={
          <Layout>
            <Faculty />
          </Layout>
        }
      />

      {/* Subjects */}
      <Route
        path="/subjects"
        element={
          <Layout>
            <Subjects />
          </Layout>
        }
      />

      {/* Attendance */}
      <Route
        path="/attendance"
        element={
          <Layout>
            <Attendance />
          </Layout>
        }
      />

      {/* Generate QR */}
      <Route
        path="/generate-qr"
        element={
          <Layout>
            <GenerateQR />
          </Layout>
        }
      />

      {/* Reports */}
      <Route
        path="/reports"
        element={
          <Layout>
            <Reports />
          </Layout>
        }
      />

      {/* Settings */}
      <Route
        path="/settings"
        element={
          <Layout>
            <Settings />
          </Layout>
        }
      />

      {/* Dynamic Routes */}
      <Route
        path="/student/:id"
        element={
          <Layout>
            <StudentsDetails />
          </Layout>
        }
      />

      <Route
        path="/faculty/:id"
        element={
          <Layout>
            <FacultyDetails />
          </Layout>
        }
      />

      <Route
        path="/subject/:id"
        element={
          <Layout>
            <SubjectsDetails />
          </Layout>
        }
      />

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;