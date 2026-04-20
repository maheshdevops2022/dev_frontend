import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const response = await axios.post(
  //       "https://127.0.0.1:8000/api/contact/contact/",
  //       formData
  //     );
  //     setResponseMessage(response.data.message);
  //     setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  //   } catch (error) {
  //     setResponseMessage("Something went wrong. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.rrtechnosoft.in/api/contact/contact/",
        formData
      );

      setResponseMessage(response.data.message);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setResponseMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blog-contact-form contact-form">
      <h2 className="title mb-3">Submit</h2>
      <form onSubmit={handleSubmit} className="request-form">
        {/* Name & Email */}
        <div className="form-group row">
          <div className="col-md-6">
            <div className="form-item">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => {
                  const onlyText = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                  handleChange({
                    target: {
                      name: "name",
                      value: onlyText,
                    },
                  });
                }}
                className="form-control form-control2"
                placeholder="Your Name"
                required
                style={{ color: "#000" }}
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
                value={formData.email}
                onChange={handleChange}
                className="form-control form-control2"
                placeholder="Your Email"
                required
                style={{ color: "#000" }} // Black text
              />
              <div className="icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Phone & Subject */}
        <div className="form-group row">
          <div className="col-md-6">
            <div className="form-item">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                className="form-control form-control2"
                placeholder="Your Phone No"
                style={{ color: "#000" }}
              />
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-item">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="niceSelect select-control form-control form-control2 contact-field-styles"
                required
                style={{ color: formData.service ? "#000" : "#888" }} // Black text if selected, gray placeholder
              >
                <option value="">Select Service</option>
                <option value="all services">All Services</option>
                <option value="sms">Whatsapp SMS</option>
                <option value="image">Image Messaging</option>
                <option
                  value="poll>Poll Messaging</option>

                <option value=video"
                >
                  Video Messaging
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="form-group row">
          <div className="col-md-12">
            <div className="form-item message-item">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols="30"
                rows="5"
                className="form-control address form-control2 contact-field-styles"
                placeholder="Message"
                required
                style={{ color: "#FFF" }} // Black text
              ></textarea>
              <div className="icon">
                <i className="fa-regular fa-comment-dots"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="submit-btn">
          <button className="ed-primary-btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit Message"}
          </button>
        </div>
      </form>

      {/* Response Message */}
      {responseMessage && (
        <div id="form-messages" className="alert mt-20">
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
