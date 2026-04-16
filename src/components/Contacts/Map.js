import React from "react";

const Map = () => {
  return (
    <section className="contact-section mb-5">
      <div className="container">
        <div className="row gy-lg-0 gy-5">
          <div className="col-lg-12 col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.0089569017046!2d78.39306507421209!3d17.49485789970212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c4ffffffff%3A0x277b2e06ed39cc76!2sRR%20Technosoft%20-%20Devops%20training%20in%20Hyderabad!5e1!3m2!1sen!2sin!4v1754669962675!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;