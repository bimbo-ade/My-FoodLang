import React from "react";
import { Cont, Div } from "./Home.style";
import banner from "../../../assests/banner.png";
import Ads from "../../Ads/Ads";
import PopularDishesPage from "../../PopularDishes/PopularDishes";
import Reviews from "../../Reviews/Reviews";
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
          <img src={banner} alt="banner" />
        </div>
      </Div>
      <PopularDishesPage />
      <Reviews />
      <Ads />
    </Cont>
  );
};
export default Home;