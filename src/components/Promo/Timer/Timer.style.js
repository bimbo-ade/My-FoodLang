import styled from "styled-components";
import { device } from "../../Device";

export const Div = styled.div`
  margin: 0.3rem 0;
  display: flex;
  flex-direction: column;
  @media ${device.mobile} {
    justfy-content: space-between;
    align-items: center;
  }
  @media ${device.ipad} {
    justfy-content: space-between;
    align-items: center;
  }

  .cont {
    display: flex;
    justfy-content: space-between;
    align-items: center;

    @media ${device.mobile} {
      display: flex;
      justfy-content: space-between;
      align-items: center;
    }

    @media ${device.ipad} {
      display: flex;
      justfy-content: space-between;
      align-items: center;
    }
  }
  h4 {
    text-align: center;
    color: #ff2156;
  }
  p {
    text-align: center;
    margin: 0 0.3rem;
  }
  span {
    font-size: 1rem;
    font-weight: bold;
  }
`;
export const Header = styled.h5`
  margin-top: 1.4rem;
  @media${device.mobile} {
    margin-top: 1rem;
  }
`;
