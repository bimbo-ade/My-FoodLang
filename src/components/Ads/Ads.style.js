import styled from "styled-components";
import { device } from "../Device";

export const Div = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  margin: 3rem auto 0;

  .card {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 350px;
    width: 100%;
    background-color: #ffe9ee;
    border-radius: 1rem;
    margin: 5rem auto;

    @media${device.mobile} {
      background-color: white;
      display: grid;
      grid-template-columns: 100%;
      height: auto;
      align-items: center;
      margin: 3rem auto;
    }
  }
  .left {
    padding-left: 5rem;

    @media ${device.mobile} {
      text-align: center;
      height: 33vh;
      background-color: #ffe9ee;
      padding-left: 0rem;
      border-radius: 1rem;
      padding: 1rem;
    }
    p {
      font-size: 0.8rem;
      margin-top: 0.3rem;

      @media${device.mobile} {
        font-size: 0.8rem;
      }
    }
    h6 {
      font-size: 0.9rem;
      margin-top: 5rem;
      margin-bottom: 0.6rem;
      letter-spacing: 0.4rem;
      color: #ff2156;

      @media${device.mobile} {
        font-size: 0.7rem;
        margin-top: 2rem;
      }
    }
    h2 {
      font-size: 2rem;

      @media${device.mobile} {
        font-size: 1.2rem;

        margin-top: 1rem;
      }
    }
    button {
      margin-top: 1.5rem;
      padding: 0.6rem 1.5rem;
      border-radius: 2rem;
      border: 0;
      background-color: #ff2156;
      color: white;
      font-weight: 500;
      font-size: 0.9rem;
    }
  }
  .right {
    margin-top: 1rem;
    padding-left: 3rem;
    @media ${device.mobile} {
      padding-left: 0rem;
      text-align: center;
      margin: 2rem 0 1rem;
    }
    img {
      @media ${device.mobile} {
        width: 300px;
      }
    }
  }
`;
