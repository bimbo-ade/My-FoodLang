import React from "react";
import PopularDishesData from "../../Data/PopularDishesData";
import { Content, Div } from "./PopularDishes.style";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Feature/Cart/cartSlice";
const PopularDishesPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Div>
        <h1>
          Popular <span>Dishes</span>{" "}
        </h1>
        <Content>
          {PopularDishesData.map((items, index) => {
            return (
              <div className="cardd" key={index}>
                <div className="img">
                  <img src={items.img} alt="food" />
                </div>

                <div>
                  <h4 className="title">{items.title}</h4>

                  <p className="desc">{items.desc}</p>
                  <h6 className="price"> ${items.price}</h6>
                  <button
                    className="btn"
                    onClick={() => {
                      dispatch(addToCart(items));
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </Content>
      </Div>
    </>
  );
};
export default PopularDishesPage;
