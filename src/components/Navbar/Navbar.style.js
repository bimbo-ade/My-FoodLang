import styled from "styled-components";
import { device } from "../Device";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
  padding: 2rem 3rem 0.5rem;
  // position: relative;
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 14;

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;

    @media ${device.mobile} {
      justify-content: start;
      position: absolute;
      top: 80px;
      left: 0;
      flex-direction: column;
      width: 100%;
      height: 60vh;
      left: -100%;
      opacity: 0;
      transition: all 0.5s ease;
      background-color: white;
      z-index: 12;
    }
  }

  .active {
    @media ${device.mobile} {
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
    }
  }

  ul {
    display: flex;

    @media ${device.mobile} {
      flex-direction: column;
      margin: 0.9rem 0;
    }
  }

  ul li {
    list-style: none;
    padding: 0 0.6rem;
    font-weight: 500;
    font-size: 0.9rem;
    color: #ff2b51;
    text-decoration: 0;

    @media ${device.mobile} {
      padding: 1.2rem;
      text-align: center;
      margin-bottom: 0;
    }
  }

  ul li a {
    transition: 0.17s ease;

    &: hover {
      color: #ff2b51;
    }
  }

  button {
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    border: 0;
    background-color: #ff2156;
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
  }

  .cart-icon {
    position: relative;

    @media ${device.mobile} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100px;
      margin-bottom: 1rem;
    }

    svg {
      padding-right: 1.2rem;
      font-size: 1.3rem;
      position: relative;
    }

    span {
      position: absolute;
      top: -0.4rem;
      right: 6rem;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      background: red;
      color: white;
      font-size: 0.7rem;
      display: flex;
      align-items: center;
      justify-content: center;

      @media ${device.mobile} {
        top: -0.4rem;
        right: 2rem;
      }
    }
  }

  .menu-icon {
    display: none;

    @media ${device.mobile} {
      display: block;
      font-size: 2rem;
    }
  }
`;
