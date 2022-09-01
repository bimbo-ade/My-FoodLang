import React from "react";
import { Div } from "./Navbar.style";
import foodlang from "../../assests/foodlang.png";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import Cart from "../Pages/Cart/Cart";

const Navbar = () => {
  return (
    <Div>
      <div className="title">
        <img src={foodlang} alt="logo" width={120} />
      </div>
      <div className="links">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#FF2B51" : "",
                textDecoration: "none",
              })}
            >
              {" "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              style={({ isActive }) => ({
                color: isActive ? "#FF2B51" : "",
                textDecoration: "none",
              })}
            >
              {" "}
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FF2B51" : "",
                textDecoration: "none",
              })}
            >
              {" "}
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              style={({ isActive }) => ({
                color: isActive ? "#FF2B51" : "",
                textDecoration: "none",
              })}
            >
              {" "}
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/cart">
          <BsCartCheck />
          {Cart.length}
        </Link>

        <button>
          {" "}
          <NavLink
            to="/login"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "500",
              fontSize: " 0.9rem",
            }}
          >
            Login
          </NavLink>{" "}
        </button>
      </div>
      <div className="menu">
        <AiOutlineMenu />
      </div>
    </Div>
  );
};
export default Navbar;
