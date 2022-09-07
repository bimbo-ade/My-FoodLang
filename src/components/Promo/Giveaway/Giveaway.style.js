import styled from "styled-components";
import { device } from "../../Device";

export const Slides = styled.div`
  position: relative;
  @media${device.mobile} {
    margin-bottom: 7rem;
  }

`;

export const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0 auto;

  .card-cont {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 60vh;
    width: 100%;
    background-image: linear-gradient(
      to right,
      #ffe9ee,
      rgba(0, 40, 0, 0.1),
      rgba(0, 40, 0, 0.1)
    );
    border-radius: 1rem;

    @media${device.mobile} {
      height: auto;
      display: none;
      background-image: none;
      display: grid;
      grid-template-columns: 100%;
      width: 90%;

      margin: 0 auto 0;
    }
    @media ${device.ipad} {
      height: auto;
      display: none;
      background-image: none;
      display: grid;
      grid-template-columns: 100%;
      width: 90%;
      margin: 0 auto 0;
      
    }
    @media ${device.laptop} {
      height: auto;
      display: none;
      padding:1rem 0;
      display: grid;
      grid-template-columns: 100%;
      width: 90%;
      margin: 0 auto 0;
    }
  }
  .left-cont {
    padding-left: 5rem;

    @media ${device.mobile} {
      text-align: center;
      height: auto;
      background-color: #ffe9ee;
      border-radius: 1rem;
      padding: 1rem;
    }
    @media ${device.ipad} {
      text-align: center;
      height: auto;
      background-color: #ffe9ee;
      border-radius: 1rem;
      padding: 2rem 0;
    }
    @media ${device.laptop} {
    
    padding:2rem 2rem 2rem 5rem;
    }
    p {
      font-size: 0.8rem;
      margin-top: 0.3rem;

      @media${device.mobile} {
        font-size: 0.6rem;
      }
      @media${device.ipad} {
        font-size: 0.7rem;
      }
     
    }
    .desc{
      @media${device.laptop} {
        width:27rem;
        font-size: 1rem;
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
        margin-top: 0.6rem;
      }
      @media${device.ipad} {
        font-size: 0.9rem;
        margin-top: 1rem;
      }
      @media${device.laptop} {
      margin-top: 1rem;
    }
  }
    h2 {
      font-size: 2rem;

      @media${device.mobile} {
        font-size: 0.8rem;

        margin-top: 0.8rem;
      }
      @media${device.ipad} {
        font-size: 1.2rem;

        margin-top: 1rem;
      }
      @media${device.laptop} {
        font-size: 1.7rem;
width:500px;
        margin-top: 1rem;
      }
    }
  }
`;
