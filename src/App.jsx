import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Layout from "./Components/Layout/Layout";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

// Authentication Pages
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// Main Pages
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
import EditStudents from "./pages/EditStudents/EditStudents";

// 404 Page
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>

      {/* Login */}
      <Route
        path="/"
        element={<Login />}
      />

      {/* Register */}
      <Route
        path="/register"
        element={<Register />}
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Students */}
      <Route
        path="/students"
        element={
          <ProtectedRoute>
            <Layout>
              <Students />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Student Details */}
      <Route
        path="/student/:id"
        element={
          <ProtectedRoute>
            <Layout>
              <StudentsDetails />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Edit Student */}
      <Route
        path="/student/edit/:id"
        element={
          <ProtectedRoute>
            <Layout>
              <EditStudents />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Faculty */}
      <Route
        path="/faculty"
        element={
          <ProtectedRoute>
            <Layout>
              <Faculty />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Faculty Details */}
      <Route
        path="/faculty/:id"
        element={
          <ProtectedRoute>
            <Layout>
              <FacultyDetails />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Subjects */}
      <Route
        path="/subjects"
        element={
          <ProtectedRoute>
            <Layout>
              <Subjects />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Subject Details */}
      <Route
        path="/subject/:id"
        element={
          <ProtectedRoute>
            <Layout>
              <SubjectsDetails />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Attendance */}
      <Route
        path="/attendance"
        element={
          <ProtectedRoute>
            <Layout>
              <Attendance />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Generate QR */}
      <Route
        path="/generate-qr"
        element={
          <ProtectedRoute>
            <Layout>
              <GenerateQR />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Reports */}
      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Layout>
              <Reports />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Settings */}
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Layout>
              <Settings />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default App;