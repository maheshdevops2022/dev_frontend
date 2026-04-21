import React, { useState, useEffect } from "react";
import "../assets/css/all.css";
import logo from "../assets/img/logo/logo.jpeg";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCloseDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const header = document.getElementById("main-header");

    const setPadding = () => {
      if (header) {
        const height = header.offsetHeight;
        document.body.style.paddingTop = height + "px";
      }
    };

    setPadding(); // run on load
    window.addEventListener("resize", setPadding); // update on resize

    return () => window.removeEventListener("resize", setPadding);
  }, []);
  return (
    <>
      <header
        id="main-header"
        className="header header-3 header-6 header-7 sticky-active"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 999,
        }}
      >
        {/* Top Bar */}
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-inner">
              <div className="top-bar-left">
                <ul className="top-bar-list">
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <span>
                      <Link to="mailto:enquiry@rrtechnosoft.in">enquiry@rrtechnosoft.in</Link>
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    <Link to="tel:+919542535632">+91 961 858 7613</Link>
                  </li>
                </ul>
              </div>

              <div className="top-bar-right">
                <div className="top-social-wrap">
                  <ul className="social-list">
                    <li>
                      <a
                        href="https://www.facebook.com/share/14Ho6Prv88H/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/rr_technosoft"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/rrtechnosoft/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/@rrtechnosoft2680"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Header */}
        <div className="primary-header" style={{ backgroundColor: "#fff" }}>
          <div className="container">
            <div className="primary-header-inner">
              <div className="header-logo d-lg-block">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>

              <div className="header-menu-wrap">
                <div className="mobile-menu-items">
                  <ul className="sub-menu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>

                    <li className={`menu-item-has-children ${dropdownOpen ? "open" : ""}`}>
                      {/* Parent Menu */}
                      <Link to="#" onClick={handleDropdownToggle}>
                        Services
                      </Link>

                      {/* Dropdown */}
                      {dropdownOpen && (
                        <ul>
                          <li>
                            <Link to="/whatsappsms" onClick={handleCloseDropdown}>
                              Whatsapp SMS
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/whatsappapi"
                              onClick={handleCloseDropdown}
                            >
                              WhatsApp API
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li>
                      <Link to="/contact-us">Book Demo</Link>
                    </li>

                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                    <Link to="/contact-us">Prices</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="header-right-wrap">
                <div className="header-right">
                  <Link to="/login" className="ed-primary-btn header-btn">
                    SignUp
                  </Link>
                  <div className="header-logo d-none d-lg-none">
                    <Link to="/">
                      <img src="assets/img/logo/logo.png" alt="Logo" />
                    </Link>
                  </div>

                  <div className="header-right-item d-lg-none d-md">
                    <span className="mobile-side-menu-toggle" onClick={() => setMenuOpen(true)}>
                      <i className="fa-sharp fa-solid fa-bars"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Popup */}
      <div id="popup-search-box">
        <div className="box-inner-wrap d-flex align-items-center">
          <form method="get">
            <input id="popup-search" type="text" name="s" placeholder="Type keywords here..." />
          </form>
          <div className="search-close">
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      {/* <div className="mobile-side-menu">  */}
      {/* <div className="side-menu-content"> */}
      <div className={`mobile-side-menu ${menuOpen ? "open" : ""}`}>
        <button className="mobile-side-menu-close" onClick={() => setMenuOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <ul className="mobile-menu-list">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>

          <li className="menu-dropdown">
            <div
              className={`menu-title ${coursesOpen ? "active" : ""}`}
              onClick={() => setCoursesOpen(!coursesOpen)}
            >
              <span>Services</span>

              <span className={`icon-box ${coursesOpen ? "open" : ""}`}>
                {coursesOpen ? "-" : "+"}
              </span>
            </div>

            {coursesOpen && (
              <ul>
                <li>
                  <Link to="/devops-training-in-hyderabad" onClick={() => setMenuOpen(false)}>
                    Devops
                  </Link>
                </li>

                <li>
                  <Link to="/data-science-course-in-hyderabad" onClick={() => setMenuOpen(false)}>
                    Data Science
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Book Demo
            </Link>
          </li>
          <li>
            
          </li>
          <li>
            <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="side-menu-wrap"></div>

      {/* <ul className="mobile-menu-list">  */}

      {/* ADDRESS SECTION */}
      {/* <div className="mobile-address">
  <p>
    <i className="fa-light fa-location-dot"></i>
    MIG 63, KPHB, Hyderabad
  </p>

  <p>
    <i className="fa-light fa-phone"></i>
    <Link to="tel:+917680001943">+91 768 000 1943</Link>
  </p>

  <p>
    <i className="fa-light fa-envelope"></i>
    <Link to="mailto:enquiry@rrtechnosoft.in">enquiry@rrtechnosoft.in</Link>
  </p>
</div>
</ul> */}
      <div
        className={`mobile-side-menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </>
  );
};

export default Header;
