import React from "react";
import { Link } from "react-router-dom";
import { Div } from "./Ads.style";
import bgfo from "../../assests/bgfo.png";
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
              to="/signup"
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
export default Ads;
