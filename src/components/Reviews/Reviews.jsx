import React from "react";
import { Content, Div } from "./Reviews.style";
import Reviewsdata from "../Data/Reviewdata";

import girl from "../../assests/girl.png";
const Reviews = () => {
  return (
    <Div>
      <h1>
        Our <span>Reviews</span>{" "}
      </h1>
      <Content>
        {Reviewsdata.map((items, index) => {
          return (
            <>
              <div className="cardd" key={index}>
                <p className="desc">"{items.desc}"</p>
                <img src={girl} alt="food" width={50} />
                <div>
                  <h4 className="title">{items.name}</h4>
                </div>
              </div>
            </>
          );
        })}
      </Content>
    </Div>
  );
};
export default Reviews;
