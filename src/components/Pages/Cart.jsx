import React from "react";
import styled from "styled-components";
import Cartdata from "../Cartdata";
import burger from "../../assests/burger.jpeg";

const Cart = () => {
  return (
    <>
      <Header>Shopping Cart</Header>
      <Div>
        <div className="left">
          <Cartdata />
        </div>{" "}
        <div className="right">
          <img src={burger} alt="burger" width={500} />
        </div>
      </Div>
    </>
  );
};
const Header = styled.div`
  text-align: center;
  margin-top: 3rem;
  font-weight: 600;
  font-size: 1.4rem;
`;
const Div = styled.div`
  margin: 3rem auto 0;
  width: 90%;

  display: grid;
  grid-template-columns: 55% 45%;

  .left {
    height: auto;
  }

  .right {
    margin-left: 2rem;
  }
`;

export default Cart;
