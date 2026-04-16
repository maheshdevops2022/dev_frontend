import React from "react";
import about1 from "../assets/img/abt-img1.avif";
import about2 from "../assets/img/abt-img2.jpeg";
import WelcomeContext from "./WelcomeContext";
import "../assets/css/all.css";

const Aboutsection = () => {
  return (
    <section className="about-section-11 pt-120 pb-120">
      <div className="container">
        <div className="row">
          
          {/* Left Side Images */}
          <div className="col-xl-6 col-lg-12">
            <div
              className="about-img-wrap wow fade-in-left"
              data-wow-delay="400ms"
            >
              <div className="about-img-1">
                <img src={about1} alt="about" />
              </div>

              <div className="about-img-2">
                <img src={about2} alt="about" />
              </div>

              <div className="about-contact">
                <div className="icon">
                  <i className="fa-sharp fa-regular fa-phone-volume"></i>
                </div>
                <div className="content">
                  <span>Call Us Now</span>
                  <span>+91 768 000 1943</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-lg-6 col-md-12">
            <WelcomeContext />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Aboutsection;