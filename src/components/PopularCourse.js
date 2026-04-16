import React from "react";
import "../assets/css/all.css";
import img1 from "../assets/img/images/popular-men-1.png"
import img2 from "../assets/img/shapes/popular-shape-1.png"
import img3 from "../assets/img/shapes/popular-shape-2.png"
import img4 from "../assets/img/images/popular-men-2.png"


const PopularCourse = () => {
  return (
    <section className="popular-course padding-top-bottom">
      <div className="container">
        <div className="row gy-lg-0 gy-4">
          
          {/* Item 1 */}
          <div className="col-lg-6 col-md-12">
            <div className="popular-item wow fade-in-bottom" data-wow-delay="400ms">
              <div className="men">
                <img src={img1} alt="popular" />
              </div>

              <div className="shapes">
                <div className="shape shape-1">
                  <img src={img2} alt="shape" />
                </div>
                <div className="shape shape-2">
                  <img src={img3} alt="shape" />
                </div>
              </div>

              <span>Develop Your Business</span>
              <h3 className="title">
                Become a user, get the best messaging services, <br /> and grown your business.
              </h3>

              <a href="#" className="ed-primary-btn">
                With Whatsapp Services <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Item 2 */}
          <div className="col-lg-6 col-md-12">
            <div className="popular-item wow fade-in-bottom" data-wow-delay="500ms">
              <div className="men">
                <img src={img4} alt="popular" />
              </div>

              <div className="shapes">
                <div className="shape shape-1">
                  <img src={img2} alt="shape" />
                </div>
                <div className="shape shape-2">
                  <img src={img3} alt="shape" />
                </div>
              </div>

              <span>Develop Your Business</span>
              <h3 className="title">
              Engage your customers with<br />smart messaging and <br />elevate your business
              </h3>

              <a href="#" className="ed-primary-btn">
                with WhatsApp services <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PopularCourse;