import React from "react";
import "../assets/css/all.css";
import img1 from "../assets/img/icon/category-1.png"
import img2 from "../assets/img/icon/category-2.png"
import img3 from "../assets/img/icon/category-3.png"
import img4 from "../assets/img/icon/category-4.png"
import img5 from "../assets/img/icon/category-5.png"
import img6 from "../assets/img/icon/category-6.png"
const CourseCategory = () => {
  return (
    <section className="course-category padding-top-bottom">
      <div className="container">
        <div className="section-heading text-center">
          <h2
            className="section-title wow fade-in-bottom"
            data-wow-delay="400ms"
          >
            Launch a High-Growth Career in IT & Software With Us
          </h2>
        </div>

        <div
          className="category-items wow fade-in-bottom"
          data-wow-delay="500ms"
        >
          <div className="category-item">
            <a href="#">
              <span>
                <img src={img1} alt="icon" />
              </span>
              Online Training
            </a>
          </div>

          <div className="category-item">
            <a href="#">
              <span>
                <img src={img2} alt="icon" />
              </span>
              Classroom Training
            </a>
          </div>

          <div className="category-item">
            <a href="#">
              <span>
                <img src={img3} alt="icon" />
              </span>
              Corporate Training
            </a>
          </div>
        </div>

        <div
          className="category-items wow fade-in-bottom"
          data-wow-delay="600ms"
        >
          <div className="category-item">
            <a href="#">
              <span>
                <img src={img4} alt="icon" />
              </span>
              Weekend Master Classes
            </a>
          </div>

          <div className="category-item">
            <a href="#">
              <span>
                <img src={img5} alt="icon" />
              </span>
              Placements
            </a>
          </div>

          <div className="category-item">
            <a href="#">
              <span>
                <img src={img6} alt="icon" />
              </span>
              Internships
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCategory;