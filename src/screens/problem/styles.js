import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: #0f0f0f;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  margin: 10px;
  height: calc(100% - 8px - 5vh);
  width: calc(100% - 16px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0px;
`;

export const LeftContainer = styled.div`
  width: calc(50% - 3.5px);
  height: 100%;
  background-color: #262626;
  border-radius: 8px;
  border-color: hsl(0, 0%, 100%, 0.1);
  border: 0 solid;
`;

export const RightContainer = styled.div`
  width: calc(50% - 3.5px);
  height: 100%;
  background-color: #262626;
  border-radius: 8px;
  border-color: hsl(0, 0%, 100%, 0.1);
  border: 0 solid;
`;

export const LogoImg = styled.img`
  height: 22px;
  width: auto;
  padding-right: 1rem;
`;

export const Header = styled.div`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  padding-left: 1.25rem;
`;

export const RightIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  top: 2px;
`;

export const LeftLI = styled.li`
  background-color: #ffffff14;
  width: 1px;
  height: 16px;
  margin-right: 1.2rem;
  list-style: none;
`;

export const TabHeader = styled.div`
  background-color: #ffffff0f;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 12px;
`;

export const TabItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

export const InActiveText = styled.p`
  color: #fff9;
`;
