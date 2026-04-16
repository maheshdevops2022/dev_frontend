import React, { useState, useEffect } from "react";
// import Header from "./components/header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContactSection from "./components/contact/ContactSection";
// import Footer from "./components/footer";
import "./assets/css/all.css";
import { Helmet } from "react-helmet";
import AzurePage from "./components/seo/azure/AzurePage";

import img1 from "./assets/img/services/azure-devOps3.jpg";
import img2 from "./assets/img/services/azure-devOps1.png";
import img3 from "./assets/img/services/azure-devOps2.png";
// import img4 from "./assets/img/icons/icon23.png";
// import img5 from "./assets/img/icons/icon24.png";
// import img6  from "./assets/img/icons/icon25.png";
// import img7 from "./assets/img/icons/icon26.png";
// import img8 from "./assets/img/icons/icon27.png";
import icon12 from "./assets/img/icons/icon12.png";
import icon18 from "./assets/img/icons/icon18.png";
import icon35 from "./assets/img/icons/icon35.png";
import icon13 from "./assets/img/icons/icon13.png";
import icon36 from "./assets/img/icons/icon36.png";
import icon14 from "./assets/img/icons/icon14.png";

import icon23 from "./assets/img/icons/icon23.png";
import icon24 from "./assets/img/icons/icon24.png";
import icon25 from "./assets/img/icons/icon25.png";
import icon26 from "./assets/img/icons/icon26.png";
import icon27 from "./assets/img/icons/icon27.png";
import bgImage from "./assets/img/bg-image2.jpeg";
const AzureTraining = () => {
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
      <AzurePage/>
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
              Azure DevOps Training in Hyderabad
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section-3 padding-top-bottom">
        <div className="container">
          <div className="row align-items-center">
            
            {/* Image */}
            <div className="col-lg-6 col-md-12">
              <div className="about-img-wrap-3">
                <div className="about-img">
                  <img
                    className="main-img"
                    src={img2}
                    alt="Azure DevOps training classroom in Hyderabad"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6 col-md-12">
              <div className="about-content-3">
                <div className="section-heading mb-20">
                  <h2 className="section-title">
                    Master Azure DevOps and Streamline Your Software Delivery
                  </h2>
                </div>

                <p className="mb-30">
                  At RR Technosoft, our Azure DevOps Training Program teaches you how to plan, 
                  develop, test, deliver, and monitor applications using Microsoft’s Azure DevOps 
                  platform. With hands-on, real-time projects, you’ll gain the skills to manage the 
                  entire DevOps lifecycle on the cloud and become job-ready.
                </p>

                <div className="about-btn">
                  <a href="/contact-us" className="ed-primary-btn">
                    Enroll in DevOps Training{" "}
                    <i className="fa-regular fa-arrow-right"></i>
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

            {/* Content */}
            <div className="col-lg-6 col-md-12">
              <div className="about-content-18">
                <div className="section-heading mb-20">
                  <h2 className="section-title">Why Learn Azure DevOps?</h2>
                </div>

                <p>
                  Azure DevOps is one of the most in-demand DevOps platforms in the world, 
                  enabling seamless collaboration between development and operations teams. 
                  By mastering Azure DevOps, you can:
                </p>

                <ul className="about-list">
                  <li><span>01</span> Automate build, test, and deployment processes.</li>
                  <li><span>02</span> Integrate with popular development tools and cloud services.</li>
                  <li><span>03</span> Enhance software quality and delivery speed.</li>
                  <li><span>04</span> Work on enterprise-level projects with ease.</li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-6 col-md-12">
              <div className="about-img-wrap-18">
                <div className="about-img-2">
                  <img
                    src={img3}
                    alt="DevOps tools and workflow illustration"
                    loading="lazy"
                  />
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
      <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">
        What You Will Learn
      </h2>
    </div>

    <div className="category-wrap-16 category-wrap-16-2">

      <div className="cat-item text-center will-learn">
        <div className="icon">
          <img src={icon12} alt="Azure DevOps introduction icon" />
        </div>
        <h3 className="title">Introduction to Azure DevOps</h3>
        <p>1. Overview of DevOps & Azure DevOps Services</p>
        <p>2. Setting Up an Azure DevOps Organization</p>
        <p>3. Understanding Azure Repos, Pipelines, Boards, Artifacts, and Test Plans</p>
      </div>

      <div className="cat-item text-center will-learn">
        <div className="icon">
          <img src={icon18} alt="Version control icon" />
        </div>
        <h3 className="title">Version Control with Azure Repos</h3>
        <p>1. Git Basics & Advanced Git Commands</p>
        <p>2. Branching, Merging & Pull Requests</p>
      </div>

      <div className="cat-item text-center will-learn">
        <div className="icon">
          <img src={icon35} alt="CI pipeline icon" />
        </div>
        <h3 className="title">Continuous Integration (CI)</h3>
        <p>1. Creating & Configuring Build Pipelines</p>
        <p>2. Integrating Automated Testing</p>
      </div>

      <div className="cat-item text-center will-learn">
        <div className="icon">
          <img src={icon13} alt="CD deployment icon" />
        </div>
        <h3 className="title">Continuous Delivery (CD)</h3>
        <p>1. Release Pipelines & Deployment Strategies</p>
        <p>2. Deploying Applications to Azure App Services, VMs, and Kubernetes</p>
      </div>

      <div className="cat-item text-center will-learn">
        <div className="icon">
          <img src={icon36} alt="Infrastructure as code icon" />
        </div>
        <h3 className="title">Infrastructure as Code (IaC)</h3>
        <p>1. Terraform & ARM Templates for Azure Infrastructure Automation</p>
      </div>

      <div className="cat-item text-center will-learn">
        <div className="icon">
          <img src={icon14} alt="Monitoring and reporting icon" />
        </div>
        <h3 className="title">Monitoring & Reporting</h3>
        <p>1. Application Insights & Log Analytics</p>
        <p>2. Dashboards & Project Tracking</p>
      </div>

    </div>
  </div>
</section>

      {/* Training Highlights */}
      <section className="feature-section-20 about-feature padding-top-bottom">
  <div className="container">

    <div className="section-heading text-center">
      <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">
        Training Highlights
      </h2>
    </div>

    <div className="row gy-lg-0 gy-4">

      <div className="col-lg-4 col-md-6 mb-3">
        <div className="feature-item-20 wow fade-in-bottom" data-wow-delay="400ms">
          <div className="feature-inner">
            <div className="icon">
              <img src={icon23} alt="Practical training icon" />
            </div>
            <div className="content">
              <h3 className="title">100% Practical</h3>
            </div>
          </div>
          <p>Focused on real Azure DevOps use cases.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-3">
        <div className="feature-item-20 wow fade-in-bottom" data-wow-delay="500ms">
          <div className="feature-inner">
            <div className="icon">
              <img src={icon24} alt="Experienced trainers icon" />
            </div>
            <div className="content">
              <h3 className="title">Experienced Trainers</h3>
            </div>
          </div>
          <p>Learn from certified Azure DevOps professionals.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-3 wow fade-in-bottom" data-wow-delay="600ms">
        <div className="feature-item-20">
          <div className="feature-inner">
            <div className="icon">
              <img src={icon25} alt="Curriculum icon" />
            </div>
            <div className="content">
              <h3 className="title">Job-Oriented Curriculum</h3>
            </div>
          </div>
          <p>Designed to meet current industry requirements.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-3 wow fade-in-bottom" data-wow-delay="700ms">
        <div className="feature-item-20">
          <div className="feature-inner">
            <div className="icon">
              <img src={icon26} alt="Flexible learning icon" />
            </div>
            <div className="content">
              <h3 className="title">Flexible Learning Options</h3>
            </div>
          </div>
          <p>Classroom & online training available.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-3 wow fade-in-bottom" data-wow-delay="800ms">
        <div className="feature-item-20">
          <div className="feature-inner">
            <div className="icon">
              <img src={icon27} alt="Placement assistance icon" />
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
  className="cta-section-3 pt-100 pb-100"
  style={{ backgroundImage: `url(${bgImage})` }}
>
      <div className="overlay"></div>
      <div className="container">
        <div className="cta-content cta-content-3 text-center">
          <div className="section-heading text-center white-content mb-20">
            <h2 className="section-title mt-10 wow fade-in-bottom" data-wow-delay="400ms"> Build Your Career as a Azure DevOps Today! </h2>
          </div>
          <p className="wow fade-in-bottom" data-wow-delay="500ms"> Call us now or visit our training center to enroll in our next Azure DevOps batch and <br /> take the first step toward a rewarding career in tech. </p>
          <div className="cta-btn-wrap wow fade-in-bottom" data-wow-delay="600ms">
            <a href="contactus" className="ed-primary-btn cta-btn-2">Book Admission Now <i className="fa-solid fa-arrow-right"></i>
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
            <a href="#">
                Software Developers & Testers </a>
          </div>
          <div className="category-item">
            <a href="#">
                System & Cloud Administrators </a>
          </div>
          <div className="category-item">
            <a href="#">
                DevOps Engineers </a>
          </div>
          <div className="category-item">
            <a href="#">
                IT Students & Graduates </a>
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

export default AzureTraining;