import React, { useState, useEffect } from "react";
//import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContactSection from "./components/contact/ContactSection";
import DevOpsPage from "./components/seo/devops/DevOpsPage";
import "./assets/css/all.css";
import "./min.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import img1 from "./assets/img/services/devops3.jpg";
import img2 from "./assets/img/services/devops1.png";
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
import bgImage from "./assets/img/bg-image2.png";
const WhatsappSms = () => {
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
      <DevOpsPage />
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
            <h1 className="title text-center"> WhatsApp & SMS Services at Dev Infotechs</h1>
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
                    Boost Your Business with WhatsApp & SMS Services
                  </h2>
                </div>

                <p className="mb-30">
                  At Dev Infotechs, we provide powerful WhatsApp API and SMS services to help
                  businesses connect with customers instantly. Send bulk messages, automate
                  responses, and manage campaigns with ease. Our solutions are perfect for
                  marketing, customer support, and transactional messaging.
                </p>

                <div className="about-btn">
                  <a href="/contact-us" className="ed-primary-btn">
                    Enroll in DevOps Training <i className="fa-solid fa-arrow-right"></i>
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
                  <h2 className="section-title"> Why Choose WhatsApp & SMS Services?</h2>
                </div>

                <p>
                  WhatsApp and SMS marketing are the most effective ways to reach customers
                  instantly and increase engagement.
                </p>
                <ul className="about-list">
                  <li>
                    <span>01</span> Deliver instant communication at scale using SMS and WhatsApp
                    services with high open rates, ensuring faster reach and improved customer
                    response.
                  </li>

                  <li>
                    <span>02</span> Elevate customer engagement by sharing rich media content
                    including high-quality images and videos, making your campaigns more impactful
                    and visually appealing.
                  </li>

                  <li>
                    <span>03</span> Simplify document sharing by sending PDFs such as invoices,
                    tickets, and reports directly to customers in a secure and organized manner.
                  </li>

                  <li>
                    <span>04</span> Leverage automation and API-based messaging to send OTPs,
                    alerts, reminders, and marketing campaigns seamlessly without manual
                    intervention.
                  </li>

                  <li>
                    <span>05</span> Build stronger customer relationships through personalized,
                    real-time, and multi-channel communication that drives engagement and business
                    growth.
                  </li>
                  <li>
                    <span>06</span> Provide 24/7 customer support with automated responses, instant
                    replies, and seamless communication across all channels.
                  </li>

                  <li>
                    <span>07</span> Deliver high-quality multimedia content including images,
                    videos, and PDFs to enhance user experience and engagement.
                  </li>

                  <li>
                    <span>08</span> Ensure secure and reliable messaging with advanced data
                    protection and high delivery success rates for every campaign.
                  </li>
                  <li>
                    <span>09</span> Easily manage and scale your messaging campaigns with a
                    centralized dashboard designed for efficiency and control.
                  </li>

                  <li>
                    <span>10</span> Boost conversions and customer retention with targeted messaging
                    strategies tailored to your business needs.
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-6 col-md-12">
              <div className="about-img-wrap-18">
                <div className="about-img-2">
                  <img src={img3} alt="DevOps tools and workflow illustration" loading="lazy" />
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
              Our Services
            </h2>
          </div>

          <div className="category-wrap-16 category-wrap-16-2">
            {/* Bulk Messaging */}
            <div className="cat-item text-center will-learn">
              <div className="icon">
                <i
                  className="fa-brands fa-whatsapp"
                  style={{ fontSize: "40px", color: "#25d366" }}
                ></i>
              </div>
              <h3 className="title">WhatsApp Bulk Messaging</h3>
              <p>1. Send messages to thousands of users instantly</p>
              <p>2. High open rates & fast delivery</p>
              <p>3. Perfect for promotions & updates</p>
            </div>

            {/* SMS Services */}
            <div className="cat-item text-center will-learn">
              <div className="icon">
                <i
                  className="fa-solid fa-comment-sms"
                  style={{ fontSize: "40px", color: "#25d366" }}
                ></i>
              </div>
              <h3 className="title">SMS & OTP Services</h3>
              <p>1. Secure OTP & transactional messages</p>
              <p>2. Instant alerts & notifications</p>
              <p>3. Reliable delivery system</p>
            </div>

            {/* Media Sharing */}
            <div className="cat-item text-center will-learn">
              <div className="icon">
                <i className="fa-solid fa-image" style={{ fontSize: "40px", color: "#25d366" }}></i>
              </div>
              <h3 className="title">Image & Video Messaging</h3>
              <p>1. Send images & promotional banners</p>
              <p>2. Share videos for better engagement</p>
              <p>3. Improve brand visibility</p>
            </div>

            {/* PDF Sharing */}
            <div className="cat-item text-center will-learn">
              <div className="icon">
                <i
                  className="fa-solid fa-file-pdf"
                  style={{ fontSize: "40px", color: "#25d366" }}
                ></i>
              </div>
              <h3 className="title">PDF & Document Sharing</h3>
              <p>1. Send invoices & reports instantly</p>
              <p>2. Share brochures & documents</p>
              <p>3. Secure & professional communication</p>
            </div>

            {/* Automation */}
            <div className="cat-item text-center will-learn">
              <div className="icon">
                <i className="fa-solid fa-robot" style={{ fontSize: "40px", color: "#25d366" }}></i>
              </div>
              <h3 className="title">Automation & API Integration</h3>
              <p>1. Automate messages & workflows</p>
              <p>2. Easy API integration</p>
              <p>3. Real-time notifications & alerts</p>
            </div>

            <div className="cat-item text-center will-learn">
              <div className="icon">
                <i
                  className="fa-solid fa-chart-line"
                  style={{ fontSize: "40px", color: "#25d366" }}
                ></i>
              </div>
              <h3 className="title">Campaign Analytics & Reporting</h3>
              <p>1. Track message delivery and open rates</p>
              <p>2. Analyze campaign performance in real-time</p>
              <p>3. Gain insights to improve future campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Highlights */}
      <section className="feature-section-20 about-feature padding-top-bottom">
        <div className="container">
          <div className="section-heading text-center">
            <h2 className="section-title">Service Highlights</h2>
            <p className="mt-2">
              Powerful messaging solutions designed to help your business communicate faster,
              smarter, and more effectively.
            </p>
          </div>

          <div className="row gy-4">
            {/* Fast Delivery */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-item-20 text-center p-4 shadow-sm rounded">
                <div className="icon mb-3">
                  <div className="icon-circle">
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                </div>
                <h3 className="title">Instant Message Delivery</h3>
                <p>
                  Deliver SMS and WhatsApp messages instantly with high-speed infrastructure,
                  ensuring your communication reaches users without delay.
                </p>
              </div>
            </div>

            {/* High Open Rate */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-item-20 text-center p-4 shadow-sm rounded">
                <div className="icon mb-3">
                  <div className="icon-circle">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
                <h3 className="title">High Open & Response Rates</h3>
                <p>
                  Maximize engagement with industry-leading open rates, helping your messages get
                  noticed and acted upon quickly.
                </p>
              </div>
            </div>

            {/* Media Support */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-item-20 text-center p-4 shadow-sm rounded">
                <div className="icon mb-3">
                  <div className="icon-circle">
                    <i className="fa-solid fa-photo-film"></i>
                  </div>
                </div>
                <h3 className="title">Rich Media Messaging</h3>
                <p>
                  Enhance communication with images, videos, and documents to create more engaging
                  and visually impactful campaigns.
                </p>
              </div>
            </div>

            {/* Automation */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-item-20 text-center p-4 shadow-sm rounded">
                <div className="icon mb-3">
                  <div className="icon-circle">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                </div>
                <h3 className="title">Automation & API Integration</h3>
                <p>
                  Automate messaging workflows, OTPs, alerts, and campaigns using seamless API
                  integration with your systems.
                </p>
              </div>
            </div>

            {/* Secure */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-item-20 text-center p-4 shadow-sm rounded">
                <div className="icon mb-3">
                  <div className="icon-circle">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                </div>
                <h3 className="title">Secure & Reliable Messaging</h3>
                <p>
                  Ensure safe delivery of OTPs and sensitive data with enterprise-grade security and
                  reliability.
                </p>
              </div>
            </div>

            {/* Analytics */}
            <div className="col-lg-4 col-md-6">
              <div className="feature-item-20 text-center p-4 shadow-sm rounded">
                <div className="icon mb-3">
                  <div className="icon-circle">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                </div>
                <h3 className="title">Analytics & Performance Insights</h3>
                <p>
                  Monitor delivery, open rates, and campaign performance with detailed real-time
                  analytics and reporting.
                </p>
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
              <h2 className="section-title mt-10 wow fade-in-bottom" data-wow-delay="400ms">
                Build Your Career as a DevOps Today!
              </h2>
            </div>

            <p className="wow fade-in-bottom" data-wow-delay="500ms">
              Call us now or visit our training center to enroll in our next DevOps batch and
              <br />
              take the first step toward a rewarding career in tech.
            </p>

            <div className="cta-btn-wrap wow fade-in-bottom" data-wow-delay="600ms">
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
            <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">
              Who Can Use These Services?
            </h2>
          </div>
          <div className="category-items wow fade-in-bottom" data-wow-delay="500ms">
            <div className="category-item">
              <a href="#">Startups & Growing Businesses </a>
            </div>
            <div className="category-item">
              <a href="#"> E-commerce & Online Stores </a>
            </div>
            <div className="category-item">
              <a href="#"> Digital Marketing & Advertising Agencies </a>
            </div>
          </div>
          <div className="category-items wow fade-in-bottom" data-wow-delay="600ms">
            <div className="category-item">
              <a href="#"> Customer Support & Service Teams </a>
            </div>
            <div className="category-item">
              <a href="#"> Enterprises & Large Organizations </a>
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

export default WhatsappSms;
