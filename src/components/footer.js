import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/all.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-section">
        <div className="footer-top-wrap">
          <div className="container">
            <div className="row footer-wrap">
              {/* About Us */}
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget">
                  <h3 className="widget-header">About Us</h3>
                  <p className="mb-30">
                    At Dev Infotechs, we are dedicated to helping businesses grow through powerful
                    and reliable messaging solutions.we specialize in providing high-quality bulk
                    SMS and WhatsApp API services designed to enhance customer communication and
                    engagement. Our platform enables businesses to send SMS, images, videos, and
                    interactive poll messages with ease. With smart automation, high delivery rates,
                    and user-friendly tools, we help you reach your audience instantly and
                    effectively, driving better engagement and business growth.
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget">
                  <h3 className="widget-header">Quick Links</h3>
                  <ul className="footer-list">
                    <li>
                      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        Book Demo
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        Job Portal
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)}>
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Courses */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="widget-header">Services</h3>
                  <ul className="footer-list">
                    <li>
                      <Link
                        
                      >
                        Whatsapp SMS
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/azure-devops-training-in-hyderabad" onClick={() => window.scrollTo(0,0)}>
                        Azure DevOps
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        
                      >
                        Images
                      </Link>
                    </li>
                    <li>
                      <Link
                                              >
                        Videos
                      </Link>
                    </li>
                   <li>
                      <Link
                                           >
                        Polls
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h3 className="widget-header">Get in touch!</h3>
                  <p className="mb-10">
                    MIG 63, 1st floor, Dharma Reddy Colony, Beside ICICI Bank, Near JNTU Signal,
                    KPHB, Hyderabad, Telangana
                  </p>

                  <div className="footer-contact mb-10">
                    <span className="number">
                      <i className="fa-solid fa-phone"></i>
                      <Link to="tel:+919542535632"> +91 954 253 5632</Link>
                    </span>
                    <span className="number">
                      <i className="fa-regular fa-envelope"></i>
                      <Link to="mailto:enquiry@rrtechnosoft.in"> enquiry@rrtechnosoft.in</Link>
                    </span>
                  </div>

                  <ul className="footer-social">
                    <li>
                      <Link
                        to="https://www.facebook.com/share/14Ho6Prv88H/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/rr_technosoft"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/company/rrtechnosoft/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://youtube.com/@rrtechnosoft2680"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright-content">
                  <p>© {currentYear} Dev Infotech's. All Rights Reserved.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="copyright-content" style={{ float: "right", textAlign: "left" }}>
                  <p>
                    Design & Developed by{" "}
                    <Link to="https://www.ujrtechnologies.com/" target="_blank" rel="noreferrer">
                      UJR Technologies Private Limited
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="floating_btn">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=+919542535632&text=Hi, I interested in your services..."
        >
          <div className="contact_icon">
            <i className="fab fa-whatsapp my-float"></i>
          </div>
        </a>
      </div>
    </>
  );
};

export default Footer;
