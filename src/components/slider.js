import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "../assets/css/all.css";
/* ✅ Import Images */
import slide1 from "../assets/img/slides/slide1.png";
import slide2 from "../assets/img/slides/slide2.png";
import slide3 from "../assets/img/slides/slide3.png";
import slide4 from "../assets/img/slides/slide4.png";
import slide5 from "../assets/img/slides/slide5.png";


const SliderSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = [
  {
    img: slide1,
    title: "Send Bulk SMS Instantly",
    desc: "Reach thousands of customers with fast and reliable SMS delivery",
  },
  {
    img: slide2,
    title: "Powerful WhatsApp Messaging",
    desc: "Connect with your audience using WhatsApp API for better engagement",
  },
  {
    img: slide3,
    title: "Share Images & Videos",
    desc: "Promote your products with rich media messaging and boost conversions",
  },
  {
    img: slide4,
    title: "Run Smart Campaigns",
    desc: "Schedule, automate, and manage campaigns with ease from one dashboard",
  },
  {
    img: slide5,
    title: "Engage with Poll Messages",
    desc: "Collect feedback and understand your customers with interactive polls",
  },
];

  return (
    <section className="slider-section overflow-hidden">

      {/* ✅ Main Slider */}
      <Swiper
        modules={[Thumbs, Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="edcare-slider swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slider-item">

              {/* ✅ Background Image */}
              <div
                className="bg-img"
                style={{ backgroundImage: `url(${slide.img})` }}
              ></div>

              <div className="overlay"></div>
              <div className="overlay-2"></div>

              <div className="container">
                <div className="slider-content-wrap">
                  <div className="slider-content">

                    <div className="sub-heading-wrap">
                      <h4 className="sub-heading">
                        Welcome to Dev Infotechs
                      </h4>
                    </div>

                    <div className="edcare-caption heading">
                      <div className="inner-layer">
                        <div className="edcare-cap">
                          <span>{slide.title}</span>
                        </div>
                      </div>
                    </div>

                    <div className="edcare-slider-desc">
                      <p>{slide.desc}</p>
                    </div>

                    <div className="slider-btn-wrap">
                      <a
                        className="ed-primary-btn slider-btn read-more-styles"
                        href="#"
                      >
                        Explore More
                      </a>

                      <a
                        className="ed-primary-btn slider-btn read-more-styles"
                        href="/contact-us"
                      >
                        Book Demo Now
                      </a>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
<Swiper
  onSwiper={setThumbsSwiper}
  direction="vertical"          // ✅ vertical
  slidesPerView={3}             // ✅ show 3 items
  spaceBetween={10}
  watchSlidesProgress={true}
  className="swiper edcare-slider-thumb"
  style={{ height: "240px",marginTop: "-20px"  }}   // ✅ required for vertical
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <div className="slider-thumb-item">
        <img src={slide.img} alt={`thumb-${index}`} />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
  );
};

export default SliderSection;