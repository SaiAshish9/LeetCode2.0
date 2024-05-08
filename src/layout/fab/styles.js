import styled, { css } from "styled-components";

export const FabBtn = styled.div`
  height: 48px;
  width: 48px;
  cursor: pointer;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(40 40 40);
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  ${({ fab }) =>
    fab &&
    css`
      bottom: 5.7rem;
      right: 2rem;
    `}
`;

export const Container = styled.div``;

export const StyledImg = styled.img`
  height: 24px;
  width: 24px;
`;
