import styled from "styled-components";
import { device } from "../Device";

export const Div = styled.div`
  width: 90%;
  margin: 7rem auto 0;

  h1 {
    width: 25rem;
    font-size: 1.5rem;
    span {
      color: #ff2156;
    }
  }
  @media ${device.mobile} {
    text-align: center;
  }
`;

export const Content = styled.div`
 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    @media ${device.mobile} {
   justify-content: center ;
    }
  
    
  }
  .cardd {
    margin-top: 2rem;
    height: 220px;
    width: 320px;
    // border: 1px solid #ffd1dc;
    box-shadow: 0 0 7px 2px #eeeeee;
    border-radius: 1rem;
    // background-color: #fff5f7;
    text-align: left;
    padding-left: 0.8rem;
  }
  img {
    border-radius: 50%;
    margin-top: 0.6rem;
  }
  .title {
    color: #9b0c26;
    font-size: 1rem;
    font-wright: 700;
    margin-top: 0.4rem;
  }

  .desc {
    height: 35%;
    padding: 0.6rem;
    font-size: 0.8rem;
    margin-top: 1rem;
    font-weight: 500;
  }
`;
