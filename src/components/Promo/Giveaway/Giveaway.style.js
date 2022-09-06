import styled from "styled-components";
import { device } from "../../Device";

export const Slides = styled.div`
  position: relative;
  @media${device.mobile} {
    margin-bottom: 10rem;
  }
`;

export const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0 auto;

  .card {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 60vh;
    width: 100%;
    background-image: linear-gradient(
      to right,
      #ffe9ee,
      rgba(0, 40, 0, 0.1),
      rgba(0, 40, 0, 0.1)
    );
    border-radius: 1rem;

    @media${device.mobile} {
      display: none;
      background-image: none;
      display: grid;
      grid-template-columns: 100%;
      width: 90%;

      margin: 0 auto 0;
    }
    @media ${device.ipad} {
      background-image: none;
      display: grid;
      grid-template-columns: 100%;
      width: 90%;

      margin: 0 auto 0;
    }
  }
  .left {
    padding-left: 5rem;

    @media ${device.mobile} {
      text-align: center;
      height: 37vh;
      background-color: #ffe9ee;

      border-radius: 1rem;
      padding: 1rem;
    }
    @media ${device.ipad} {
      text-align: center;
      height: 37vh;
      background-color: #ffe9ee;
      padding-left: 0rem;

      border-radius: 1rem;
      padding: 1rem;
    }

    p {
      font-size: 0.8rem;
      margin-top: 0.3rem;

      @media${device.mobile} {
        font-size: 0.7rem;
      }
      @media${device.ipad} {
        font-size: 0.7rem;
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
        margin-top: 0.9rem;
      }
      @media${device.ipad} {
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
      @media${device.ipad} {
        font-size: 1.2rem;

        margin-top: 1rem;
      }
    }
  }
`;
