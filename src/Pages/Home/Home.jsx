import React from "react";
import { Cont, Div } from "./Home.style";
import Ads from "../../components/Ads/Ads";
import PopularDishesPage from "../../components/PopularDishes/PopularDishes";
import Reviews from "../../components/Reviews/Reviews";
import { Link } from "react-router-dom";
import Giveaway from "../../components/Promo/Giveaway/Giveaway";
import Images from "../../assests/images";

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
        <div className="img-cont">
          <div className="img">
            <img src={Images.banner} alt="banner" />
          </div>
        </div>
      </Div>

      <PopularDishesPage />
      <Giveaway />
      <Reviews />
      <Ads />
    </Cont>
  );
};
export default Home;
