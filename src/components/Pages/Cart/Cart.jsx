import React, { useState } from "react";
import { Header, Div } from "./Cart.style";
import burger from "../../../assests/burger.jpeg";

const Cart = () => {
  const [food, setFood] = useState([]);
  return (
    <>
      <Header>Shopping Cart</Header>
      <Div>
        <div className="left">
          {food.map((items) => {
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
        </div>
        <div className="right">
          <img src={burger} alt="burger" width={500} />
        </div>
      </Div>
    </>
  );
};

export default Cart;
