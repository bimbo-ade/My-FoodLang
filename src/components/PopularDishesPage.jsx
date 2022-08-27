import React from "react";
import styled from "styled-components";
import PopularDishesCard from "./PopularDishesCard";
const PopularDishesPage = () => {
  return (
    <>
      <Div>
        <h1>
          Popular <span>Dishes</span>{" "}
        </h1>
        <PopularDishesCard />
      </Div>
    </>
  );
};
const Div = styled.div`
width: 90%;
margin: 2rem auto;

h1 {
width: 25rem;
font-size: 1.5rem;
span {
  color: #ff2156;
}
`;

export default PopularDishesPage;
