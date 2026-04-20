import React from "react";
import ContactForm from "./ContactForm";

const ContactInfo = () => {
  return (
    <section className="contact-section padding-top-bottom">
      <div className="container">
        <div className="row gy-lg-0 gy-5">
          <div className="col-lg-5 col-md-12">
            <div className="contact-content">
              <div className="contact-top">
                <h3 className="title mb-3">Office Information</h3>
              </div>

              <div className="contact-list">
                {/* Phone */}
                <div className="list-item">
                  <div className="icon">
                    <i className="fa-sharp fa-solid fa-phone"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Phone Number</h4>
                    <span>
                      <a href="tel:+919542535632">+91 954 253 5632</a>
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="list-item">
                  <div className="icon">
                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Mail Id</h4>
                    <span>
                      <a href="mailto:enquiry@rrtechnosoft.in">
                        enquiry@rrtechnosoft.in
                      </a>
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="list-item">
                  <div className="icon">
                    <i className="fa-sharp fa-solid fa-clock"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Address</h4>
                    <span>
                      MIG 63, 1st floor, Dharma Reddy Colony, Beside ICICI
                      Bank, Near JNTU Signal, KPHB, Hyderabad, Telangana, India
                      - 500072
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;