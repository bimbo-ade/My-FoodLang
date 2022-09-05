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
  .right {
    margin-left: 2rem;
    @media ${device.mobile} {
      display: none;
    }
  }
`;
export const Sum = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: red;

  span {
    font-weight: 700;
  }
`;

export const Button = styled.button`
  padding: 0.6rem;
  border-radius: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
`;

export const Dav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  align-items: center;

  .cardd {
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-evenly;
    margin-bottom: 1rem;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
  }

  .title {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
    text-align: left;
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
    margin: 0 0.3rem;
    padding: 0.5rem 0.5rem;

    border: 1px solid #ff2156;
    color: #ff2156;
    font-weight: 700;
    font-size: 0.6rem;
  }
  svg {
    font-size: 1.3rem;
  }
`;
