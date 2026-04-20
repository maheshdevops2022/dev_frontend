import React from "react";
//import about1 from "../assets/img/abt-img2.jpeg";
import about2 from "../assets/img/abt-img1.png";
import shape1 from "../assets/img/new-update-2/shapes/about-shape-2.png";
import shape2 from "../assets/img/new-update-2/shapes/about-shape-3.png";
import WelcomeContext from "./WelcomeContext";
import "../assets/css/all.css";

const HomeSection = () => {
  return (
    <section className="about-section-11 pt-120 pb-120">
      <div className="shape-1">
        <img src={shape1} alt="shape" />
      </div>
      <div className="shape-2">
        <img src={shape2} alt="shape" />
      </div>

      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Images */}
          <div className="col-lg-6 col-md-12">
            <div
              className="about-img-wrap-11 wow fade-in-left"
              data-wow-delay="400ms"
            >
            {/* //   <div className="about-img-1">
            //     <img src={about1} alt="about" />
          </div> */}
              <div className="about-img-2">
                <img src={about2} alt="about" />
              </div>

              {/* <div className="about-exp">
                <h3 className="title">
                  <span className="odometer" data-count="18">
                    1
                  </span>
                </h3>
                <p>
                  Years Of <br /> Experience
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
          <WelcomeContext/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;