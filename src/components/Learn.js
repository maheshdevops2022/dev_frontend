import React from "react";
import img from "../assets/img/bg-image2.jpeg";
import "../assets/css/all.css";

const Learn = () => {
  return (
    <section className="cta-section-3 pt-100 pb-100" style={{ backgroundImage: `url(${img})` }}>
      <div className="overlay"></div>

      <div className="container">
        <div className="cta-content cta-content-3 text-center">
          <div className="section-heading text-center white-content mb-20">
            <h2 className="section-title mt-10 wow fade-in-bottom" data-wow-delay="400ms">
              Dev Infotech – Connect. Engage. Grow.
            </h2>
          </div>

          <p className="wow fade-in-bottom" data-wow-delay="500ms">
            At Dev Infotech, we empower businesses with powerful SMS and WhatsApp messaging
            solutions. <br />
            Send bulk messages, share images & videos, and engage your customers with interactive
            polls — all in one platform.
            <br />
            Boost your reach, improve engagement, and grow your business faster with our smart
            messaging services.
          </p>

          <div className="cta-btn-wrap wow fade-in-bottom" data-wow-delay="600ms">
            <a href="/contact-us" className="ed-primary-btn cta-btn-2">
              Book Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
