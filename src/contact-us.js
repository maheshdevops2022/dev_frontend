import React, { useState, useEffect } from "react";
//import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
//import ContactSection from "./components/contact/ContactSection";
//import Footer from "./components/footer";
import "./assets/css/all.css";
import { Helmet } from "react-helmet";

import img1 from "./assets/img/services/contactus.jpg";
import Map from "./components/Contacts/Map";
import OfficeInfor from "./components/Contacts/ContactInfo";

const ContactUs = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {/* <Header /> */}
      {/* <ContactPage /> */}
      {/* Page Header */}
      <section className="page-header">
        <div className="bg-item">
          <div
            className="bg-img"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover", // makes image fill screen
              backgroundPosition: "center", // keeps it centered
              backgroundRepeat: "no-repeat", // prevents tiling
              width: "100%",
              height: "100vh", // full screen height
            }}
          ></div>
        </div>

        <div className="container">
          <div className="page-header-content">
            <h1 className="title text-center">Contact Us</h1>
          </div>
        </div>
      </section>
      <OfficeInfor />
      <Map />
      {/* <Footer /> */}
      {showBtn && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default ContactUs;
