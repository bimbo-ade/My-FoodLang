import React from "react";
import { Line, Div } from "./Footer.style";
import foodlang from "../../assests/foodlang.png";
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
        <div className="contact">
          <FaTwitterSquare />
          <FaFacebookSquare />
          <FaInstagramSquare />
          <p>12 Taiwo Osho Street,Ikorodu,Lagos State,Nigeria.</p>
        </div>
      </Div>
    </>
  );
};
export default Footer;
