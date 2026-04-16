import React,{useEffect} from "react";
//import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CTASection from "./components/CTASection";
import CourseCategory from "./components/CourseCategory";
import Learn from "./components/Learn";
import WhyChooseSection from "./components/WhyChooseSection";
import ContactSection from "./components/contact/ContactSection";
import Partnership from "./components/Partnership";
import PopularCourse from "./components/PopularCourse";
import Testimonials from "./components/Testimonials";
//import Footer from "./components/footer";
import TrainingFeatures from "./components/TrainingFeatures";
import img from "./assets/img/services/about-us.webp";
import Aboutsection from "./components/AboutSection";
import "./assets/css/all.css";
import { Helmet } from "react-helmet";
import AboutPage from "./components/seo/about/AboutPage";

function Aboutus() {
  return (
    <div>
      {/* <Header /> */}
      <AboutPage/>
      {/* Page Header */}
      <section className="page-header">
        <div className="bg-item">
          <div
  className="bg-img"
  style={{
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",       // makes image fill screen
    backgroundPosition: "center",  // keeps it centered
    backgroundRepeat: "no-repeat", // prevents tiling
    width: "100%",
    height: "100vh"                // full screen height
  }}
></div>
        </div>

        <div className="container">
          <div className="page-header-content">
            <h1 className="title text-center">About Us</h1>
          </div>
        </div>
      </section>

      {/* Sections */}
      <Aboutsection />
      <CTASection />
      <CourseCategory />
      <Learn />
      <TrainingFeatures />
      <WhyChooseSection />
      <ContactSection />
      <Partnership />
      <PopularCourse />
      <Testimonials />
      {/* <Footer /> */}
    </div>
  );
}

export default Aboutus;