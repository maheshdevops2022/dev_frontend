import React from "react";
import "../assets/css/all.css";
import shape2 from "../assets/img/new-update-2/shapes/cta-shape-2.png";
import shape3 from "../assets/img/new-update-2/shapes/cta-shape-3.png";
import shape4 from "../assets/img/new-update-2/shapes/cta-shape-4.png";
import shape1 from "../assets/img/new-update-2/shapes/cta-shape-1.png";
import men from "../assets/img/new-update-2/cta-men.png";

const CTASection = () => {
  return (
    <section className="cta-section-11 overflow-hidden">
      <div className="cta-bg-shape-1">
        <img src={shape2} alt="shape" />
      </div>
      <div className="cta-bg-shape-2">
        <img src={shape3} alt="shape" />
      </div>
      <div className="cta-bg-shape-3">
        <img src={shape4} alt="shape" />
      </div>

      <div className="container">
        <div className="cta-wrap-11 pt-120 pb-120">
          <div className="cta-content">
            <div className="section-heading mb-30 white-content">
              {/* <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms">
                <span className="heading-icon">
                  <i className="fa-sharp fa-solid fa-bolt"></i>
                </span>
                Top Class Courses
              </h4> */}

              <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">
                Dev Infotechs is a WhatsApp Bulk Messaging
              </h2>
            </div>

            <p>
              Send thousands of messages instantly to your customers using our <br /> WhatsApp API.
              Promote offers, updates, and announcements <br />with high delivery rates.
            </p>
            <p>
              Automate replies, customer support, and notifications with smart <br /> WhatsApp chatbots.
              Provide 24/7 instant responses and improve <br />customer engagement.
            </p>
          </div>

          <div className="bg-item">
            <div className="cta-shape-1">
              <img src={shape1} alt="shape" />
            </div>
          </div>

          <div className="cta-img-wrap-11">
            <div className="cta-men">
              <img src={men} alt="cta" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
