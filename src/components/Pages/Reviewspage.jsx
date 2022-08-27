import React from "react";
import styled from "styled-components";
import Reviewscard from "../Reviewscard";
const Reviewspage = () => {
  return (
    <Div>
      <h1>
        Our <span>Reviews</span>{" "}
      </h1>
      <Reviewscard />

      <button> See All</button>
    </Div>
  );
};
const Div = styled.div`
  width: 80%;
  margin: 4rem auto 0;
  dispaly: flex;
  text-align: center;

  h1 {
    margin-top: 4rem;
    font-size: 1.5rem;
    span {
      color: #ff2156;
    }
  }
  button {
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    border: 0;
    background-color: #ff2156;
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
    margin: 3rem 0;
  }
`;

export default Reviewspage;
