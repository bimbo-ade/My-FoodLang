import React from "react";
import styled from "styled-components";
import Reviewscard from "./Reviewscard";
const Reviews = () => {
  return (
    <Div>
      <h1>
        Our <span>Reviews</span>{" "}
      </h1>
      <Reviewscard />
    </Div>
  );
};
const Div = styled.div`
  width: 90%;
  margin: 7rem auto 0;

  h1 {
    width: 25rem;
    font-size: 1.5rem;
    span {
      color: #ff2156;
    }
  }
`;

export default Reviews;
