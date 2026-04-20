import React from "react";
import devops from "../assets/img/icons/icon1.png";
import python from "../assets/img/icons/icon2.png";
import WhatsappApi from "../assets/img/icons/icon3.png";
import DataAnalysis from "../assets/img/icons/icon4.png";
import "../assets/css/all.css";


const services = [
  {
    title: "SMS Services",
    icon: devops,
    delay: "300ms",
    description:
      "Send bulk SMS messages instantly to your customers with high delivery rates. Perfect for alerts, promotions, and notifications.",
  },
  {
    title: "Image Messaging",
    icon: python,
    delay: "400ms",
    description:
      "Engage users with visually appealing image messages. Share offers, posters, and product visuals directly on WhatsApp.",
  },
  {
    title: "Video Messaging",
    icon: WhatsappApi,
    delay: "500ms",
    description:
      "Boost engagement with video campaigns. Send product demos, ads, and personalized to your audience and customers.",
  },
  {
    title: "Poll Messages",
    icon: DataAnalysis,
    delay: "600ms",
    description:
      "Collect feedback and insights using interactive polls. Understand customer preferences and improve your services easily.",
  },
];

const CoursesSection = () => {
  return (
    <section className="feature-section-5 padding-top-bottom">
      <div className="container">
        <div className="section-heading text-center">
          <h2
            className="section-title wow fade-in-bottom"
            data-wow-delay="400ms"
          >
            Our Services
          </h2>
        </div>

        <div className="row gy-lg-0 gy-4 justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div
                className="feature-card feature-card-2 text-center wow fade-in-bottom"
                data-wow-delay={service.delay}
              >
                <div className="icon">
                  <img src={service.icon} alt={service.title} />
                </div>

                <div className="content">
                  <h3 className="title">{service.title}</h3>
                  <p>
                    {service.description}.
                  </p>

                  <a href="#" className="ed-primary-btn">
                    Learn More{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;