import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgfo from "../assests/bgfo.png";
const Ads = () => {
  return (
    <Div>
      <div className="card">
        <div className="left">
          <h6>DOWNLOAD APP </h6>
          <h2> Need Your Food Language Spoken?</h2>
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. dolor sit
            amet consectetu Sed tempora a rerum consectetur adipisicing elit.
          </p>
          <button>
            {" "}
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "500",
                fontSize: " 0.9rem",
              }}
            >
              {" "}
              Get App
            </Link>
          </button>
        </div>
        <div className="right">
          <img src={bgfo} alt="ads" width={490} />
        </div>
      </div>
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  margin: 3rem auto 0;

  .card {
    display: grid;
    grid-template-columns: 50% 50%;
    // align-items: center;
    height: 350px;
    width: 100%;
    background-color: #ffe9ee;
    border-radius: 1rem;
    // padding-top: 3rem;
    margin: 5rem auto;
  }
  .left {
    padding-left: 5rem;
    p {
      font-size: 0.8rem;
      margin-top: 0.3rem;
    }
    h6 {
      font-size: 0.9rem;
      margin-top: 5rem;
      margin-bottom: 0.6rem;
      letter-spacing: 0.4rem;
      color: #ff2156;
    }
    h2 {
      font-size: 2rem;
    }
    button {
      margin-top: 1.5rem;
      padding: 0.6rem 1.5rem;
      border-radius: 2rem;
      border: 0;
      background-color: #ff2156;
      color: white;
      font-weight: 500;
      font-size: 0.9rem;
    }
  }
  .right {
    margin-top: 1rem;
    padding-left: 3rem;
  }
`;
export default Ads;
