import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../constants";

export const Container = styled.div`
  padding-top: calc(50px);
  width: 100%;
  text-align: start;
  padding-bottom: 4rem;
  &::-webkit-scrollbar {
    height: 3px;
  }
  @media only screen and (max-width: ${BREAKPOINTS.x175}) {
    padding-bottom: 2.5rem;
  }
`;

export const Content = styled.div`
  padding-left: 21vw;
  max-width: 75%;
  overflow: hidden;
  @media only screen and (max-width: ${BREAKPOINTS.x175}) {
    padding-left: 4.25vw;
    max-width: 90%;
  }
`;

export const BackBtn = styled.p`
  cursor: pointer;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
`;

export const ContentText = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  padding-top: 1em;
  flex-wrap: wrap;
  white-space: pre-wrap;
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ${({ sm }) =>
    sm &&
    css`
      font-size: 12.5px;
    `}
  p {
    overflow-x: hidden;
    display: inline;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    color: #000;
    width: fit-content;
  }
`;

export const IconCont = styled.p`
  margin-left: 0.5rem;
  position: relative;
  bottom: 1px;
`;

export const ContentItem = styled.div`
  padding-top: 0.9rem;
`;

export const ParentContent = styled.div`
  font-size: 14px;
  margin-top: 0.4rem;
`;

export const Spacer = styled.div`
  width: 100%;
  height: 0.5rem;
`;
