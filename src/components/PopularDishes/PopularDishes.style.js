import styled from "styled-components";
import { device } from "../Device";
export const Div = styled.div`
width: 90%;
margin: 2rem auto;

h1 {
width: 25rem;
font-size: 1.5rem;
span {
  color: #ff2156;
}

@media ${device.mobile}{
  text-align:center;
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
