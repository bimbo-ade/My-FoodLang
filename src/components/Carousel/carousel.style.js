import styled from "styled-components";

import { device } from "../../components/Device";

export const Div = styled.div`
  width: 90%;
  background-color: transparent;
  margin: 4rem auto 0;

  img {
     margin-top: 1rem;
    margin-left: 38rem;
    width: 40%;
    height: 40%;
    @media ${device.ipad}{
      opacity:0;

    }
    @media ${device.mobile}{
      opacity:0;

    }
    @media ${device.laptop}{
      margin: 3rem 0;
    margin-left: 40rem;
      width: 32%;
      height: 32%;
    }
    @media (min-width:1024px) and (max-width:1102px){
      margin: 5rem 0;
      margin-left: 33rem;
        width: 32%;
        height: 33%;
    }
    @media (min-width:1103px) and (max-width:1160px){
      margin- 4rem 0;
      margin-left: 36rem;
        width: 34%;
        height: 34%;
    }
 
  }
`;
