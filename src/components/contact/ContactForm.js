import React, { useState } from "react";
import "../../assets/css/all.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: "", text: "" });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simple validation
  const validateForm = () => {
    if (!formData.name) return "Name is required";
    if (!formData.email) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email";
    if (!formData.phone) return "Phone is required";
    if (!formData.service) return "Please select a course";
    if (!formData.message) return "Message is required";
    return null;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setFormMessage({ type: "error", text: error });
      return;
    }

    setLoading(true);
    setFormMessage({ type: "", text: "" });

    try {
      const response = await fetch("https://api.rrtechnosoft.in/api/contact/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormMessage({ type: "success", text: "Message sent successfully!" });

        // Reset form (optional but recommended)
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        // 🔥 Auto reload after 2 seconds
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setFormMessage({ type: "error", text: data.message || "Failed to send message" });
      }
    } catch (error) {
      console.error("Error:", error);
      setFormMessage({ type: "error", text: "Something went wrong!" });
    }
  };

  return (
    <div className="blog-contact-form contact-form">
      <div className="request-form">
        <form onSubmit={handleSubmit} className="form-horizontal">
          {/* Name + Email */}
          <div className="form-group row">
            <div className="col-md-6">
              <div className="form-item">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ color: "#000", backgroundColor: "#fff" }}
                />
                <div className="icon">
                  <i className="fa-regular fa-user"></i>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-item">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ color: "#000", backgroundColor: "#fff" }}
                />
                <div className="icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Phone + Subject */}
          <div className="form-group row">
            <div className="col-md-6">
              <div className="form-item">
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Phone No"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ color: "#000", backgroundColor: "#fff" }}
                />
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-item" style={{ position: "relative" }}>
                <select
                  name="service"
                  className="form-control"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    color: "#fff", // typed text black
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    paddingRight: "30px", // space for arrow
                  }}
                >
                  <option value="">Select Services</option>
                  <option value="any">Any other services</option>
                  <option value="Images">Images</option>
                  <option value="Poll Message">Poll Message</option>
                  <option value="Video Messaging">Video Messaging</option>
                  <option value="SMS">SMS Services</option>
                </select>

                {/* Custom white arrow */}
                <span
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    fontSize: "14px",
                    color: "#fff", // arrow color white
                  }}
                >
                  ▼ 8th floor 820, manjeera majestic commercial, KPHB, Hyderabad - 500072., Near
                  JNTU Signal, KPHB, Hyderabad, Telangana
                </span>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="form-group row">
            <div className="col-md-12">
              <div className="form-item message-item">
                <textarea
                  name="message"
                  cols="30"
                  rows="3"
                  className="form-control address"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ color: "#000", backgroundColor: "#fff" }}
                ></textarea>
                <div className="icon">
                  <i className="fa-light fa-messages"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="submit-btn">
            <button
              className="ed-primary-btn submit-message-styles"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit Message"}
            </button>
          </div>

          {/* Inline form message */}
          {formMessage.text && (
            <div
              className={`alert mt-20 ${
                formMessage.type === "success" ? "alert-success" : "alert-danger"
              }`}
            >
              {formMessage.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
