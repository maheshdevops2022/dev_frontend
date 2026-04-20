import React from "react";
import "../assets/css/all.css"; // font awesome

const WhyChooseSection = () => {
  const features = [
    {
      icon: "fa-rocket",
      title: "Easy to Get Started",
      description:
        "No technical knowledge required. Start sending SMS and WhatsApp campaigns in minutes.",
    },
    {
      icon: "fa-paper-plane",
      title: "Reliable Delivery",
      description:
        "High delivery rates ensure your messages reach customers instantly without delays.",
    },
    {
      icon: "fa-calendar-check",
      title: "Smart Campaign Management",
      description:
        "Plan, schedule, and manage your messaging campaigns with ease from a single dashboard.",
    },
    {
      icon: "fa-photo-film",
      title: "Rich Media Messaging",
      description:
        "Send images, videos, documents, and more to create engaging customer interactions.",
    },
    {
      icon: "fa-chart-line",
      title: "Real-time Analytics",
      description:
        "Track message performance, delivery reports, and customer engagement instantly.",
    },
    {
      icon: "fa-laptop",
      title: "User-Friendly Platform",
      description:
        "Access all features from a simple and intuitive dashboard anytime, anywhere.",
    },
    {
      icon: "fa-robot",
      title: "Automation & Bulk Messaging",
      description:
        "Send bulk messages and automate responses to save time and improve efficiency.",
    },
    {
      icon: "fa-comments",
      title: "Customer Engagement Tools",
      description:
        "Use polls, quick replies, and interactive messages to connect better with your audience.",
    },
  ];

  return (
    <section className="category-section-16 padding-top-bottom">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title">
            Why Choose <span>Dev Infotechs</span>
          </h2>
        </div>

        <div className="category-wrap-16">
          {features.map((item, index) => (
            <div className="cat-item text-center" key={index}>
              <div className="icon">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h3 className="title">{item.title}</h3>
              <span>{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;