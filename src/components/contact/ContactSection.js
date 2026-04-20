import React, { useState } from "react";
import "../../assets/css/all.css";
import bgimage3 from "../../assets/img/bg-image3.avif";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      className="cta-section padding-top-bottom"
      style={{ backgroundImage: `url(${bgimage3})` }}
    >
      <div className="container">
        <div className="row gy-lg-0 gy-5">
          <div className="col-xl-6 col-lg-12">
            <div className="about-content">
              <div className="section-heading form-heading-styles mb-40">
                <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms">
                  <span className="heading-icon">
                    <i className="fa-sharp fa-solid fa-bolt"></i>
                  </span>
                  Get in Touch ?
                </h4>

                <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">
                  Have Any Question On Minds ?
                </h2>

                <p className="mt-20 wow fade-in-bottom" data-wow-delay="500ms">
                  Our WhatsApp messaging services help businesses communicate faster, smarter, and
                  more effectively. From bulk messaging and automated responses to personalized
                  campaigns and real-time notifications, we provide complete solutions to enhance
                  customer engagement and drive business growth.
                </p>
              </div>

              <div className="about-counter-items wow fade-in-bottom" data-wow-delay="600ms">
                <div className="about-counter-item">
                  <div className="icon">
                    <i className="fa-regular fa-phone"></i>
                  </div>
                  <div className="content">
                    <p>Call Us Now</p>
                    <h3 className="title">
                      <span>+91 954 253 5632</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
