import React from "react";
import "../assets/css/all.css";

function WelcomeContext() {
  return (
    <div>
      {/* Right Content */}
      <div className="col-lg-12 col-md-12">
        <div className="about-content-11">
          <div className="section-heading mb-10">
            <h4 className="sub-heading wow fade-in-bottom" data-wow-delay="200ms">
              <span className="heading-icon">
                <i className="fa-sharp fa-solid fa-bolt"></i>
              </span>
              About Dev Infotechs
            </h4>

            <h2 className="section-title wow fade-in-bottom" data-wow-delay="400ms">
              Welcome to Dev Infotechs
            </h2>
          </div>

          <p className="wow fade-in-bottom" data-wow-delay="500ms" style={{ textAlign: "justify" }}>
            At Dev Infotechs, we specialize in delivering reliable and scalable bulk messaging
            solutions that help businesses connect with their audience instantly. Based in
            Hyderabad, we provide high-performance Bulk SMS and WhatsApp API services designed to
            enhance customer communication, marketing campaigns, and business engagement.
          </p>

          <p className="wow fade-in-bottom" data-wow-delay="500ms" style={{ textAlign: "justify" }}>
            Our platform enables businesses to send transactional and promotional messages with
            ease, ensuring high delivery rates, real-time tracking, and seamless integration with
            websites, CRMs, and applications. Whether you're a startup or an enterprise, our
            solutions are built to support your communication needs at every stage of growth.
          </p>

          <p className="wow fade-in-bottom" data-wow-delay="500ms" style={{ textAlign: "justify" }}>
            With a focus on performance, security, and user-friendly APIs, we empower businesses to
            automate notifications, OTP services, alerts, and customer engagement workflows. Our
            team ensures smooth onboarding, dedicated support, and customized solutions tailored to
            your business goals.
          </p>

          <p
            className="wow fade-in-bottom mb-3"
            data-wow-delay="500ms"
            style={{ textAlign: "justify" }}
          >
            Join Dev Infotech and transform the way you communicate with your customers through
            fast, secure, and effective messaging solutions that drive results.
          </p>
          <div className="about-btn wow fade-in-bottom" data-wow-delay="800ms">
            <a href="#" className="ed-primary-btn">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeContext;
