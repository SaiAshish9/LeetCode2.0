import styled from "styled-components";

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
`;

export const Header = styled.div`
  height: 5vh;
`;
