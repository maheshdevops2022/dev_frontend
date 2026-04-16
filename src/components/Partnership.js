import React from "react";
import "../assets/css/all.css";

import img1 from "../assets/img/placements/icon-1.jpg";
import img2 from "../assets/img/placements/icon-2.jpg";
import img3 from "../assets/img/placements/icon-3.jpg";
import img4 from "../assets/img/placements/icon-4.jpg";
import img5 from "../assets/img/placements/icon-5.jpg";

const images = [img1, img2, img3, img4, img5];

const Partnership = () => {
  return (
    <div className="sponsor-section padding-top-bottom bg-grey">
      
      <div className="section-heading text-center mb-4">
        <h2 className="section-title">Our Clients</h2>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {images.map((img, index) => (
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mb-4 d-flex"
              key={index}
            >
              <div className="partner-card w-100">
                <img src={img} alt={`partner-${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Partnership;