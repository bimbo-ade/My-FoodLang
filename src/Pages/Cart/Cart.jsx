import React from "react";
import { Header, Div, Content, Sum, Button } from "./Cart.style";

import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Redux/Feature/Cart/cartSlice";

import { IoIosClose } from "react-icons/io";
import {
  removeItem,
  increase,
  decrease,
} from "../../Redux/Feature/Cart/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);

  if (amount < 1) {
    return <Header>Your Cart is currently empty</Header>;
  }
  return (
    <>
      <Header>Shopping Cart</Header>
      <Div>
        <div className="cont">
          {cartItems.map((item) => {
            const { id, img, title, price, amount, desc } = item;

            return (
              <Content>
                <div className="cardd">
                  <img src={img} alt="food" width={70} />

                  <div>
                    <h4 className="title">{title}</h4>
                    <p className="desc">{desc}</p>
                  </div>
                  <div>
                    <button
                      className="btn"
                      onClick={() => {
                        if (amount === 1) {
                          dispatch(removeItem(id));
                          return;
                        }
                        dispatch(decrease({ id }));
                      }}
                    >
                      -
                    </button>
                    <button className="btn">{amount}</button>
                    <button
                      className="btn"
                      onClick={() => {
                        dispatch(increase({ id }));
                      }}
                    >
                      +
                    </button>
                  </div>
                  <h6 className="price"> ${price}</h6>

                  <div
                    onClick={() => {
                      dispatch(removeItem(id));
                    }}
                  >
                    {" "}
                    <IoIosClose />
                  </div>
                </div>
              </Content>
            );
          })}
        </div>
        <div className="right"></div>
      </Div>
      <Sum className="sum">
        Subtotal : <span> ${total.toFixed(2)} </span>
      </Sum>
      <Button
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        <button> Clear Cart</button>
      </Button>
    </>
  );
};

export default Cart;
