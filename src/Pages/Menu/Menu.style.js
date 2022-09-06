import styled from "styled-components";
import { device } from "../../components/Device";

export const Div = styled.div`
  width: 80%;
  text-align: center;
  margin: 3rem auto;
  h1 {
    text-align: center;
  }
  button {
    margin: 1.5rem 0 0 0.7rem;
    padding: 0.4rem 1.2rem;
    border-radius: 2rem;
    border: 1px solid #ff2156;

    font-weight: 500;
    font-size: 0.6em;
    transition: 0.2s ease;

    &: hover {
      scale: 2px;
      background-color: #ff2156;
      color: white;
    }
    @media ${device.mobile} {
      padding: 0.3rem 0.6em;

      margin-right: -0.3rem;
    }
  }
  .active {
    background-color: #ff2156;
    color: white;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${device.mobile} {
    justify-content: space-evenly;
  }
  .cardd {
    margin-top: 2rem;
    height: 320px;
    width: 220px;
    // border: 1px solid #ffd1dc;
    box-shadow: 0 0 7px 2px #eeeeee;
    border-radius: 1rem;

    text-align: center;
  }
  .img {
    height: 50%;
    width: 100%;
    margin: 1rem auto 0;
  }
  img {
    height: 80%;
    width: 80%;
    object-fit: cover;
    align-items: center;
    margin: auto;
  }
  .title {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }
  .price {
    margin-top: 0.7rem;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
  }
  .desc {
    font-size: 0.7rem;
  }
  .btn {
    margin-top: 0.5rem;
    padding: 0.5rem 0.5rem;
    border-radius: 2rem;
    border: 1px solid #ff2156;
    background-color: transparent;
    color: #ff2156;
    font-weight: 700;
    font-size: 0.6rem;
  }
`;
