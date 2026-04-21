import React, { useState, useEffect } from "react";
import images from "../src/assets/img/whatsapp.png";

const WhatsappApi = () => {
  return (
    <>
      <div
        className="image"
        style={{
          backgroundImage: `url(${images})`,
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
};

export default WhatsappApi;


