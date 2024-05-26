import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../../../constants";

export const StyledImg = styled.img`
  width: 32%;
  height: 100%;
  border-radius: 13px;
  cursor: pointer;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 49%;
    max-height: 6rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding-right: 0px;
  margin-right: 0px;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    padding: 0 2%;
    display: none;
  }
`;

export const SContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-right: 0px;
  margin-right: 0px;
  padding: 0 2%;
  @media only screen and (min-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
  ${({ second }) =>
    second &&
    css`
      margin-top: 1rem;
    `}

  ${({ nogap }) =>
    !nogap
      ? css`
          column-gap: 8.5%;
        `
      : css`
          column-gap: 2%;
        `}
`;

export const StyledSliderImage = styled.img`
  width: 100%;
  height: fit-content;
  border-radius: 13px;
  cursor: pointer;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    max-height: 7rem;
  }
`;

export const StyledSliderText = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 0.8rem;
  width: 100%;
  text-align: center;
  line-height: 1.5;
  margin: 0.4rem auto 0;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    text-align: center;
    font-size: 0.7rem;
  }
`;

export const Content = styled.div`
  text-align: center;
  width: 18%;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 28%;
  }
`;

export const ArrowBox = styled.div`
  background-color: #ffffff12;
  font-size: 24px;
  border-radius: 5px;
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  margin-left: 0.375rem;
`;

export const StyledArrowImg = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-right: 0.5rem;
  }
`;

export const TopSliderContainer = styled.div`
  padding-top: 1rem;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    margin-bottom: 1rem;
    padding-top: 0rem;
  }
`;

export const Border = styled.hr`
  border-color: rgb(61 61 61);
  border-top-width: 1px;
  width: 100%;
  margin-top: 1.8rem;
  margin-bottom: 2.1rem;
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    margin-bottom: 1rem;
  }
`;
