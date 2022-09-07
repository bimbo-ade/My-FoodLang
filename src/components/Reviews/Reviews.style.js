import styled from "styled-components";
import { device } from "../Device";

export const Div = styled.div`
  width: 90%;
  margin: 7rem auto 0;
  @media ${device.mobile} {
    margin: 7rem auto 0;
  }

  h1 {
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
  .card-cont {
    text-align:center;
    margin-top: 2rem;
    height: auto;
    width: 320px;
    box-shadow: 0 0 7px 2px #eeeeee;
    border-radius: 1rem;
  
  }
  img {
    border-radius: 50%;
    margin-top: 0.8rem;
    text-align:center;
  }
  .title {
    color: #9b0c26;
    font-size: 1rem;
    font-weight: 700;
    margin: 0.7rem 0;
    text-align:center;
  }

  .desc {
    width:280px;
    
    font-size: 0.7rem;
    text-align:center;
    margin: 1rem auto 0;
    font-weight: 500;
    @media ${device.ipad} {
      
    font-size: 0.9rem;
       }
  }
`;
