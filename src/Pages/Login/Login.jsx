import React, { useState } from "react";
import { Div } from "./login.style";
import { Link } from "react-router-dom";
import Images from "../../assests/images";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };
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
        <button onClick={login}>Submit </button>
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
