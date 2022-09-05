import React from "react";
import { Div } from "./login.style";
import { Link } from "react-router-dom";
import Images from "../../../assests/images";
const Login = () => {
  return (
    <Div>
      <img src={Images.banner} alt="login" width={990} />
      <div className="overlay"></div>

      <div className="right">
        <h2>Login</h2>
        {/* <p>Login into your Account</p> */}
        <input type="text" placeholder="email" />

        <input type="password" placeholder="password" />
        <p>Forgot password?</p>
        <button>Submit </button>
        <p>
          Dont have an Account?{" "}
          <span>
            {" "}
            <Link
              to="/signup"
              style={{
                color: "#ff2156",
                fontWeight: "500",
                fontSize: " 0.9rem",
              }}
            >
              Signup{" "}
            </Link>
          </span>
        </p>
      </div>
    </Div>
  );
};

export default Login;
