import styled from "styled-components";
import { device } from "../Device";

export const Line = styled.div`
  margin: 1rem auto 0;
  height: 2px;
  width: 80%;
  background-color: #eeeeee;
`;

export const Div = styled.div`
  height: 250px;
  width: 80%;

  margin: 5rem auto 0;
  display: grid;
  grid-template-columns: 30% 50% 20%;

  @media ${device.mobile} {
    display: grid;
    grid-template-columns: 100%;
    text-align: center;
  }

  .left {
    img {
      margin-bottom: 1rem;

      @media ${device.mobile} {
        width: 130px;

        margin-bottom: 0rem;
      }
    }
    p {
      margin-bottom: 1rem;
      font-size: 0.9rem;
      font-weight: 400;
      @media ${device.mobile} {
        display: none;
      }
    }
  }
  .right {
    display: flex;
    justify-content: space-evenly;

    @media ${device.mobile} {
      flex-wrap: wrap;
    }
    @media ${device.ipad} {
      flex-wrap: wrap;
    }
    h3 {
      margin-bottom: 1rem;
      font-size: 0.9rem;

      @media ${device.mobile} {
        margin-top: 3rem;
        text-align: left;
      }
    }
    ul li {
      list-style: none;
      font-size: 0.64rem;
      font-weight: 500;
      text-align: left;
      margin-bottom: 1rem;
      @media ${device.mobile} {
        text-align: left;
      }
    }
  }
  .contact {
    svg {
      font-size: 2rem;
      padding-right: 1.2rem;

      @media ${device.mobile} {
        padding: 1rem;
      }
    }
    p {
      font-size: 0.9rem;
      margin-top: 0.4rem;
      @media ${device.mobile} {
        display: none;
      }
    }
  }
`;
