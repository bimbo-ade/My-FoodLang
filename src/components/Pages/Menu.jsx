import React, { useState } from "react";
import styled from "styled-components";
import Menudata from "../Data/Menudata";
const Menu = () => {
  const [filter, setFilter] = useState(Menudata);
  const [activeLink, setActiveLink] = useState(1);
  const filterMenu = (category) => {
    const update = Menudata.filter((x) => x.category === category);

    setFilter(update);
  };
  const all = () => {
    setActiveLink(1);
    setFilter(Menudata);
  };
  const Breakfast = () => {
    setActiveLink(2);
    filterMenu("Breakfast");
  };
  const Lunch = () => {
    setActiveLink(3);
    filterMenu("Lunch");
  };
  const Dinner = () => {
    setActiveLink(4);
    filterMenu("Dinner");
  };
  const Fastfood = () => {
    setActiveLink(5);
    filterMenu("Fastfood");
  };
  const Drinks = () => {
    setActiveLink(6);
    filterMenu("Drinks");
  };

  return (
    <Div>
      <h1>Our Menu</h1>

      <button onClick={all} className={activeLink === 1 ? "active" : ""}>
        All
      </button>

      <button onClick={Breakfast} className={activeLink === 2 ? "active" : ""}>
        Breakfast
      </button>
      <button onClick={Lunch} className={activeLink === 3 ? "active" : ""}>
        Lunch
      </button>
      <button onClick={Dinner} className={activeLink === 4 ? "active" : ""}>
        Dinner
      </button>
      <button onClick={Fastfood} className={activeLink === 5 ? "active" : ""}>
        Fast Food
      </button>
      <button onClick={Drinks} className={activeLink === 6 ? "active" : ""}>
        Drinks
      </button>

      <Content>
        <>
          {filter.map((items) => {
            return (
              <>
                <div className="cardd" key={items.id}>
                  <div className="img">
                    <img src={items.img} alt="food" />
                  </div>

                  <div>
                    <h4 className="title">{items.title}</h4>

                    <p className="desc">{items.desc}</p>
                    <h6 className="price"> ${items.price}</h6>
                    <button className="btn">Add to Cart</button>
                  </div>
                </div>
              </>
            );
          })}
        </>
      </Content>
    </Div>
  );
};
const Div = styled.div`
  width: 80%;
  text-align: center;
  margin: 5rem auto;
  h1 {
    text-align: center;
  }
  button {
    margin-top: 1.5rem;
    padding: 0.4rem 1.2rem;
    border-radius: 2rem;
    border: 1px solid #ff2156;
    // background-color: #ff2156;
    // color: white;
    font-weight: 500;
    font-size: 0.6em;
    margin-right: 1rem;
    margin-bottom: 1rem;
    transition: 0.2s ease;

    &: hover {
      scale: 2px;
      background-color: #ff2156;
      color: white;
    }
  }
  .active {
    background-color: #ff2156;
    color: white;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
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
export default Menu;
