import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home";
import Aboutus from "./about-us";
import ContactUs from "./contact-us";
import Header from "./components/header";
import Footer from "./components/footer";
import WhatsappSms from "./devops-training-in-hyderabad";
import WhatsappApi from "./data-science-course-in-hyderabad";
import PrivacyPolicy from "./privacy-policy";
import Login from "./Login";
import SignUp from "./signup";

function AppContent() {
  const location = useLocation();

  // Footer vaddu pages
  const noRoutesFooter = ["/login", "/signup"];

  const showFooter = !noRoutesFooter.includes(location.pathname);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/whatsappsms" element={<WhatsappSms />} />
                <Route path="/whatsappapi" element={<WhatsappApi />} />


        {/* <Route path="/devops-training-in-hyderabad" element={<WhatsappSms />} /> */}
        {/* <Route path="/data-science-course-in-hyderabad" element={<WhatsappApi />} /> */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* ✅ condition */}
      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
