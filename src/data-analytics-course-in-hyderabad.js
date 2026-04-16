import React, { useState, useEffect } from "react";
// import Header from "./components/header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContactSection from "./components/contact/ContactSection";
// import Footer from "./components/footer";
import "./assets/css/all.css";
import { Helmet } from "react-helmet";

import img1 from "./assets/img/services/data-analytics1.jpg";
import dataanalytics from './assets/img/services/data-analytics2.webp'
import dataanalytics3 from  './assets/img/services/data-analytics3.jpg'

import icon21 from "./assets/img/icons/icon21.png"
import icon20 from "./assets/img/icons/icon20.png"
import icon39 from "./assets/img/icons/icon39.png"
import icon13 from "./assets/img/icons/icon13.png"
import icon14 from "./assets/img/icons/icon14.png"
import icon15 from "./assets/img/icons/icon15.png"

import icon23 from "./assets/img/icons/icon23.png"
import icon24 from "./assets/img/icons/icon24.png"
import icon25 from "./assets/img/icons/icon25.png"
import icon26 from "./assets/img/icons/icon26.png"
import icon27 from "./assets/img/icons/icon27.png"
import bgImage from "./assets/img/bg-image2.jpeg";
import DataanalyticsPage from "./components/seo/dataanalytics/DataanalyticsPage";
const DataAnalytics = () => {
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
      <DataanalyticsPage/>
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
              Data Analytics course in Hyderabad
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
                <img className="main-img" src={dataanalytics} alt="about" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-content-3">
              <div className="section-heading mb-20">
                <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Turn Data into Insights, and Insights into Action</h2>
              </div>
              <p className="mb-30 wow fade-in-bottom" data-wow-delay="500ms">At RR Technosoft, our Data Analytics course in Hyderabad equips you with the practical skills required to analyze complex datasets, identify trends, and make data-driven business decisions. This job-oriented Data Analytics course is designed for freshers, graduates, and working professionals who want to build a successful career in Data Analytics and Business Intelligence.</p>
              <div className="about-btn wow fade-in-bottom" data-wow-delay="600ms">
                <a href="contact-us.php" className="ed-primary-btn"> Book Admission Now <i className="fa-solid fa-arrow-right"></i>
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
                <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Why Choose Data Analytics?</h2>
              </div>
              <p>Data Analytics is one of the fastest-growing career paths, with applications in nearly every industry, from finance and healthcare to retail and technology. With data skills, you can:</p>
              <ul className="about-list">
                <li>
                  <span>01</span> Help businesses make informed decisions.
                </li>
                <li>
                  <span>02</span> Work in high-demand roles with competitive salaries.
                </li>
                <li>
                  <span>03</span> Contribute to data-driven transformation projects.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-img-wrap-18">
              <div className="about-img-2">
                <img src={dataanalytics3} alt="about" />
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
              <img src={icon21} alt="icon" />
            </div>
            <h3 className="title">Foundations of Data Analytics</h3>
            <p>1. Understanding Data Types & Structures</p>
            <p>2. Data Collection & Cleaning</p>
            <p>3. Exploratory Data Analysis (EDA)</p>
          </div>
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon20} alt="icon" />
            </div>
            <h3 className="title">Data Analytics Tools</h3>
            <p>1. Excel – Advanced formulas, pivot tables, dashboards</p>
            <p>2. SQL – Querying and managing databases</p>
            <p>3. Power BI – Interactive business dashboards</p>
            <p>4. Tableau – Data visualization & storytelling</p>
          </div>
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon39} alt="icon" />
            </div>
            <h3 className="title">Programming for Analytics</h3>
            <p>1. Python for Data Analysis – Pandas, NumPy, Matplotlib, Seaborn</p>
          </div>
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon13} alt="icon" />
            </div>
            <h3 className="title">Statistics for Data Analytics</h3>
            <p>1. Descriptive & Inferential Statistics</p>
            <p>2. Hypothesis Testing & Correlation Analysis</p>
          </div>
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon14} alt="icon" />
            </div>
            <h3 className="title">Business Insights & Reporting</h3>
            <p>1. KPI Measurement</p>
            <p>2. Report Automation</p>
            <p>3. Data-Driven Decision-Making</p>
          </div>
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon15} alt="icon" />
            </div>
            <h3 className="title">Real-Time Projects</h3>
            <p>1. Sales Data Dashboard</p>
            <p>2. Customer Segmentation Analysis</p>
            <p>3. Market Trend Visualization</p>
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
              <p>Learn by solving real business problems.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="feature-item-20 wow fade-in-bottom" data-wow-delay="500ms">
              <div className="feature-inner">
                <div className="icon">
                  <img src={icon24} alt="icon" />
                </div>
                <div className="content">
                  <h3 className="title">Experienced Industry Trainers</h3>
                </div>
              </div>
              <p>Professionals with hands-on analytics experience.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fade-in-bottom mb-3" data-wow-delay="600ms">
            <div className="feature-item-20">
              <div className="feature-inner">
                <div className="icon">
                  <img src={icon25} alt="icon" />
                </div>
                <div className="content">
                  <h3 className="title">Job-Oriented Curriculum </h3>
                </div>
              </div>
              <p>Designed to match market requirements.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fade-in-bottom mb-3" data-wow-delay="600ms">
            <div className="feature-item-20">
              <div className="feature-inner">
                <div className="icon">
                  <img src={icon26} alt="icon" />
                </div>
                <div className="content">
                  <h3 className="title">Flexible Learning Modes</h3>
                </div>
              </div>
              <p>Classroom & online batch options.</p>
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
              <p>Resume building, mock interviews, and job referrals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Build  */}
    <section
  className="cta-section-3 pt-100 pb-100"
  style={{ backgroundImage: `url(${bgImage})` }}
>
      <div className="overlay"></div>
      <div className="container">
        <div className="cta-content cta-content-3 text-center">
          <div className="section-heading text-center white-content mb-20">
            <h2 className="section-title mt-10 wow fade-in-bottom" data-wow-delay="400ms"> Build Your Career as a Data Analytics Today! </h2>
          </div>
          <p className="wow fade-in-bottom" data-wow-delay="500ms"> Call us now or visit our training center to enroll in our next Data Analytics batch and <br /> take the first step toward a rewarding career in tech. </p>
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
            <a href="#"> Students & Graduates from any stream </a>
          </div>
          <div className="category-item">
            <a href="#"> Business Analysts & IT Professionals </a>
          </div>
          <div className="category-item">
            <a href="#"> Professionals in Marketing, Finance, HR, or Operations </a>
          </div>
          <div className="category-item">
            <a href="#"> Anyone interested in a career in Data Analytics </a>
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

export default DataAnalytics;