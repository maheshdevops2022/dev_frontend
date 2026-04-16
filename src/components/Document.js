import React, { useState } from "react";
import "../assets/css/all.css";

// ✅ Import PDF from src
import pdfFile from "../file/FinOps_Course.pdf";

const Document = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: "", text: "" });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation
  const validateForm = () => {
    if (!formData.name) return "Name is required";
    if (!formData.email) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email";
    if (!formData.phone) return "Phone is required";
    if (!formData.subject) return "Please select a course";
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
      const response = await fetch(
        "https://api.rrtechnosoft.in/api/contact/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setFormMessage({
          type: "success",
          text: "Message sent successfully!",
        });

        // ✅ Auto download PDF from src
        setTimeout(() => {
          const link = document.createElement("a");
          link.href = pdfFile;
          link.download = "FinOps_Course.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 800);

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setFormMessage({
          type: "error",
          text: data.message || "Failed to send message",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setFormMessage({
        type: "error",
        text: "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blog-contact-form contact-form">
      <div className="request-form">
        <form onSubmit={handleSubmit} className="form-horizontal">

          {/* Name */}
          <div className="form-group row">
            <div className="col-md-12">
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
              </div>
            </div>

            {/* Email */}
            <div className="col-md-12">
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
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="form-group row">
            <div className="col-md-12">
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
              </div>
            </div>

            {/* Course */}
            <div className="col-md-12">
              <div className="form-item">
                <select
                  name="subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{ color: "#000" }}
                >
                  <option value="">Select Training</option>
                  <option value="DevOps">DevOps</option>
                  {/* <option value="Data Science">Data Science</option> */}
                  <option value="Data Analytics">Data Analytics</option>
                  {/* <option value="Azure DevOps">Azure DevOps</option> */}
                  {/* <option value="Power BI">Power BI</option> */}
                  <option value="FinOps">FinOps</option>
                </select>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="form-group row">
            <div className="col-md-12">
              <div className="form-item">
                <textarea
                  name="message"
                  rows="3"
                  className="form-control"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ color: "#000", backgroundColor: "#fff" }}
                ></textarea>
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

          {/* Message */}
          {formMessage.text && (
            <div
              className={`alert mt-20 ${
                formMessage.type === "success"
                  ? "alert-success"
                  : "alert-danger"
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

export default Document;