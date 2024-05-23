import styled, { css } from "styled-components";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import { BREAKPOINTS } from "../constants";

export const Container = styled.div`
  background-color: #0f0f0f;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 22px;
  width: auto;
  padding-right: 1rem;
  @media only screen and (max-width: ${BREAKPOINTS.x100}) {
    position: relative;
    top: -1px;
  }
`;

export const Header = styled.div`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  padding-left: 1.25rem;
  @media only screen and (max-width: ${BREAKPOINTS.x100}) {
    height: 3rem;
  }
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
`;

export const Content = styled.div`
  margin: 10px;
  height: calc(100% - 8px - 5vh);
  width: calc(100% - 16px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0px;
  @media only screen and (max-width: ${BREAKPOINTS.x100}) {
    height: calc(100% - 8px - 3rem);
  }
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 100%;
    margin: 0px;
    height: calc(100%);
  }
`;

export const LeftIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProblemText = styled.p`
  color: #f5f5f5;
  font-weight: 500;
  font-size: 14px;
  margin: 0px;
  padding: 0px;
  margin-block-start: 0em !important;
  margin-block-end: 0em !important;
  margin-right: 1.2rem;
  position: relative;
  top: 1.5px;
  @media only screen and (max-width: ${BREAKPOINTS.x100}) {
    top: -1.5px;
  }
`;

export const LeftLI = styled.li`
  background-color: #ffffff14;
  width: 1px;
  height: 16px;
  margin-right: 1.2rem;
  list-style: none;
`;

export const LeftContainer = styled.div`
  width: calc(50% - 3.5px);
  border: ${({ selected }) =>
    selected ? css`1px solid #ffffff38` : css`0px solid`};
  height: 100%;
  background-color: #262626;
  border-radius: 8px;
  border-color: hsl(0, 0%, 100%, 0.1);
  overflow-y: scroll;
  overflow-x: hidden;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    border: none;
    border-radius: 0px;
    width: 100%;
  }
`;

export const TabHeaderParentContainer = styled.div`
  background-color: #262626;
  border-radius: 8px 8px 0 0;
  position: absolute;
  z-index: 5;
  width: calc(50% - 11.5px);
  border: none;
  outline: none;
  box-shadow: none;
  margin: 0;
  padding: 0;
  &:before {
    display: none;
  }
  overflow: hidden;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: calc(100%);
    border-radius: 0px;
  }
`;

export const TabHeader = styled.div`
  background-color: #ffffff0f;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 4px 6px;
`;

export const TabItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 6px;
  border-radius: 5px;
  &:hover {
    background-color: #ffffff1a;
  }
`;

export const TabText = styled.p`
  font-weight: 500;
  color: #f5f5f5;
  ${({ inActive }) =>
    inActive &&
    css`
      color: #fff9;
      font-weight: 400;
    `};
  font-size: 0.875rem;
  padding: 0 8px;
  &::before {
    background: #ffffff24;
    content: "";
    display: block;
    height: 12px;
    left: -1px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
  }
`;

export const InActiveText = styled.p`
  color: #fff9;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 1.25rem 1rem;
  margin-top: 2.5rem;
  position: relative;
`;

export const LeftContentTitle = styled.p`
  color: #f5f5f5;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: start;
`;

export const LeftContentDescription = styled.div`
  width: 100%;
  text-align: start;

  p {
    color: #f5f5f5;
    font-size: 14px;
    margin-bottom: 1rem;
  }

  code {
    background-color: #ffffff12;
    border-color: #f7faff1f;
    color: #eff1f6bf;
    border-radius: 5px;
    border-width: 1px;
    font-family: Menlo, sans-serif;
    font-size: 0.75rem;
    line-height: 1rem;
    padding: 0.125rem;
    white-space: pre-wrap;
  }

  pre {
    border-color: #ffffff24;
    border-left-width: 2px;
    color: #fff9;
    font-family: Menlo, sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    overflow: visible;
    padding-left: 1rem;
    white-space: pre-line;
  }

  h2,
  strong {
    color: rgb(255 255 255);
    font-weight: 500;
  }

  div {
    white-space: pre-line;
  }

  white-space: pre-line;

  ol {
    counter-reset: step-counter;
    padding-left: 20px;
  }
  ol > li {
    margin-bottom: 20px;
    position: relative;
  }
  ol > li::before {
    counter-increment: step-counter;
    content: counter(step-counter) ". ";
    position: absolute;
    left: -2em;
    font-weight: bold;
    color: rgb(255 255 255);
  }

  ul {
    list-style-type: disc;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 16px;
    unicode-bidi: isolate;
    color: rgb(255 255 255);
  }

  li {
    margin-bottom: 0.75rem;
    font-size: 14px;
  }

  ${({ desc }) =>
    desc &&
    css`
      padding-left: 1rem;
      h2 {
        margin-bottom: 1rem;
        margin-left: -1rem;
      }

      ul {
        padding-inline-start: 32px;
      }

      strong::after {
        content: "";
        display: block;
        margin-bottom: 1.5em;
      }
      strong::before {
        content: "";
        display: block;
        margin-top: 1.5em;
      }
    `};
`;

export const RightIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightParentContainer = styled.div`
  width: calc(50% - 3.5px);
  height: 100%;
  display: flex;
  align-items: space-between;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
`;

export const TestCaseContainer = styled.div`
  background-color: #262626;
  border-radius: 8px;
  border-color: hsl(0, 0%, 100%, 0.1);
  border: ${({ selected }) =>
    selected ? css`1px solid #ffffff38` : css`0px solid`};
  padding: 8px 12px;
  width: 100%;
  margin-top: 8px;
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const RightContainer = styled.div`
  width: 100%;
  background-color: #262626;
  border: ${({ selected }) =>
    selected ? css`1px solid #ffffff38` : css`0px solid`};
  overflow: hidden;
  border-radius: 8px;
  height: fit-content;
  flex-grow: 1;
  .monaco-editor,
  .monaco-editor-background {
    background-color: #262626 !important;
  }
  .monaco-editor .margin {
    background-color: #262626 !important;
  }
  canvas {
    background-color: #262626 !important;
  }
  .decorationsOverviewRuler,
  .scrollbar,
  .slider {
    background-color: #262626 !important;
  }
  .monaco-editor.vs-dark .monaco-editor .overflow-guard {
    overflow-y: hidden !important;
  }
  .monaco-scrollable-element > .visible {
    opacity: 0;
  }
  section {
    border-radius: 8px;
  }
  .decorationsOverviewRuler,
  .scrollbar {
    display: none !important;
  }
  .margin {
    box-shadow: none !important;
  }
  .minimap.slider-mouseover {
    display: none !important;
  }
  .overflow-guard {
    border-radius: 8px;
  }
  .scroll-decoration {
    box-shadow: none !important;
  }
  .mtk1 {
    // color: #4ec9b0 !important;
  }
  .mtk8 {
    // color: #9cdcfe;
  }
  .margin {
    padding-top: 0.5rem;
  }
  .lines-content.monaco-editor-background {
    padding-top: 0.5rem;
  }
  .scroll-decoration,
  .textAreaCover {
    height: 0px;
  }
`;

export const LeftTag = styled.div`
  color: #f8615c;
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-bottom: 1rem;
  font-size: 12px;
  line-height: 16px;
  border-radius: 9999px;
  background-color: #ffffff1a;
  cursor: pointer;
`;

export const Editor = styled(MonacoEditor)``;

export const TabOptionsContainer = styled.div`
  padding: 0.25rem;
  border-color: #ffffff0f;
  border-bottom-width: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  text-align: start;
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    padding: 0.125rem;
    display: none;
  }
`;

export const TabOptionsText = styled.div`
  color: #fff9;
  font-size: 0.875rem;
  text-align: start;
`;

export const TabOptionsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    padding: 0.125rem;

    ${({ icons }) =>
      icons
        ? css`
            display: none;
          `
        : css``};
  }
`;

export const TabOptionsInnerContent = styled.div`
  border-radius: 0.5rem;
  padding: 0.125rem 0.375rem;

  &:hover {
    background-color: #ffffff1a;
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  background-color: #323232;
  border-radius: 0.5rem;
  position: absolute;
  top: 1rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.24), 0px 6px 16px rgba(0, 0, 0, 0.16);
  z-index: 40;
  top: calc(100%);
  font-size: 0.875rem;
  color: #f5f5f5;
  text-align: start;
`;

export const DropdownContainerContent = styled.div`
  text-align: start;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const DropdownContainerItem = styled.div`
  padding-right: 0.75rem;
  padding-left: 6px;
  padding-bottom: 6px;
  padding-top: 6px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  min-width: 17rem;
  align-items: center;
  justify-content: space-between;
  ${({ hovered }) =>
    hovered
      ? css`
          background-color: #ffffff1a;
        `
      : css``};
`;

export const DropdownContainerLeftItem = styled.div`
  display: flex;
  align-items: center;
`;

export const DropdownContainerRightItem = styled.div``;

export const DropdownContainerText = styled.p`
  font-size: 14px;
  color: #f5f5f5;
  margin-right: 0.75rem;
  text-align: start;
`;

export const MiddleLeftHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    display: none;
  }
`;
