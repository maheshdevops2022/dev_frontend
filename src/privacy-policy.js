import React,{useEffect} from "react";
// import Header from './components/header';
// import Footer from './components/footer';
import "./assets/css/all.css";
// import { Helmet } from "react-helmet";
import PrivacyPolicyPage from "./components/seo/privacypolicy/PrivacypolicyPage";

const PrivacyPolicy = () => {
  return (
    <>
    {/* <Header /> */}
    <PrivacyPolicyPage/>
    <section className="about-section padding-top-bottom policy-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11">
            <div className="about-content policy-box">

              <div className="section-heading text-center mb-4">
                <h2>RR TECHNOSOFT</h2>
                <h4>Privacy & Policy</h4>
                <div className="divider"></div>
              </div>

              <p className="intro">
                At RR Technosoft, we are committed to protecting your privacy and safeguarding your personal information.
                This Privacy Policy outlines how we collect, use, store, and protect your data.
              </p>

              <div className="policy-block">
                <h5>1. Information We Collect</h5>
                <p>We collect only the necessary information:</p>
                <ul>
                  <li>Full name, email, and phone number</li>
                  <li>Academic or professional details</li>
                  <li>Payment and billing information</li>
                  <li>Technical data (IP, browser, device)</li>
                  <li>Feedback and communications</li>
                </ul>
              </div>

              <div className="policy-block">
                <h5>2. How We Use Your Information</h5>
                <ul>
                  <li>Course registrations & administration</li>
                  <li>Personalized learning experience</li>
                  <li>Updates, offers & notifications</li>
                  <li>Support & issue resolution</li>
                  <li>Platform improvements</li>
                  <li>Fraud prevention</li>
                </ul>
              </div>

              <div className="policy-block">
                <h5>3. Information Protection</h5>
                <p>
                  We implement strong security measures to protect your data from unauthorized access,
                  misuse, or loss.
                </p>
              </div>

              <div className="policy-block">
                <h5>4. Confidentiality</h5>
                <p>
                  Your information is strictly confidential and will never be sold or shared
                  without legal requirement.
                </p>
              </div>

              <div className="policy-block">
                <h5>5. Consent & Control</h5>
                <ul>
                  <li>Access your data</li>
                  <li>Request corrections</li>
                  <li>Request deletion</li>
                  <li>Withdraw consent</li>
                </ul>
              </div>

              <div className="policy-block">
                <h5>6. Third-Party Services</h5>
                <p>We work with trusted partners for payments and analytics.</p>
              </div>

              <div className="policy-block">
                <h5>7. Communication Preferences</h5>
                <p>You can unsubscribe from marketing emails anytime.</p>
              </div>

              <div className="policy-block">
                <h5>8. Cookies & Analytics</h5>
                <ul>
                  <li>Essential Cookies</li>
                  <li>Analytics Cookies</li>
                  <li>Preference Cookies</li>
                </ul>
              </div>

              <div className="policy-block">
                <h5>9. Regulatory Compliance</h5>
                <p>We comply with applicable Indian data protection laws.</p>
              </div>

              <div className="policy-block">
                <h5>10. Changes to This Policy</h5>
                <p>This policy may be updated periodically.</p>
              </div>

              <div className="contact-box mt-4">
                <h5>Contact Us</h5>
                <p><strong>Company:</strong> RR Technosoft</p>
                <p><strong>Address:</strong> Kukatpally, Hyderabad</p>
                <p><strong>Phone:</strong> +91 768 000 1943</p>
                <p><strong>Email:</strong> enquiry@rrtechnosoft.in</p>
              </div>

              <p className="footer text-center mt-4">
                © 2026 RR Technosoft. All Rights Reserved.
              </p>

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