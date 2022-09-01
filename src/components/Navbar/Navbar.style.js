import styled from "styled-components";
import { device } from "../Device";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ffd1dc;
  padding: 2rem 3rem 0.5rem;

  .menu{
    display:none;
    @media ${device.mobile} {
      display: block;
      margin-right:-1.3rem;
      cursor: pointer;
    }
    svg{
      font-size:1.6rem;
      
    @media ${device.mobile} {
      
    }
    }
  }
  .title {
  }
  ul {
    display: flex;

    @media ${device.mobile} {
      display: none;
    }
  }
  ul li {
    list-style: none;
    padding: 0 0.6rem;
    font-weight: 500;
    font-size: 0.9rem;
    color: FF2B51;

    text-decoration: 0;
  }
  a {
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

    @media ${device.mobile} {
      display: none;
    }
  }
  svg {
    padding-right: 1rem;
    font-size: 1.3rem;
  }
  }
  a {
    position: "relative";
    @media ${device.mobile} {
      display: none;
  }
  // span {
  //   // background-color: #ff2156;
  //   color: #ff2156;
  //   margin-right: 1rem;
  // }
  .active-link {
    color: red;

    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
  }

`;
