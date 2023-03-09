import React, { useState } from "react";
import { Div } from "./login.style";
import { Link } from "react-router-dom";
import Images from "../../assests/images";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {};
  return (
    <Div>
      <img src={Images.Lunch2} alt="login" width={900} />
      <div className="overlay"></div>

      <div className="cont">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
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
