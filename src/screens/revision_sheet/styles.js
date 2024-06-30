import styled from "styled-components";
import { BREAKPOINTS } from "../constants";

export const Container = styled.div`
  padding-top: 50px;
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
  @media only screen and (max-width: ${BREAKPOINTS.x175}) {
    padding-left: 4.25vw;
  }
  width: 100%;
`;

export const ContentText = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  padding-top: 1em;
  flex-wrap: wrap;
  white-space: pre-wrap;
  max-width: 100%;
  width: 100%;
`;

export const ContentItem = styled.div`
  padding-top: 0.9rem;
`;

export const ParentContent = styled.div`
  font-size: 14px;
  margin-top: 0.4rem;
`;
