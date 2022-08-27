import React from "react";
import styled from "styled-components";

import banner from "../../assests/banner.png";
const Login = () => {
  return (
    <Div>
      <img src={banner} alt="login" width={990} />
      <div className="overlay"></div>

      <div className="right">
        <h2>Login</h2>
        <input type="text" placeholder="email" />

        <input type="password" placeholder="password" />
        <button>Submit </button>
        <p>Dont have an Accounft? Signup.</p>
      </div>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  color: white;

  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .right {
    position: absolute;
    top: 10%;
    left: 33%;

    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
    border: none;
    border-radius: 0.3rem;
    box-shadow: 0 0 4px 0 gray;
    color: white;
    height: 70%;
    width: 35%;
    background-color: transparent;
  }
  input {
    margin-top: 1rem;
    // border-bottom: 2px solid white;
    border: 0;
    color: white;

    border: 1px solid gray;
    padding: 1rem 7rem 1rem 2rem;
    border-radius: 0.1rem;
  }
  button {
    background-color: #ff2156;
    color: white;
    border: 0;

    padding: 0.6rem 1.3rem;

    margin: 1rem 0;
  }
  textarea {
    margin-top: 1rem;
    color: white;
    outline: none;
    border: 1px solid gray;
    padding: 1rem 7rem 6rem 2rem;
    border-radius: 0.1rem;
  }
  h2 {
    margin-top: 2rem;
    color: white;
  }
  p {
    color: white;
  }
`;
export default Login;
