import React from "react";
import styled from "styled-components";
import banner from "../assests/banner.png";
import Data from "./Data/PopularDishesData";
import { IoIosClose } from "react-icons/io";
const cardItem = (items) => {
  return (
    <>
      <div className="cardd">
        <img src={banner} alt="food" width={100} />

        <div>
          <h4 className="title">{items.title}</h4>
          <p className="desc">{items.desc}</p>
        </div>
        <div>
          <button className="btn">-</button>
          <button className="btn">1</button>
          <button className="btn">+</button>
        </div>
        <h6 className="price"> ${items.price}</h6>

        <IoIosClose />
      </div>
    </>
  );
};

const Cartdata = () => {
  return (
    <>
      <Div>
        <div className="card">{Data.map(cardItem)}</div>
      </Div>
      <Sum>
        Subtotal : <span> $200</span>
      </Sum>
    </>
  );
};
const Sum = styled.p`
  text-align: center;
  margin-top: 2rem;

  span {
    font-weight: 700;
  }
`;
const Div = styled.div`
  .card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .cardd {
    display: flex;
    align-items: center;

    justify-content: space-evenly;
    margin-bottom: 1rem;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
  }
  img {
    margin-top: 1rem;
  }
  .title {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }
  .price {
    margin-top: 0.7rem;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
  }
  .desc {
    font-size: 0.7rem;
  }
  .btn {
    margin-left: 0.5rem;
    padding: 0.3rem 0.9rem;

    border: 1px solid #e0e0e0;
    background-color: transparent;
    color: #ff2156;
    font-weight: 500;
    font-size: 0.9rem;
  }
  svg {
    font-size: 1.3rem;
  }
`;
export default Cartdata;
