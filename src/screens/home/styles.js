import styled from "styled-components";
import { BREAKPOINTS } from "../../screens/constants";

export const HomeComponent = styled.div`
  width: 100%;
  padding-top: 50px;
  background-color: rgb(26 26 26);
  color: #fff;
  min-height: 100vh;
`;

// padding: 0 10vw;
// padding-right: 10vw;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 15vw 0;
  padding-right: 15.5vw;
  @media only screen and (min-width: ${BREAKPOINTS.x75}) {
    padding: 1.5rem 18.5vw 0;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x67}) {
    padding: 1.5rem 25.5vw 0;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x50}) {
    padding: 1.5rem 30.5vw 0;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x33}) {
    padding: 1.5rem 35.5vw 0;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x25}) {
    padding: 1.5rem 40.5vw 0;
  }
`;

export const TopLeftContainer = styled.div`
  width: 75%;
`;

export const TopRightContainer = styled.div`
  width: 23%;
`;
