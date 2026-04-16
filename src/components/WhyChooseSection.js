import React from "react";
import "../assets/css/all.css";
import img1 from "../assets/img/icons/icon10.png";
import img2 from "../assets/img/icons/icon11.png";
import img3 from "../assets/img/icons/icon12.png";
import img4 from "../assets/img/icons/icon13.png";
import img5 from "../assets/img/icons/icon14.png";
import img6 from "../assets/img/icons/icon15.png";
import img7 from "../assets/img/icons/icon16.png";
import img8 from "../assets/img/icons/icon17.png";

const WhyChooseSection = () => {
const features = [
  {
    icon: img1,
    title: "Easy to Get Started",
    description:
      "No technical knowledge required. Start sending SMS and WhatsApp campaigns in minutes.",
  },
  {
    icon: img2,
    title: "Reliable Delivery",
    description:
      "High delivery rates ensure your messages reach customers instantly without delays.",
  },
  {
    icon: img3,
    title: "Smart Campaign Management",
    description:
      "Plan, schedule, and manage your messaging campaigns with ease from a single dashboard.",
  },
  {
    icon: img4,
    title: "Rich Media Messaging",
    description:
      "Send images, videos, documents, and more to create engaging customer interactions.",
  },
  {
    icon: img5,
    title: "Real-time Analytics",
    description:
      "Track message performance, delivery reports, and customer engagement instantly.",
  },
  {
    icon: img6,
    title: "User-Friendly Platform",
    description:
      "Access all features from a simple and intuitive dashboard anytime, anywhere.",
  },
  {
    icon: img7,
    title: "Automation & Bulk Messaging",
    description:
      "Send bulk messages and automate responses to save time and improve efficiency.",
  },
  {
    icon: img8,
    title: "Customer Engagement Tools",
    description:
      "Use polls, quick replies, and interactive messages to connect better with your audience.",
  },
];    

  return (
    <section className="category-section-16 padding-top-bottom">
      <div className="container">
        <div className="section-heading text-center">
          <h2
            className="section-title wow fade-in-bottom"
            data-wow-delay="400ms"
          >
            Why Choose <span>Dev Infotech's</span> 
          </h2>
        </div>

        <div className="category-wrap-16">
          {features.map((item, index) => (
            <div className="cat-item text-center" key={index}>
              <div className="icon">
                <img src={item.icon} alt={item.title} />
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