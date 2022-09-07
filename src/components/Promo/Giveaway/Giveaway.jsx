import React from "react";
import images from "../../Carousel/images";
import { Div, Slides } from "./Giveaway.style";
import Timer from "../Timer/Timer";
import Carousel from "../../Carousel/carousel";
const Giveaway = () => {
  return (
    <Slides>
      <Carousel images={images} className="slider" />

      <Div>
        <div className="card-cont">
          <div className="left-cont">
            <h6>PROMO! PROMO!! </h6>
            <h2> Get Your Food Language Spoken For Free!!</h2>
            <p className="">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. dolor
              sit amet consectetu Sed.
            </p>
            <Timer />
          </div>
          {/* <div className="right">
            <img src={Images.Breakfast1} alt="ads" width={400} />
          </div> */}
        </div>
      </Div>
    </Slides>
  );
};

export default Giveaway;
