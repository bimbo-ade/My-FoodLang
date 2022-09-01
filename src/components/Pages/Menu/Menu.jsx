import React, { useState } from "react";
import { Div, Content } from "./Menu.style";
import Menudata from "../../Data/Menudata";
import Cart from "../Cart/Cart";
const Menu = () => {
  const [filter, setFilter] = useState(Menudata);
  const [activeLink, setActiveLink] = useState(1);
  const [cart, setCart] = useState([]);

  const addToCart = (menu) => {
    console.log("add to card");
    setCart([...cart, menu]);
  };
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
      {/* <button>cart {cart.length}</button> */}

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
          {filter.map((items, index) => {
            return (
              <>
                <div className="cardd" key={index}>
                  <div className="img">
                    <img src={items.img} alt="food" />
                  </div>

                  <div>
                    <h4 className="title">{items.title}</h4>

                    <p className="desc">{items.desc}</p>
                    <h6 className="price"> ${items.price}</h6>
                    <button className="btn" onClick={() => addToCart(cart)}>
                      Add to Cart
                    </button>
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
export default Menu;
