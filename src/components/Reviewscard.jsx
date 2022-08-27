import React from "react";
import styled from "styled-components";
import girl from "../assests/girl.png";
import Reviewsdata from "./Data/Reviewdata";
const cardItem = (items) => {
  return (
    <>
      <div className="cardd">
        <p className="desc">"{items.desc}"</p>
        <img src={girl} alt="food" width={50} />
        <div>
          <h4 className="title">{items.name}</h4>
        </div>
      </div>
    </>
  );
};

const Reviewscard = (items) => {
  return (
    <Div>
      <div key={items.id} className="card">
        {Reviewsdata.map(cardItem)}
      </div>
    </Div>
  );
};
const Div = styled.div`
  // margin-top: 1rem;
  .card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    // width: 90%;
    // margin: 0 auto;
  }
  .cardd {
    margin-top: 2rem;
    height: 220px;
    width: 320px;
    // border: 1px solid #ffd1dc;
    box-shadow: 0 0 7px 2px #eeeeee;
    border-radius: 1rem;
    // background-color: #fff5f7;
    text-align: left;
    padding-left: 0.8rem;
  }
  img {
    border-radius: 50%;
    margin-top: 0.6rem;
  }
  .title {
    color: #9b0c26;
    font-size: 1rem;
    font-wright: 700;
    margin-top: 0.4rem;
  }

  .desc {
    height: 35%;
    padding: 0.6rem;
    font-size: 0.8rem;
    margin-top: 1rem;
    font-weight: 500;
  }
`;
export default Reviewscard;
