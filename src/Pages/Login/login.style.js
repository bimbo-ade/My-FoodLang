import styled from "styled-components";
import { device } from "../../components/Device";
export const Div = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  text-align: center;
  color: white;

  img {
    @media ${device.mobile} {
      margin-top: 8rem;
      width: 350px;
    }
    @media ${device.ipad} {
      margin-top: 7rem;
      width: 650px;
    }
    @media ${device.laptop} {
      margin-top: 10rem;
      width: 680px;
    }
  }
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .cont {
    text-align: center;
    height: auto;
    width: 390px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(4px);

    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
    z-index: 3;
    @media${device.mobile} {
      width: 250px;
      top: 40%;
    }
    @media${device.ipad} {
      
      top: 45%;
    }
  }
  input {
    height: 50px;
    width: 90%;
    padding: 0 10px;
    font-size: 1rem;
    margin: 1rem auto;

    outline: none;
    color: white;
    border: 1px solid gray;
    border-radius: 0.1rem;
    @media${device.mobile} {
      height: 40px;
      width: 90%;
      padding: 0 10px;
      font-size: 0.7rem;
      margin: 0.5rem auto;
    }
    @media${device.ipad} {
      
      width: 90%;
      padding: 0 10px;
      font-size: 0.9rem;
    
    }
  }
  button {
    background-color: #ff2156;
    color: white;
    border: 0;

    padding: 0.6rem 1.3rem;

    margin: 1rem 0;
  }

  h2 {
    // margin-top: 2rem;
    color: white;
  }
  p {
    color: white;
    padding-top: 0.3rem;
    font-size: 0.8rem;
  }
`;
