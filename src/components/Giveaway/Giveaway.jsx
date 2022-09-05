import React, { useEffect, useState } from "react";
import Images from "../../assests/images";
import images from "../Carousel/images";
import { Div, Slides } from "./Giveaway.style";
import Timer from "../Timer/Timer";
import ImageSlider from "../Carousel/carousel";
const Giveaway = () => {
  return (
    <Slides>
      <ImageSlider images={images} className="slides" />

      <Div>
        <div className="card">
          <div className="left">
            <h6>PROMO! PROMO!! </h6>
            <h2> Get Your Food Language Spoken For Free!!</h2>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. dolor
              sit amet consectetu Sed tempora a rerum consectetur adipisicing
              elit.
            </p>
            <Timer />
          </div>
          <div className="right">
            {/* <img src={Images.Breakfast1} alt="ads" width={400} /> */}
          </div>
        </div>
      </Div>
    </Slides>
  );
};

export default Giveaway;
