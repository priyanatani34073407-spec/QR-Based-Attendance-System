import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Layout from "./Components/Layout/Layout";
import ProtectedRouter from "./Components/ProtectedRouter/ProtectedRouter";
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
          <ProtectedRouter>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRouter>
        }
      />

      {/* Students */}
      <Route
        path="/students"
        element={
          <ProtectedRouter>
            <Layout>
              <Students />
            </Layout>
          </ProtectedRouter>
        }
      />

      {/* Student Details */}
      <Route
        path="/student/:id"
        element={
          <ProtectedRouter>
            <Layout>
              <StudentsDetails />
            </Layout>
          </ProtectedRouter>
        }
      />

      {/* Edit Student */}
      <Route
        path="/student/edit/:id"
        element={
          <ProtectedRouter>
            <Layout>
              <EditStudents />
            </Layout>
          </ProtectedRouter>
        }
      />

      {/* Faculty */}
      <Route
        path="/faculty"
        element={
          <ProtectedRouter>
            <Layout>
              <Faculty />
            </Layout>
          </ProtectedRouter>
        }
      />

      {/* Faculty Details */}
      <Route
        path="/faculty/:id"
        element={
          <ProtectedRouter>
            <Layout>
              <FacultyDetails />
            </Layout>
          </ProtectedRouter>
        }
      />

      {/* Subjects */}
      <Route
        path="/subjects"
        element={
          <ProtectedRouter>
            <Layout>
              <Subjects />
            </Layout>
          </ProtectedRouter>
        }
      />

      {/* Subject Details */}
      <Route
        path="/subject/:id"
        element={
          <ProtectedRouter>
            <Layout>
              <SubjectsDetails />
            </Layout>
          </ProtectedRouter>
        }
      />

      {/* Attendance */}
      <Route
        path="/attendance"
        element={
          <ProtectedRouter>
            <Layout>
              <Attendance />
            </Layout>
          </ProtectedRouter>
        }
      />

      {/* Generate QR */}
      <Route
        path="/generate-qr"
        element={
          <ProtectedRouter>
            <Layout>
              <GenerateQR />
            </Layout>
          </ProtectedRouter>
        }
      />

      {/* Reports */}
      <Route
        path="/reports"
        element={
          <ProtectedRouter>
            <Layout>
              <Reports />
            </Layout>
          </ProtectedRouter>
        }
      />

      {/* Settings */}
      <Route
        path="/settings"
        element={
          <ProtectedRouter>
            <Layout>
              <Settings />
            </Layout>
          </ProtectedRouter>
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