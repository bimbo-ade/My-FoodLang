import styled from "styled-components";
import { device } from "../../components/Device";

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
  grid-template-columns: 80%;
  justify-content: center;
  @media ${device.mobile} {
    grid-template-columns: 100%;
  }
  @media ${device.ipad} {
    grid-template-columns: 100%;
  }

  .left {
    height: auto;
  }
  .right {
    display: none;
    margin-left: 2rem;
    @media ${device.mobile} {
      display: none;
    }
    @media ${device.ipad} {
      display: none;
    }
  }
`;
export const Sum = styled.p`
  text-align: center;
  margin-top: 2rem;

  span {
    color: red;
    font-weight: 700;
  }
`;

export const Button = styled.div`
  text-align: center;
  button {
    margin: 2rem 0;
    padding: 0.33rem 0.6rem;
    background-color: red;
    color: white;
    border-radius: 0.6rem;
    border: 1px solid red;
  }
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

    @media ${device.mobile} {
      flex-direction: column;
      height: auto;
      padding-bottom: 1rem;
    }
  }
  img {
    @media ${device.mobile} {
      width: 120px;
    }
  }

  .title {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
    text-align: left;
    @media ${device.mobile} {
      text-align: center;
    }
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
    margin: 0.5rem;
    padding: 0.5rem 0.5rem;

    border: 1px solid #ff2156;
    color: #ff2156;
    font-weight: 700;
    font-size: 0.6rem;
  }
  svg {
    font-size: 1.3rem;
    @media ${device.mobile} {
      margin-top: 1rem;

      background-color: red;
    }
  }
`;
