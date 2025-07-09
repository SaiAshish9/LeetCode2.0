import styled from "styled-components";
import { BREAKPOINTS } from "../../screens/constants";

export const HomeComponent = styled.div`
  width: 100%;
  padding-top: 50px;
  background-color: rgb(26 26 26);
  color: #fff;
  min-height: 100vh;
  ._rp-page-input_1y9vo_6 {
    margin: 1px 0rem !important;
    width: 1.3em !important;
  }
  .rpv-default-layout__footer {
    display: none !important;
  }
`;

// padding: 0 10vw;
// padding-right: 10vw;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 15vw 0;
  padding-right: 15.5vw;
  @media only screen and (max-width: ${BREAKPOINTS.x125}) {
    padding: 1.5rem 2.5vw 0;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x125}) {
    padding: 1.5rem 5.5vw 0;
  }
  @media only screen and (min-width: ${BREAKPOINTS.xl}) {
    padding: 1.5rem 15vw 0;
    padding-right: 15.5vw;
  }
  @media only screen and (max-width: ${BREAKPOINTS.x110}) {
    padding: 1.5rem 2.5vw 0;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x110}) {
    padding: 1.5rem 5.5vw 0;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x100}) {
    padding: 1.5rem 10.5vw 0;
  }
  @media only screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 1.5rem 15.5vw 0;
  }
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
  @media only screen and (max-width: ${BREAKPOINTS.x175}) {
    padding: 1.5rem 2vw 0;
  }
  @media only screen and (max-width: ${BREAKPOINTS.x200}) {
    padding: 1.5rem 0vw 0;
  }
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    padding: 1.5rem 1vw 0;
  }
`;

export const TopLeftContainer = styled.div`
  width: 75%;
  color: #eff1f6bf;
  font-size: 0.9rem;
  text-align: start;

  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 71%;
  }
  @media only screen and (max-width: ${BREAKPOINTS.x125}) {
    width: 100%;
  }
`;

export const TopRightContainer = styled.div`
  width: 23%;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 27%;
  }
  @media only screen and (max-width: ${BREAKPOINTS.x125}) {
    display: none;
  }
`;

export const SBottomContainer = styled.div`
  @media only screen and (min-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
`;
