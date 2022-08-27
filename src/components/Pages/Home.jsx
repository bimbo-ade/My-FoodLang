import React from "react";
import styled from "styled-components";
import banner from "../../assests/banner.png";
import Ads from "../Ads";
import PopularDishesPage from "../PopularDishesPage";
import Reviews from "../Reviews";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Cont>
      <Div>
        <div className="text">
          <h1>
            Lets speak your<span> Food Language</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, cupiditate necessitatibus quos iure aut obcaecati
            aspernatur distinctio illo quisquam totam quidem, odit numquam
            sapiente nisi sit. Nulla doloremque.{" "}
          </p>
          <button>
            {" "}
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "500",
                fontSize: " 0.9rem",
              }}
            >
              {" "}
              Get Started
            </Link>
          </button>
        </div>
        <div className="img">
          <img src={banner} alt="banner" width={600} />
        </div>
      </Div>
      <PopularDishesPage />
      <Reviews />
      <Ads />
    </Cont>
  );
};

const Cont = styled.div`
  width: 90%;
  margin: auto;
`;

const Div = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  height: 90vh;

  h1 {
    width: 25rem;
    font-size: 2.4rem;
    span {
      color: #ff2156;
    }
  }
  p {
    font-size: 0.9rem;
    margin-top: 0.6rem;
  }

  button {
    margin-top: 1.5rem;
    padding: 0.6rem 1.5rem;
    border-radius: 2rem;
    border: 0;
    background-color: #ff2156;
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
  }
  .img {
    margin-top: 3rem;
    margin-left: 3rem;
    display: flex;
    align-items: center;
    background-color: #ffd1dc;
    height: 23rem;
    width: 30rem;
    border-radius: 50%;
  }
`;

export default Home;
