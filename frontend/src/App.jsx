import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Certificate from './pages/requestCertificates/Certificate';
import CertificateDetails from './pages/requestCertificates/CertificateDetails';
import AdminProfile from './pages/Admin/AdminProfile';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AddNewAdmin from './pages/Admin/AddNewAdmin';
import StudentDetails from './pages/Admin/StudentDetails';
import CertificationDetails from './pages/Admin/CertificationDetails';
// import Navbar from './components/Navbar';
CertificationDetails
function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/details/:id" element={<CertificateDetails />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/add-admin" element={<AddNewAdmin />} />
          <Route path="/studenet-details" element={<StudentDetails />} />
          <Route
            path="/admin/certification"
            element={<CertificationDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
