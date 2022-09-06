import React from "react";
import { Content, Div } from "./Reviews.style";
import Reviewsdata from "../../Data/Reviewdata";

import Images from "../../assests/images";
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
              <div className="card-cont" key={index}>
                <p className="desc">"{items.desc}"</p>
                <img src={Images.girl} alt="food" width={40} />
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
