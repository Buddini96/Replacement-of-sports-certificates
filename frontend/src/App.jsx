import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Certificate from './pages/requestCertificates/Certificate';
import CertificateDetails from './pages/requestCertificates/CertificateDetails';
// import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/details/:id" element={<CertificateDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
