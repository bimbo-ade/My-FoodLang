import React, { useState } from "react";
import { Div } from "./Navbar.style";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Images from "../../assests/images";

import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { amount } = useSelector((store) => store.cart);
  return (
    <Div>
      <div className="img-cont">
        <img src={Images.foodlang} alt="logo" width={120} />
      </div>
      <div className={click ? "  links active " : "links"}>
        <ul>
          <li onClick={closeMobileMenu}>
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
          <li onClick={closeMobileMenu}>
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

          <li onClick={closeMobileMenu}>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FF2B51" : "",
                textDecoration: "none",
              })}
            >
              {" "}
              Contact
            </NavLink>
          </li>
          <li onClick={closeMobileMenu}>
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
        <div className="cart-icon-btn">
          <Link to="/cart" onClick={closeMobileMenu}>
            <BsCartCheck />
          </Link>
          <span>{amount}</span>

          <button onClick={closeMobileMenu}>
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
      </div>

      <div onClick={handleClick} className="menu-icon">
        {click ? <IoIosClose /> : <AiOutlineMenu />}
      </div>
    </Div>
  );
};
export default Navbar;
