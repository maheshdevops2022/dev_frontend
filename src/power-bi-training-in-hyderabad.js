import React, { useState, useEffect } from "react";
// import Header from "./components/header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContactSection from "./components/contact/ContactSection";
// import Footer from "./components/footer";
import "./assets/css/all.css";
import { Helmet } from "react-helmet";

import bgImage from "./assets/img/bg-image2.jpeg";
import img1 from "./assets/img/services/power-bi1.webp";
import powerbi2 from "./assets/img/services/power-bi2.webp"
import powerbi3 from "./assets/img/services/power-bi3.jpg"

import icon16 from "./assets/img/icons/icon16.png"
import icon31 from "./assets/img/icons/icon31.png"
import icon38 from "./assets/img/icons/icon38.png"
import icon20 from "./assets/img/icons/icon20.png"
import icon13 from "./assets/img/icons/icon13.png"
import icon23 from "./assets/img/icons/icon23.png"
import icon24 from "./assets/img/icons/icon24.png"
import icon25 from "./assets/img/icons/icon25.png"
import icon26 from "./assets/img/icons/icon26.png"
import icon27 from "./assets/img/icons/icon27.png"
import PowerbiPage from "./components/seo/powerbi/PowerbiPage";

const PowerBI = () => {
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
      <PowerbiPage/>
      {/* Page Header */}
      <section className="page-header">
        <div className="bg-item">
          <div
                                className="bg-img"
                                  style={{
                                    backgroundImage: `url(${img1})`,
                                    backgroundSize: "cover",       // makes image fill screen
                                    backgroundPosition: "center",  // keeps it centered
                                    backgroundRepeat: "no-repeat", // prevents tiling
                                    width: "100%",
                                    height: "100vh"                // full screen height
                                }}
                              ></div>
        </div>

        <div className="container">
          <div className="page-header-content">
            <h1 className="title text-center">
              Power BI training in Hyderabad
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section-3 padding-top-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-img-wrap-3 wow fade-in-left" data-wow-delay="400ms">
              <div className="about-img">
                <img className="main-img" src={powerbi2} alt="about" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-content-3">
              <div className="section-heading mb-20">
                <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Turn Data into Interactive Dashboards and Business Insights</h2>
              </div>
              <p className="mb-30 wow fade-in-bottom" data-wow-delay="500ms">At RR Technosoft, our Power BI training  in Hyderabad is designed to help you master data visualization, dashboard creation, and business intelligence skills required in today’s data-driven organizations. This job-oriented Power BI course is ideal for freshers, data analysts, business analysts, and working professionals who want to build expertise in Data Analytics and Business Intelligence tools.</p>
              <div className="about-btn wow fade-in-bottom" data-wow-delay="600ms">
                <a href="contact-us.php" className="ed-primary-btn"> Book Admission Now <i className="fa-regular fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Why Choose DevOps */}
      <section className="about-section padding-top-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-content-18">
              <div className="section-heading mb-20">
                <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Why Learn Power BI?</h2>
              </div>
              <p>Power BI is one of the most widely used business intelligence tools in the world, trusted by companies of all sizes. By mastering Power BI, you can:</p>
              <ul className="about-list">
                <li>
                  <span>01</span> Create interactive dashboards and reports.
                </li>
                <li>
                  <span>02</span> Turn raw data into actionable business insights.
                </li>
                <li>
                  <span>03</span> Boost your career in data analytics and business intelligence.
                </li>
                <li>
                  <span>04</span> Work across industries like finance, healthcare, retail, and IT.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-img-wrap-18">
              <div className="about-img-2">
                <img src={powerbi3} alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
      
      <ContactSection />
      {/* What You Will Learn */}
      <section className="category-section-16 padding-top-bottom">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms"> What You Will Learn </h2>
        </div>
        <div className="category-wrap-16 category-wrap-16-2">
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon16} alt="icon" />
            </div>
            <h3 className="title">Power BI Basics</h3>
            <p>Introduction to Business Intelligence & Power BI</p>
            <p>Power BI Desktop Interface & Navigation</p>
            <p>Connecting to Data Sources</p>
          </div>
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon31} alt="icon" />
            </div>
            <h3 className="title">Data Preparation & Modeling</h3>
            <p>Data Cleaning & Transformation with Power Query</p>
            <p>Data Modeling & Relationships</p>
            <p>Creating Calculated Columns & Measures (DAX)</p>
          </div>
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon38} alt="icon" />
            </div>
            <h3 className="title">Data Visualization</h3>
            <p>Building Interactive Dashboards</p>
            <p>Using Charts, Maps, and Custom Visuals</p>
            <p>Conditional Formatting & Drill-Through Reports</p>
          </div>
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon20} alt="icon" />
            </div>
            <h3 className="title">Advanced Power BI Features</h3>
            <p>DAX Functions for Advanced Calculations</p>
            <p>Row-Level Security (RLS)</p>
            <p>Power BI Service – Publishing & Sharing Reports</p>
          </div>
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon13} alt="icon" />
            </div>
            <h3 className="title">Real-Time Projects</h3>
            <p>Sales Performance Dashboard</p>
            <p>Financial Analysis Report</p>
            <p>Marketing Campaign Insights</p>
          </div>
        </div>
      </div>
    </section>

      {/* Training Highlights */}
      <section className="feature-section-20 about-feature padding-top-bottom">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Training Highlights</h2>
        </div>
        <div className="row gy-lg-0 gy-4">
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="feature-item-20 wow fade-in-bottom" data-wow-delay="400ms">
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
            <div className="feature-item-20 wow fade-in-bottom" data-wow-delay="500ms">
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
          <div className="col-lg-4 col-md-6 wow fade-in-bottom mb-3" data-wow-delay="600ms">
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
          <div className="col-lg-4 col-md-6 wow fade-in-bottom mb-3" data-wow-delay="600ms">
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
          <div className="col-lg-4 col-md-6 wow fade-in-bottom mb-3" data-wow-delay="600ms">
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
            <h2 className="section-title mt-10 wow fade-in-bottom" data-wow-delay="400ms"> Build Your Career as a Power BI Today! </h2>
          </div>
          <p className="wow fade-in-bottom" data-wow-delay="500ms"> Call us now or visit our training center to enroll in our next Power BI batch and <br/> take the first step toward a rewarding career in tech. </p>
          <div className="cta-btn-wrap wow fade-in-bottom" data-wow-delay="600ms">
            <a href="contact-us.php" className="ed-primary-btn cta-btn-2">Book Admission Now <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Who Can Join? */}
    <section className="course-category padding-top-bottom">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Who Can Join?</h2>
        </div>
        <div className="category-items wow fade-in-bottom" data-wow-delay="500ms">
          <div className="category-item">
            <a href="#"> Students & Graduates </a>
          </div>
          <div className="category-item">
            <a href="#"> Data Analysts & Business Analysts </a>
          </div>
          <div className="category-item">
            <a href="#"> Professionals in Finance, Marketing, or Operations </a>
          </div>
          <div className="category-item">
            <a href="#"> Anyone interested in data visualization & BI tools </a>
          </div>
        </div>
      </div>
    </section> 
  
      {/* <Footer /> */}
      {showBtn && (
  <button
    className="scroll-to-top"
    onClick={scrollToTop}
  >
    <i className="fa-solid fa-arrow-up"></i>
  </button>
)}
    </>
  );
};

export default PowerBI;