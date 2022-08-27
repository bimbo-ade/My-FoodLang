import React from "react";
import styled from "styled-components";
import foodlang from "../assests/foodlang.png";
import { BsCartCheck } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
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
                to="/reviews"
                style={({ isActive }) => ({
                  color: isActive ? "#FF2B51" : "",
                  textDecoration: "none",
                })}
              >
                {" "}
                Reviews
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
          </ul>
        </div>
        <div>
          <Link to="/">
            <BsCartCheck />
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
      </Div>
    </div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ffd1dc;
  padding: 2rem 3rem 0.5rem;
  .title {
  }
  ul {
    display: flex;
  }
  ul li {
    list-style: none;
    padding: 0 0.6rem;
    font-weight: 500;
    font-size: 0.9rem;
    color: FF2B51;

    text-decoration: 0;
  }
  a {
    transition: 0.17s ease;

    &: hover {
      color: #ff2b51;
    }
  }
  button {
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    border: 0;
    background-color: #ff2156;
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
  }
  svg {
    padding-right: 1rem;
    font-size: 1.3rem;
  }
  a {
    position: "relative";
  }
  span {
    background-color: #ff2156;
    color: white;
    margin-right: 0.4rem;
    position: absolute;
    top: 70;
    right: 70;
  }
  .active-link {
    color: red;

    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
  }
`;
export default Navbar;
