import React, { useEffect } from "react";
// import Header from './components/header';
// import Footer from './components/footer';
import "./assets/css/all.css";
// import { Helmet } from "react-helmet";
import PrivacyPolicyPage from "./components/seo/privacypolicy/PrivacypolicyPage";

const PrivacyPolicy = () => {
  return (
    <>
      {/* <Header /> */}
      <PrivacyPolicyPage />
      <section className="about-section padding-top-bottom policy-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="about-content policy-box">
                <div className="section-heading text-center mb-4">
                  <h2>Dev Infotechs</h2>
                  <h4>Privacy Policy – Bulk SMS Services</h4>
                  <div className="divider"></div>
                </div>

                <p className="intro">
                  At Dev Infotechs, we value your privacy and are committed to protecting your
                  personal and business information. This Privacy Policy explains how we collect,
                  use, and safeguard data while providing our Bulk SMS Services.
                </p>

                <div className="policy-block">
                  <h5>1. Information We Collect</h5>
                  <ul>
                    <li>Account details (Name, Email, Phone Number)</li>
                    <li>Business information</li>
                    <li>Uploaded contact lists for SMS campaigns</li>
                    <li>Message content and delivery reports</li>
                    <li>Technical data (IP address, browser, device info)</li>
                  </ul>
                </div>

                <div className="policy-block">
                  <h5>2. How We Use Your Information</h5>
                  <ul>
                    <li>To send Bulk SMS campaigns</li>
                    <li>To manage and maintain your account</li>
                    <li>To provide delivery reports and analytics</li>
                    <li>To improve service performance</li>
                    <li>To provide customer support</li>
                  </ul>
                </div>

                <div className="policy-block">
                  <h5>3. Data Security</h5>
                  <p>
                    We implement advanced security measures to protect your data from unauthorized
                    access, loss, or misuse. Your uploaded contact data is encrypted and securely
                    stored.
                  </p>
                </div>

                <div className="policy-block">
                  <h5>4. Data Confidentiality</h5>
                  <p>
                    Dev Infotechs does not sell, rent, or share your data with third parties. Your
                    customer contact lists and SMS content remain strictly confidential.
                  </p>
                </div>

                <div className="policy-block">
                  <h5>5. User Responsibilities</h5>
                  <ul>
                    <li>You must ensure recipients have consent to receive messages</li>
                    <li>No spam, illegal, or abusive content is allowed</li>
                    <li>Compliance with TRAI regulations is mandatory</li>
                  </ul>
                </div>

                <div className="policy-block">
                  <h5>6. Third-Party Integrations</h5>
                  <p>
                    We may use trusted third-party providers for SMS gateway delivery and analytics,
                    ensuring they follow strict data protection standards.
                  </p>
                </div>

                <div className="policy-block">
                  <h5>7. Cookies & Tracking</h5>
                  <ul>
                    <li>Session cookies for login management</li>
                    <li>Analytics to improve user experience</li>
                  </ul>
                </div>

                <div className="policy-block">
                  <h5>8. Compliance</h5>
                  <p>We comply with Indian IT laws and TRAI guidelines for Bulk SMS services.</p>
                </div>

                <div className="policy-block">
                  <h5>9. Your Rights</h5>
                  <ul>
                    <li>Access your data</li>
                    <li>Request corrections</li>
                    <li>Request deletion of your account</li>
                  </ul>
                </div>

                <div className="policy-block">
                  <h5>10. Updates to Policy</h5>
                  <p>
                    This Privacy Policy may be updated periodically. Continued use of our services
                    means you accept the changes.
                  </p>
                </div>

                <div className="contact-box mt-4">
                  <h5>Contact Us</h5>
                  <p>
                    <strong>Company:</strong> Dev Infotechs
                  </p>
                  <p>
                    <strong>Service:</strong> Bulk SMS Solutions
                  </p>
                  <p>
                    <strong>Email:</strong> support@devinfotech.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 XXXXX XXXXX
                  </p>
                </div>

                <p className="footer text-center mt-4">© 2026 Dev Infotechs. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default PrivacyPolicy;
