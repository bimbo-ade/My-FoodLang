import React from "react";
import { Div } from "./Contact.style";
import Images from "../../assests/images";
const Login = () => {
  return (
    <Div>
      <img src={Images.banner} alt="login" width={990} />
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
