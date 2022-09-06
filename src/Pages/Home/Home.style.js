import styled from "styled-components";
import { device } from "../../components/Device";

export const Cont = styled.div`
  width: 90%;
  margin: auto;
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const Div = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  height: 90vh;

  @media ${device.mobile} {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }
  .text {
    @media ${device.mobile} {
      width: 90%;
      margin: 5rem auto 2rem;
      text-align: center;
    }
  }

  h1 {
    width: 25rem;
    font-size: 2.4rem;
    span {
      color: #ff2156;
    }

    @media ${device.mobile} {
      width: 16rem;
      margin: auto;
      font-size: 1.7rem;
    }
  }
  p {
    font-size: 0.9rem;
    margin-top: 1rem;

    @media ${device.mobile} {
      font-size: 0.9rem;
    }
  }

  button {
    margin-top: 1rem;
    padding: 0.6rem 1.5rem;
    border-radius: 2rem;
    border: 0;
    background-color: #ff2156;
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
  }

  .img {
    margin-top: 5rem;
    margin-left: 3rem;
    display: flex;
    align-items: center;
    background-color: #ffd1dc;

    border-radius: 50%;

    @media ${device.mobile} {
      margin: 3rem auto 1rem;
      width: 70%;
    }
    img {
      width: 100%;
      @media ${device.mobile} {
      }
    }
  }
`;
