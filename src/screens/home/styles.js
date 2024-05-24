import styled from "styled-components";
import { BREAKPOINTS } from "../../screens/constants";

export const HomeComponent = styled.div`
  width: 100%;
  padding-top: 50px;
  background-color: rgb(26 26 26);
  color: #fff;
  min-height: 100vh;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    max-width: 100vw;
  }
`;

// padding: 0 10vw;
// padding-right: 10vw;
export const Content = styled.div`
  padding: 0 15vw;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  padding-right: 15.5vw;
`;

export const TopLeftContainer = styled.div`
  width: 75%;
`;

export const TopRightContainer = styled.div`
  width: 23%;
`;
