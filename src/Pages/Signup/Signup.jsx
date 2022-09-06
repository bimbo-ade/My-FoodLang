import React from "react";
import { Div } from "./Signup.style";
import { Link } from "react-router-dom";
import Images from "../../assests/images";
const Signup = () => {
  return (
    <Div>
      <img src={Images.banner} alt="login" width={900} />
      <div className="overlay"></div>

      <div className="cont">
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
