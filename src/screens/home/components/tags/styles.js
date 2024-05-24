import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

export const TagContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  white-space: nowrap;
  ${({ isExpanded }) =>
    isExpanded
      ? css`
          flex-wrap: wrap;
        `
      : css`
          flex-wrap: nowrap;
        `}
`;

export const TagName = styled.p`
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: rgb(10 132 255);
  }
`;

export const TagCount = styled.p`
  color: #eff2f699;
  background-color: #ffffff1a;
  border-radius: 10px;
  height: 18px;
  padding: 0 0.375rem;
  font-size: 0.75rem;
  margin-left: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  margin: 10px;
`;

export const ExpandContainer = styled.div`
  color: #eff2f699;
  background-color: rgb(26 26 26);
  height: 18px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  z-index: 100;
  ${({ isExpanded }) =>
    isExpanded
      ? css`
          bottom: 10px;
        `
      : css`
          top: 10px;
        `}
  padding: 0.125rem 0.5rem;
  padding-right: 0px;
`;

export const ExpandContainerText = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  background-color: rgb(26 26 26);
`;

export const ArrowImg = styled.img`
  height: 0.9rem;
  width: 0.9rem;
  margin-left: 0.1rem;
`;
