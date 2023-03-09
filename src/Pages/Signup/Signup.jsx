import React, { useState } from "react";
import { Div } from "./Signup.style";
import { Link, useNavigate } from "react-router-dom";
import Images from "../../assests/images";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Div>
      <img src={Images.banner} alt="login" width={900} />
      <div className="overlay"></div>

      <div className="cont">
        <h2>Sign Up</h2>

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
        <button onClick={signup}>Sign Up</button>
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
