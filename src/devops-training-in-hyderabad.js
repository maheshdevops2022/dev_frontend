import React, { useState, useEffect } from "react";
//import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContactSection from "./components/contact/ContactSection";
import DevOpsPage from "./components/seo/devops/DevOpsPage";
import "./assets/css/all.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import img1 from "./assets/img/services/devops3.jpg";
import img2 from "./assets/img/services/devops1.jpg";
import img3 from "./assets/img/services/devops2.jpeg";
import img4 from "./assets/img/icons/icon23.png";
import img5 from "./assets/img/icons/icon24.png";
import img6 from "./assets/img/icons/icon25.png";
import img7 from "./assets/img/icons/icon26.png";
import img8 from "./assets/img/icons/icon27.png";
import icon18 from "./assets/img/icons/icon18.png";
import icon19 from "./assets/img/icons/icon19.png";
import icon20 from "./assets/img/icons/icon20.png";
import icon21 from "./assets/img/icons/icon21.png";
import icon22 from "./assets/img/icons/icon22.png";
import bgImage from "./assets/img/bg-image2.jpeg";
const DevOpsTraining = () => {
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
      <DevOpsPage/>
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
            <h1 className="title text-center">DevOps Training in Hyderabad</h1>
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
                    alt="DevOps training classroom in Hyderabad"
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
                    Master DevOps and Accelerate Your IT Career
                  </h2>
                </div>

                <p className="mb-30">
                  At RR Technosoft, our DevOps training in Hyderabad prepares
                  you to become a highly skilled DevOps Engineer. Learn CI/CD,
                  Docker, Kubernetes, AWS, and automation tools with real-time
                  projects. This job-oriented course is ideal for freshers,
                  system administrators, cloud engineers, and IT professionals.
                </p>

                <div className="about-btn">
                  <a href="/contact-us" className="ed-primary-btn">
                    Enroll in DevOps Training{" "}
                    <i className="fa-solid fa-arrow-right"></i>
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
                  <h2 className="section-title">Why Choose DevOps?</h2>
                </div>

                <p>
                  DevOps is one of the fastest-growing fields in IT, with
                  high-paying roles and global demand. By mastering DevOps, you
                  can:
                </p>

                <ul className="about-list">
                  <li>
                    <span>01</span> Speed up software delivery with automation.
                  </li>
                  <li>
                    <span>02</span> Improve collaboration between development
                    and operations teams.
                  </li>
                  <li>
                    <span>03</span> Enhance system reliability and scalability.
                  </li>
                  <li>
                    <span>04</span> Work with cloud-native technologies.
                  </li>
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
            <h2
              className="section-title wow fade-in-bottom"
              data-wow-delay="400ms"
            >
              What You Will Learn
            </h2>
          </div>

          <div className="category-wrap-16 category-wrap-16-2">
            <div className="cat-item text-center will-learn">
              <div className="icon">
                <img src={icon18} alt="icon" />
              </div>
              <h3 className="title">DevOps Fundamentals</h3>
              <p>1. Principles of DevOps & Agile</p>
              <p>2. Continuous Integration (CI) & Continuous Delivery (CD)</p>
              <p>3. Infrastructure as Code (IaC)</p>
            </div>

            <div className="cat-item text-center will-learn">
              <div className="icon">
                <img src={icon19} alt="icon" />
              </div>
              <h3 className="title">DevOps Tools & Platforms</h3>
              <p>1. Version Control: Git & GitHub</p>
              <p>2. CI/CD: Jenkins, GitLab CI, Azure DevOps</p>
              <p>3. Configuration Management: Ansible, Puppet, Chef</p>
              <p>4. Containerization: Docker</p>
              <p>5. Orchestration: Kubernetes</p>
            </div>

            <div className="cat-item text-center will-learn">
              <div className="icon">
                <img src={icon20} alt="icon" />
              </div>
              <h3 className="title">Cloud & Automation</h3>
              <p>1. AWS, Azure, Google Cloud basics for DevOps</p>
              <p>2. Terraform for Infrastructure Automation</p>
            </div>

            <div className="cat-item text-center will-learn">
              <div className="icon">
                <img src={icon21} alt="icon" />
              </div>
              <h3 className="title">Monitoring & Security</h3>
              <p>1. Prometheus, Grafana for monitoring</p>
              <p>2. ELK Stack for log management</p>
              <p>3. DevSecOps basics</p>
            </div>

            <div className="cat-item text-center will-learn">
              <div className="icon">
                <img src={icon22} alt="icon" />
              </div>
              <h3 className="title">Real-Time Projects</h3>
              <p>1. Automating application deployments</p>
              <p>2. Setting up CI/CD pipelines</p>
              <p>3. Containerizing & orchestrating a microservices app</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Highlights */}
      <section className="feature-section-20 about-feature padding-top-bottom">
        <div className="container">
          <div className="section-heading text-center">
            <h2 className="section-title">Training Highlights</h2>
          </div>

          <div className="row gy-lg-0 gy-4">
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-item-20">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={img4} alt="Practical training" />
                  </div>
                  <div className="content">
                    <h3 className="title">100% Practical</h3>
                  </div>
                </div>
                <p>Work on real-world DevOps scenarios.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-item-20">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={img5} alt="Expert trainers" />
                  </div>
                  <div className="content">
                    <h3 className="title">
                      Experienced DevOps Engineers as Trainers
                    </h3>
                  </div>
                </div>
                <p>Learn from industry experts.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-item-20">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={img6} alt="Curriculum" />
                  </div>
                  <div className="content">
                    <h3 className="title">Job-Oriented Curriculum</h3>
                  </div>
                </div>
                <p>Covers all skills needed for DevOps roles.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-item-20">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={img7} alt="Flexible batches" />
                  </div>
                  <div className="content">
                    <h3 className="title">Flexible Batches</h3>
                  </div>
                </div>
                <p>Classroom & online training options.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-item-20">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={img8} alt="Placement support" />
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
      {/* Build Your Career as a Devops Today! */}
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
                Build Your Career as a DevOps Today!
              </h2>
            </div>

            <p className="wow fade-in-bottom" data-wow-delay="500ms">
              Call us now or visit our training center to enroll in our next
              DevOps batch and
              <br />
              take the first step toward a rewarding career in tech.
            </p>

            <div
              className="cta-btn-wrap wow fade-in-bottom"
              data-wow-delay="600ms"
            >
              <a href="/contact-us" className="ed-primary-btn cta-btn-2">
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
          </div>
          <div
            className="category-items wow fade-in-bottom"
            data-wow-delay="600ms"
          >
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
    </>
  );
};

export default DevOpsTraining;
