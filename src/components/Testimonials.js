import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "../assets/css/all.css";

import userImg from "../assets/img/user.png";
import quoteImg from "../assets/img/new-update/icon/quote.png";

const Testimonials = () => {
  const testimonials = [
  {
    text: "This messaging platform helped me reach my customers instantly. Bulk SMS and WhatsApp campaigns improved my business engagement within weeks.",
    name: "Sandeep R.",
    role: "Hr at RRTechnosoft",
  },
  {
    text: "The image and media messaging feature is amazing. I was able to promote my products visually and attract more customers بسهولة.",
    name: "Divya M.",
    role: "Managing Director at Kamala Hospital",
  },
  {
    text: "Using WhatsApp campaigns and automation, I managed to send offers to thousands of users at once. It really boosted my sales.",
    name: "Anil Kumar",
    role: "Principal at Surya Public School",
  },
  {
    text: "The platform is very flexible and easy to use. Scheduling messages and running campaigns saved me a lot of time.",
    name: "Ravi Teja",
    role: "Manager at Vnext",
  },
  {
    text: "Poll messages helped me understand my customers better. Collecting feedback has never been this simple and effective.",
    name: "Pooja Jain",
    role: "Hr at Hitachi",
  },
  {
    text: "The overall messaging experience is smooth and reliable. From SMS to videos, everything works perfectly for my business needs.",
    name: "Imran Shaik",
    role: "Director at UJR",
  },
];

  return (
    <section className="testimonial-section-2 testi-9 testi-11 pt-120 mb-0 pb-120 overflow-hidden padding-top-bottom">
      <div className="container">
        <div className="section-heading text-center">
          <h2
            className="section-title wow fade-in-bottom"
            data-wow-delay="400ms"
          >
            Success Stories From Our Clients
          </h2>
        </div>

        <div className="testi-carousel-wrap-15">
          <Swiper
            className="testi-carousel-15 pb-0"
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            style={{ alignItems: "stretch" }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="d-flex w-100">
                  <div className="testi-item-2 testi-item-9 testi-item-15 d-flex flex-column w-100 h-100">
                    
                    {/* Text */}
                    <p className="flex-grow-1">{item.text}</p>

                    {/* Bottom */}
                    <div className="testi-bottom">
                      <div className="author-info-wrap">
                        <div className="author-img">
                          <img src={userImg} alt="testi" />
                        </div>
                        <div className="author-info">
                          <h4 className="name">{item.name}</h4>
                          <span>{item.role}</span>
                        </div>
                      </div>

                      <img className="quote" src={quoteImg} alt="quote" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Equal Height Fix */}
      <style>
        {`
          .swiper-slide {
            height: auto !important;
            display: flex;
          }

          .swiper-slide > div {
            flex: 1;
            display: flex;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;