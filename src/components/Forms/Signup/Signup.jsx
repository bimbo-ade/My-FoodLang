import React from "react";
import { Div } from "./Signup.style";
import banner from "../../../assests/banner.png";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <Div>
      <img src={banner} alt="login" width={990} />
      <div className="overlay"></div>

      <div className="right">
        <h2>Sign Up</h2>
        <input type="text" placeholder="fullname" />
        <input type="text" placeholder="email" />

        <input type="password" placeholder="password" />
        <button>Submit</button>
        <p>
          Already have an Account?{" "}
          <span>
            {" "}
            <Link
              to="/login"
              style={{
                color: "#ff2156",
                fontWeight: "500",
                fontSize: " 0.9rem",
              }}
            >
              Login{" "}
            </Link>
          </span>
        </p>
      </div>
    </Div>
  );
};
export default Signup;
