import React, { useState } from "react";
import styled from "styled-components";
import PopularDishesData from "./Data/PopularDishesData";

const CardItem = (items) => {
  const [name, setName] = useState("Add to Cart");

  const changeName = () => {
    setName("Added to Cart");
  };
  return (
    <>
      <div className="cardd">
        <div className="img">
          <img src={items.img} alt="food" />
        </div>

        <div>
          <h4 className="title">{items.title}</h4>

          <p className="desc">{items.desc}</p>
          <h6 className="price"> ${items.price}</h6>
          <button className="btn" onClick={changeName}>
            {name}
          </button>
        </div>
      </div>
    </>
  );
};

const PopularDishesCard = (items) => {
  return (
    <Div>
      <div key={items.id} className="card">
        {PopularDishesData.map(CardItem)}
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
  }
  .cardd {
    margin-top: 2rem;
    height: 320px;
    width: 220px;
    // border: 1px solid #ffd1dc;
    box-shadow: 0 0 7px 2px #eeeeee;
    border-radius: 1rem;

    text-align: center;
  }
  .img {
    height: 50%;
    width: 100%;
    margin: 1rem auto 0;
  }
  img {
    height: 80%;
    width: 80%;
    object-fit: cover;
    align-items: center;
    margin: auto;
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
    margin-top: 0.5rem;
    padding: 0.5rem 0.5rem;
    border-radius: 2rem;
    border: 1px solid #ff2156;
    background-color: transparent;
    color: #ff2156;
    font-weight: 700;
    font-size: 0.6rem;
  }
`;
export default PopularDishesCard;
