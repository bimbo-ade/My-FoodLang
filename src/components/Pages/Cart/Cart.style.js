import styled from "styled-components";
import { device } from "../../Device";

export const Header = styled.div`
  text-align: center;
  margin-top: 3rem;
  font-weight: 600;
  font-size: 1.4rem;
`;
export const Div = styled.div`
  margin: 3rem auto 0;
  width: 90%;

  display: grid;
  grid-template-columns: 55% 45%;
  @media ${device.mobile} {
    grid-template-columns: 100%;
  }

  .left {
    height: auto;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
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
  .right {
    margin-left: 2rem;
    @media ${device.mobile} {
      display: none;
    }
  }
`;
