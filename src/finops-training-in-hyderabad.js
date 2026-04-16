import React, { useState, useEffect } from "react";
// import Header from "./components/header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContactSection from "./components/contact/ContactSection";
// import Footer from "./components/footer";
import "./assets/css/all.css";
import { Helmet } from "react-helmet";

import bgImage from "./assets/img/bg-image2.jpeg";
import img1 from "./assets/img/services/power-bi1.webp";
import finops2 from "./assets/img/services/finops2.jpg";
import finops3 from "./assets/img/services/power-bi3.jpg";

import icon23 from "./assets/img/icons/icon23.png";
import icon24 from "./assets/img/icons/icon24.png";
import icon25 from "./assets/img/icons/icon25.png";
import icon26 from "./assets/img/icons/icon26.png";
import icon27 from "./assets/img/icons/icon27.png";
import Document from "./components/Document";
import FinopsPage from "./components/seo/finops/FinopsPage";
const FinOps = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);
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
      <FinopsPage/>
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
            <h1 className="title text-center">FinOps training in Hyderabad</h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section-3 padding-top-bottom">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* Image Column */}
            <div className="col-12 col-md-6 col-sm-6">
              <div className="about-img-wrap-3 text-center">
                <div className="about-img">
                  <img
                    className="main-img img-fluid"
                    src={finops2}
                    alt="about"
                  />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="col-12 col-md-6 col-sm-6">
              <div className="about-content-3 text-center text-md-start px-2 px-md-0">
                <div className="section-heading mb-3 mb-md-4">
                  <h2 className="section-title">
                    FinOps Training in Hyderabad – Cloud Financial Operations
                    Course
                  </h2>
                </div>

                <p className="mb-3 mb-md-4">
                  Master FinOps & Cloud Cost Optimization. FinOps (Cloud
                  Financial Operations) is one of the fastest-growing skills in
                  cloud computing. Companies using AWS, Azure, and Google Cloud
                  require professionals who can manage and optimize cloud costs
                  effectively...
                </p>

                <div className="about-btn">
                  <a
                    href="contact-us.php"
                    className="ed-primary-btn w-100 w-md-auto"
                  >
                    Book Admission Now
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FinOps Course Highlights */}
      <section className="about-section padding-top-bottom">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* Content */}
            <div className="col-12 col-md-6 col-sm-6">
              <div className="about-content-18 text-center text-md-start">
                <div className="section-heading mb-20">
                  <h2
                    className="section-title wow fade-in-bottom"
                    data-wow-delay="400ms"
                  >
                    FinOps Course Highlights
                  </h2>
                </div>

                <p>
                  Power BI is one of the most widely used business intelligence
                  tools in the world, trusted by companies of all sizes. By
                  mastering Power BI, you can:
                </p>

                <ul className="about-list text-start">
                  <li>
                    <span className="finopscourse">&#10003;</span> Cloud Cost
                    Management
                  </li>
                  <li>
                    <span className="finopscourse">&#10003;</span> AWS Cost
                    Optimization
                  </li>
                  <li>
                    <span className="finopscourse">&#10003;</span> Azure Cost
                    Management
                  </li>
                  <li>
                    <span className="finopscourse">&#10003;</span> FinOps
                    Framework & Best Practices
                  </li>
                  <li>
                    <span className="finopscourse">&#10003;</span> Budgeting &
                    Forecasting
                  </li>
                  <li>
                    <span className="finopscourse">&#10003;</span> Real-Time
                    FinOps Projects
                  </li>
                  <li>
                    <span className="finopscourse">&#10003;</span> Industry Use
                    Cases
                  </li>
                  <li>
                    <span className="finopscourse">&#10003;</span> Hands-on
                    Practical Training
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="col-12 col-md-6 col-sm-6">
              <div className="about-img-wrap-18 text-center">
                <div className="about-img-2">
                  <img src={finops3} alt="about" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tools Covered in FinOps Training */}
      <section className="about-section padding-top-bottom">
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="about-content-18">
                <div className="section-heading mb-20">
                  <h2
                    className="section-title wow fade-in-bottom"
                    data-wow-delay="400ms"
                    style={{ fontSize: 38 }}
                  >
                    Tools Covered in FinOps Training
                  </h2>
                </div>
                <ul className="about-list">
                  <li style={{ marginTop: "50px" }}>
                    <span>01</span> AWS Cost Explorer
                  </li>
                  <li>
                    <span>02</span> AWS Budgets
                  </li>
                  <li>
                    <span>03</span> Azure Cost Management
                  </li>
                  <li>
                    <span>04</span> Cloud Billing Tools
                  </li>
                  <li>
                    <span>05</span> Cost Optimization Techniques
                  </li>
                  <li>
                    <span>06</span> FinOps Reporting & Analytics
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-6 col-md-6">
              <div className="about-content-18">
                <div className="section-heading mb-20">
                  <h2
                    className="section-title wow fade-in-bottom"
                    data-wow-delay="400ms"
                  >
                    Who Should Learn FinOps?
                  </h2>
                </div>

                <p>This course is best suited for:</p>

                <ul className="about-list">
                  <li>
                    <span>01</span> DevOps Engineers
                  </li>
                  <li>
                    <span>02</span> Cloud Engineers
                  </li>
                  <li>
                    <span>03</span> AWS / Azure Professionals
                  </li>
                  <li>
                    <span>04</span> IT Professionals
                  </li>
                  <li>
                    <span>05</span> Data Analysts
                  </li>
                  <li>
                    <span>06</span> Freshers who want to build a career in cloud
                    finance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DevOps */}
      <section className="about-section padding-top-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-6">
              <div className="about-content-18">
                <div className="section-heading mb-20">
                  <h2
                    className="section-title wow fade-in-bottom"
                    data-wow-delay="400ms"
                  >
                    Why Choose RR Technosoft for FinOps Training?
                  </h2>
                </div>

                <p>
                  Power BI is one of the most widely used business intelligence
                  tools in the world, trusted by companies of all sizes. By
                  mastering Power BI, you can:
                </p>

                <ul className="about-list">
                  {[
                    "Experienced Industry Trainers",
                    "Real-Time Cloud Projects",
                    "Practical Hands-On Sessions",
                    "Interview Preparation",
                    "Resume Building Support",
                    "100% Placement Assistance",
                    "Online & Offline Classes",
                  ].map((item, index) => (
                    <li key={index}>
                      <span style={{ fontSize: "24px" }}>✔</span> {item}
                    </li>
                  ))}

                  <li>
                    <span style={{ fontSize: "24px" }}>📅</span> Free Demo Class
                    Available
                  </li>
                  <li>
                    <span style={{ fontSize: "24px" }}>⏰</span> Morning &
                    Evening Batches
                  </li>
                  <li>
                    <span style={{ fontSize: "24px" }}>📍</span> Location: KPHB,
                    Hyderabad
                  </li>
                  <li>
                    <span style={{ fontSize: "24px" }}>📞</span> Call /
                    WhatsApp: 7680001943
                  </li>
                </ul>
              </div>
            </div>

            {/* demo */}
            <div className="col-lg-3 col-md-3">
              <div className="about-content-18">
                <div className="section-heading mb-20">
                  <div style={{ textAlign: "center", marginTop: "30px" }}>
                    <button className="demo-btn" onClick={openPopup}>
                      syllabus download
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {showPopup && (
              <div className="popup-overlay" onClick={closePopup}>
                <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                  <h3>Syllabus download</h3>

                  {/* ✅ FORM INSIDE POPUP */}
                  <Document />

                  <button className="close-btn" onClick={closePopup}>
                    ✖
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactSection />
      {/* Training Highlights */}
      <section className="feature-section-20 about-feature padding-top-bottom">
        <div className="container">
          <div className="section-heading text-center">
            <h2
              className="section-title wow fade-in-bottom"
              data-wow-delay="400ms"
            >
              Training Highlights
            </h2>
          </div>
          <div className="row gy-lg-0 gy-4">
            <div className="col-lg-4 col-md-6 mb-3">
              <div
                className="feature-item-20 wow fade-in-bottom"
                data-wow-delay="400ms"
              >
                <div className="feature-inner">
                  <div className="icon">
                    <img src={icon23} alt="icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">100% Practical</h3>
                  </div>
                </div>
                <p>Learn by creating real business dashboards.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div
                className="feature-item-20 wow fade-in-bottom"
                data-wow-delay="500ms"
              >
                <div className="feature-inner">
                  <div className="icon">
                    <img src={icon24} alt="icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">Expert Trainers</h3>
                  </div>
                </div>
                <p>Learn from professionals with real-world BI experience.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fade-in-bottom mb-3"
              data-wow-delay="600ms"
            >
              <div className="feature-item-20">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={icon25} alt="icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">Job-Oriented Curriculum</h3>
                  </div>
                </div>
                <p>Aligned with current industry requirements.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fade-in-bottom mb-3"
              data-wow-delay="600ms"
            >
              <div className="feature-item-20">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={icon26} alt="icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">Flexible Learning Options</h3>
                  </div>
                </div>
                <p>Classroom & online training available.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fade-in-bottom mb-3"
              data-wow-delay="600ms"
            >
              <div className="feature-item-20">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={icon27} alt="icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">Placement Assistance</h3>
                  </div>
                </div>
                <p>Resume preparation, mock interviews, and job referrals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build  */}
      <section
        className="cta-section-3 padding-top-bottom"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="cta-content cta-content-3 text-center">
            <div className="section-heading text-center white-content mb-20">
              <h2
                className="section-title mt-10 wow fade-in-bottom"
                data-wow-delay="400ms"
              >
                {" "}
                Build Your Career as a FinOps Today!{" "}
              </h2>
            </div>
            <p className="wow fade-in-bottom" data-wow-delay="500ms">
              {" "}
              Call us now or visit our training center to enroll in our next
              FinOps batch and <br /> take the first step toward a rewarding
              career in tech.{" "}
            </p>
            <div
              className="cta-btn-wrap wow fade-in-bottom"
              data-wow-delay="600ms"
            >
              <a href="contact-us.php" className="ed-primary-btn cta-btn-2">
                Book Admission Now <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Who Can Join? */}
      <section className="course-category padding-top-bottom">
        <div className="container">
          <div className="section-heading text-center">
            <h2
              className="section-title wow fade-in-bottom"
              data-wow-delay="400ms"
            >
              Who Can Join?
            </h2>
          </div>
          <div
            className="category-items wow fade-in-bottom"
            data-wow-delay="500ms"
          >
            <div className="category-item">
              <a href="#"> Software Developers </a>
            </div>
            <div className="category-item">
              <a href="#"> System Administrators </a>
            </div>
            <div className="category-item">
              <a href="#"> Cloud Professionals </a>
            </div>
            <div className="category-item">
              <a href="#"> IT Students & Fresh Graduates </a>
            </div>
            <div className="category-item">
              <a href="#"> Anyone aspiring to build a career in DevOps </a>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
      {showBtn && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
      {/* {showPopup && (
  <div className="popup">
    <div className="popup-content">
      <h3>Course Syllabus</h3>
      <button onClick={closePopup}>Close</button>
    </div>
  </div>
)} */}
    </>
  );
};

export default FinOps;
