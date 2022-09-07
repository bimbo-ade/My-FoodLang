import styled from "styled-components";
import { device } from "../Device";

export const Div = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  margin: 2rem auto 0;

  .card {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 350px;
    width: 100%;
    background-color: #ffe9ee;
    border-radius: 1rem;
    margin: 1rem auto;

    @media${device.mobile} {
      background-color: white;
      display: grid;
      grid-template-columns: 100%;
      height: auto;
      padding: 1.1rem auto;
      align-items: center;
      margin: 3rem auto;
    }
    @media${device.ipad} {
      background-color: white;
      display: grid;
      grid-template-columns: 100%;
      height: auto;
      padding: 12rem auto;
      align-items: center;
      margin: 3rem auto;
    }
  }
  .left-cont {
    padding-left: 5rem;

    @media ${device.mobile} {
      text-align: center;
      height: auto;
      background-color: #ffe9ee;
      padding-left: 0rem;
      border-radius: 1rem;
      padding: 1rem;
    }
    @media ${device.ipad} {
      text-align: center;
      height: auto;
      background-color: #ffe9ee;
      padding-left: 0rem;
      border-radius: 1rem;
      padding: 2rem 0;
    }
    p {
      font-size: 0.8rem;
      margin-top: 0.3rem;

      @media${device.mobile} {
        font-size: 0.6rem;
      }
      @media${device.ipad} {
        font-size: 0.9rem;
      }
    }
    h6 {
      font-size: 0.9rem;
      margin-top: 5rem;
      margin-bottom: 0.6rem;
      letter-spacing: 0.4rem;
      color: #ff2156;

      @media${device.mobile} {
        letter-spacing: 0.2rem;
        font-size: 0.7rem;
        margin-top: 1rem;
      }
      @media${device.ipad} {
        letter-spacing: 0.2rem;
        font-size: 0.9rem;
        margin-top: 1rem;
      }
    }
    h2 {
      font-size: 2rem;

      @media${device.mobile} {
        font-size: 1rem;

        margin-top: 0.6rem;
      }
      @media${device.ipad} {
        font-size: 1.3rem;

        margin-top: 0.6rem;
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
      text-align: center;

      @media${device.mobile} {
        margin: 1rem 0;

        padding: 0.3rem 1rem;
      }
      @media${device.ipad} {
        margin: 1rem 0;

        padding: 0.5rem 1rem;
      }
    }
  }
  .img-cont {
    margin-top: 1rem;
    padding-left: 3rem;
    @media ${device.mobile} {
      padding-left: 0rem;
      text-align: center;
      margin: 4rem 0 0;
    }
    @media ${device.ipad} {
      padding-left: 0rem;
      text-align: center;
      margin: 4rem 0 0;
    }
    img {
      @media ${device.mobile} {
        width: 300px;
      }
      @media ${device.ipad} {
        width: 400px;
      }
      @media (min-width:1024px) and (max-width:1102px){
        width: 420px;
      }
     
    }
  }
`;
