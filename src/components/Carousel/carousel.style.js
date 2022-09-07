import styled from "styled-components";

import { device } from "../../components/Device";

export const Div = styled.div`
  width: 90%;
  background-color: transparent;
  margin: 4rem auto 0;

  img {
    margin-top: 2rem;
    margin-left: 37rem;
    width: 40%;
    height: 40%;
    @media ${device.ipad}{
      opacity:0;

    }
    @media ${device.mobile}{
      opacity:0;

    }
 
  }
`;
