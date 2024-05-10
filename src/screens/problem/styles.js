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
  border-radius: 8px;
  background-color: #262626;
  height: calc(100% - 8px - 5vh);
  width: calc(100% - 16px);
  margin-top: 5vh;
  border-color: hsl(0,0%,100%,0.1);
  border: 0 solid;
`;
