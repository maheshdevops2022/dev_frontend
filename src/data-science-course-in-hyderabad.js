import React, { useState, useEffect } from "react";
// import Header from "./components/header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContactSection from "./components/contact/ContactSection";
import DatasciencePage from "./components/seo/datascience/DatasciencePage";
// import Footer from "./components/footer";
import "./assets/css/all.css";
import { Helmet } from "react-helmet";



import img1 from "./assets/img/services/data-science1.jpg";
import img2 from "./assets/img/services/data-science2.jpg";
import img3 from "./assets/img/services/data-science3.jpg";

import icon20 from "./assets/img/icons/icon20.png";
import icon31 from "./assets/img/icons/icon31.png";
import icon38 from "./assets/img/icons/icon38.png";
import icon37 from "./assets/img/icons/icon37.png";
import icon18 from "./assets/img/icons/icon18.png";
import icon13 from "./assets/img/icons/icon13.png";

import icon23 from "./assets/img/icons/icon23.png";
import icon24 from "./assets/img/icons/icon24.png";
import icon25 from "./assets/img/icons/icon25.png";
import icon26 from "./assets/img/icons/icon26.png";
import icon27 from "./assets/img/icons/icon27.png";

import category1 from "./assets/img/icon/category-1.png"
import category2 from "./assets/img/icon/category-2.png"
import category3 from "./assets/img/icon/category-3.png"
import category4 from "./assets/img/icon/category-4.png"

import bgImage from "./assets/img/bg-image2.jpeg";
const DataScience = () => {
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
      <DatasciencePage/>
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
              Data Science course in Hyderabad
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
                <img className="main-img" src={img2} alt="about"/>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-content-3">
              <div className="section-heading mb-20">
                <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Master Data Science and Build a Future-Ready Career</h2>
              </div>
              <p className="mb-30 wow fade-in-bottom" data-wow-delay="500ms">At RR Technosoft, our Data Science course in Hyderabad is designed to transform you into an industry-ready Data Scientist with strong skills in data analysis, data visualization, machine learning, and artificial intelligence (AI). This job-oriented Data Science course is ideal for freshers, graduates, engineers, and working professionals who want to build a successful career in Data Science and Analytics.</p>
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
                <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">Why Choose Data Science?</h2>
              </div>
              <p>Data Science is the fastest-growing field in the tech industry, with applications across finance, healthcare, e-commerce, manufacturing, and more. By mastering Data Science, you can:</p>
              <ul className="about-list">
                <li>
                  <span>01</span> Unlock high-paying career opportunities.
                </li>
                <li>
                  <span>02</span> Solve real-world problems with data-driven insights.
                </li>
                <li>
                  <span>03</span> Work in AI, Machine Learning, Business Analytics, and Research.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-img-wrap-18">
              <div className="about-img-2">
                <img src={img3} alt="about" />
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
              <img src={icon20} alt="icon" />
            </div>
            <h3 className="title">Python for Data Science</h3>
            <p>1. Python Basics & Advanced Concepts</p>
            <p>2. Pandas, NumPy for Data Manipulation</p>
            <p>3. Data Cleaning & Preprocessing</p>
          </div>
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon31} alt="icon" />
            </div>
            <h3 className="title">Data Visualization</h3>
            <p>1. Matplotlib, Seaborn</p>
            <p>2. Plotly & Interactive Dashboards</p>
          </div>
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon38} alt="icon" />
            </div>
            <h3 className="title">Statistics & Probability</h3>
            <p>1. Descriptive & Inferential Statistics</p>
            <p>2. Hypothesis Testing</p>
          </div>
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon37} alt="icon" />
            </div>
            <h3 className="title">Machine Learning</h3>
            <p>1. Supervised & Unsupervised Learning</p>
            <p>2. Regression, Classification, Clustering</p>
            <p>3. Model Evaluation & Optimization</p>
          </div>
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon18} alt="icon" />
            </div>
            <h3 className="title">Advanced Topics</h3>
            <p>1. Natural Language Processing (NLP)</p>
            <p>2. Deep Learning with TensorFlow & Keras</p>
          </div>
          <div className="cat-item text-center will-learn">
            <div className="icon">
              <img src={icon13} alt="icon" />
            </div>
            <h3 className="title">Real-Time Projects</h3>
            <p>1. Predictive Analytics for Sales</p>
            <p>2. Sentiment Analysis of Social Media Data</p>
            <p>3. Customer Segmentation for Marketing</p>
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
              <p>Learn through hands-on projects that reflect real industry scenarios.</p>
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
              <p>Learn from experienced Data Scientists with proven industry expertise.</p>
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
              <p>Aligned with current market needs and includes interview preparation.</p>
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
              <p>Choose from classroom or online batches to suit your schedule.</p>
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
              <p>Get help with resume building, mock interviews, and job referrals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Build  */}
    <section
  className="cta-section-3 pt-100 pb-100"
  style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="cta-content cta-content-3 text-center">
          <div className="section-heading text-center white-content mb-20">
            <h2 className="section-title mt-10 wow fade-in-bottom" data-wow-delay="400ms"> Build Your Career as a Data Science Today! </h2>
          </div>
          <p className="wow fade-in-bottom" data-wow-delay="500ms"> Call us now or visit our training center to enroll in our next Data Science batch and <br/> take the first step toward a rewarding career in tech. </p>
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
      <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">
        Who Can Join?
      </h2>
    </div>

    <div className="category-items wow fade-in-bottom" data-wow-delay="500ms">
      
      <div className="category-item">
        <a href="#">
          <span><img src={category1} alt="icon"/></span>
          Students & Graduates (Any Stream)
        </a>
      </div>

      <div className="category-item">
        <a href="#">
          <span><img src={category2} alt="icon"/></span>
          Working Professionals upgrading to Data Science roles
        </a>
      </div>

      <div className="category-item">
        <a href="#">
          <span><img src={category3} alt="icon"/></span>
          Business Analysts & Developers
        </a>
      </div>

      <div className="category-item">
        <a href="#">
          <span><img src={category4} alt="icon"/></span>
          Anyone interested in data-driven careers
        </a>
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

export default DataScience;