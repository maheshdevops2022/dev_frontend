import React from "react";
import "../assets/css/all.css";
import img1 from "../assets/img/icons/icon6.png";
import img2 from "../assets/img/icons/icon7.png";
import img3 from "../assets/img/icons/icon8.png";
import img4 from "../assets/img/icons/icon9.png";

const features = [
  {
    icon: img1,
    title: "Instant Message Delivery",
    desc: "Send SMS, images, videos, and polls instantly to thousands of users with fast and reliable delivery.",
    delay: "400ms",
  },
  {
    icon: img2,
    title: "Rich Media Support",
    desc: "Share images, videos, documents, and interactive content to create engaging customer experiences.",
    delay: "500ms",
  },
  {
    icon: img3,
    title: "Bulk Messaging & Automation",
    desc: "Automate campaigns and send bulk messages with ease to reach your audience at the right time.",
    delay: "600ms",
  },
  {
    icon: img4,
    title: "Interactive Poll & Feedback",
    desc: "Create polls and collect customer feedback directly through WhatsApp to improve your services.",
    delay: "700ms",
  },
];
const TrainingFeatures = () => {
  return (
    <section className="feature-section-20 about-feature py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Our Features</h2>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className="p-3 border rounded h-100">

                {/* Icon + Title */}
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={feature.icon}
                    alt="icon"
                    className="img-fluid"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <h6 className="mb-0 text-truncate">
                    {feature.title}
                  </h6>
                </div>

                {/* Description */}
                <p className="mt-3 small text-muted">
                  {feature.desc}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingFeatures;