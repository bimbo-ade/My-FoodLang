import React from "react";
import { Div } from "./Contact.style";
import banner from "../../../assests/banner.png";
const Login = () => {
  return (
    <Div>
      <img src={banner} alt="login" width={990} />
      <div className="overlay"></div>

      <div className="right">
        <h2>Contact Us</h2>
        <input type="text" placeholder="email" />

        <input type="password" placeholder="password" />
        <textarea placeholder="Type A Message" />
        <button>Submit</button>
      </div>
    </Div>
  );
};
export default Login;
