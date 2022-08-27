import React from "react";
import foodlang from "../assests/foodlang.png";
import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";

import { FaTwitterSquare } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <Line></Line>
      <Div>
        <div className="left">
          <img src={foodlang} alt="logo" width={200} />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis, est velit at eveniet omnis modi sit veniam illo
            veritatis facere necessitatibus.
          </p>
          <FaTwitterSquare />
          <FaFacebookSquare />
          <FaInstagramSquare />
        </div>
        <div className="right">
          <div className="about">
            <h3>About</h3>
            <ul>
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Resturant</li>
              <li>Career</li>

              <li>Our Policy</li>
            </ul>
          </div>
          <div className="services">
            {" "}
            <h3>Services</h3>
            <ul>
              <li>Online Order</li>
              <li> Delivery</li>
              <li> Foodie Place</li>
              <li> Reservation</li>
              <li> Super Chefs</li>
            </ul>
          </div>
          <div className="quicklinks">
            {" "}
            <h3>Quick Links</h3>
            <ul>
              <li>Menu</li>
              <li> Reviews</li>
              <li>Blogs</li>
              <li>Order Food</li>
            </ul>
          </div>
          <div className="help">
            {" "}
            <h3>Help</h3>
            <ul>
              <li>Contact</li>
              <li> Support</li>
              <li> FAQ</li>
            </ul>
          </div>
        </div>
      </Div>
    </>
  );
};
const Line = styled.div`
  margin: 3rem auto 0;
  height: 2px;
  width: 80%;
  background-color: #eeeeee;
`;

const Div = styled.div`
  height: 250px;
  width: 80%;

  margin: 5rem auto 0;
  display: grid;
  grid-template-columns: 40% 60%;

  .left {
    img {
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
      font-size: 0.9rem;
      font-weight: 400;
    }
    svg {
      color: red;
      font-size: 2rem;
      padding-right: 1rem;
    }
  }
  .right {
    display: flex;
    justify-content: space-evenly;

    // padding-left: 2rem;
    h3 {
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }
    ul li {
      list-style: none;
      font-size: 0.64rem;
      font-weight: 500;
      text-align: left;
      margin-bottom: 1rem;
    }
  }
`;
export default Footer;
