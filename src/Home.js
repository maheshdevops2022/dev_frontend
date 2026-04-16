import React, { useEffect } from "react";
//import logo from './logo.svg';
//import Header from './components/Header';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Slider from "./components/slider";
import HomeSection from "./components/HomeSection";
import CoursesSection from "./components/CoursesSection";
import CTASection from "./components/CTASection";
import CourseCategory from "./components/CourseCategory";
import Learn from "./components/Learn";
import WhyChooseSection from "./components/WhyChooseSection";
import ContactSection from "./components/contact/ContactSection";
import Partnership from "./components/Partnership";
import PopularCourse from "./components/PopularCourse";
import Testimonials from "./components/Testimonials";
import TrainingFeatures from "./components/TrainingFeatures";
//import Footer from './components/footer';
import { Helmet } from "react-helmet";
import HomePage from "./components/seo/home/HomePage";

function Home() {
  return (
    <div>
      {/* <Header/> */}
      <HomePage/>
      <Slider />
      <HomeSection />
      <CoursesSection />
      {/* <CTASection /> */}
      {/* <CourseCategory /> */}
      <Learn />
      <TrainingFeatures />
      <WhyChooseSection />
      <ContactSection />
      <Partnership />
      <PopularCourse />
      <Testimonials />
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
