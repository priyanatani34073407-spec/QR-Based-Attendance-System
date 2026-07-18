import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="layout-container">
        <Sidebar />

        <main className="main-content">
          {children}
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Layout;