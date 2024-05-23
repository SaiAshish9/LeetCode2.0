import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../../screens/constants";
import { HiBars3 } from "react-icons/hi2";

export const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  ${({ tags }) =>
    tags
      ? css`
          background-color: #fff;
        `
      : css`
          background-color: rgb(40 40 40);
          box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,
            0px 1px 3px #0000003d, 0px 2px 8px #00000029;
        `};
`;

export const NavContent = styled.div`
  width: 100%;
  max-width: 72vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1.25rem;
  height: 3.1rem;
  @media only screen and (max-width: ${BREAKPOINTS.x100}) {
    max-width: 82vw;
  }
  @media only screen and (max-width: ${BREAKPOINTS.xl}) {
    max-width: 90vw;
  }
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    max-width: 100vw;
  }
`;

export const StyledImage = styled.img`
  align-self: center;
  width: auto;
  height: 22px;
  position: relative;
  top: 2px;
  @media only screen and (max-width: ${BREAKPOINTS.x100}) {
    top: -1px;
  }
`;

export const CircularAvatar = styled.img`
  border-radius: 50%;
  background: #fff;
  width: 24px;
  height: 24px;
  position: relative;
  top: 2px;
  margin-right: 1.2rem;
`;

export const NavItem = styled.p`
  color: #eff1f6bf;
  align-self: flex-end;
  margin-left: 1.75rem;
  cursor: pointer;
  font-size: 0.9rem;
  padding-bottom: 0.75rem;
  font-weight: 400;
  border-bottom: 2.4px solid transparent;
  &:hover {
    color: rgba(255, 255, 255);
  }
  ${({ text, route }) =>
    ["HLD", "LLD"].includes(text)
      ? css`
          color: rgb(255 161 22);
          &:hover {
            color: rgb(255 161 22);
          }
        `
      : route
      ? css`
          border-bottom: 2.4px solid #fff;
          color: #fff;
        `
      : css``};

  ${({ isHome }) =>
    !isHome
      ? css`
          color: rgba(0, 0, 0, 0.55);
          &:hover {
            color: rgb(0, 0, 0);
          }
        `
      : css``};
`;

export const NavItemContainer = styled.div`
  display: flex;
`;

export const OptionsContainer = styled.div`
  display: flex;
  @media only screen and (max-width: ${BREAKPOINTS.x175}) {
    display: none;
  }
`;

export const CircularContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
`;

export const NavIcon = styled.div`
  align-self: center;
  display: flex;
  cursor: pointer;
  ${({ noMR }) =>
    !noMR
      ? css`
          margin-right: 1.2rem;
        `
      : css``};

  ${({ hidden }) =>
    hidden &&
    css`
      visibility: hidden;
    `}
`;

export const ScoreText = styled.p`
  color: rgb(138 138 138);
  font-weight: 500;
  font-size: 14px;
  margin-left: 0.27rem;
  position: relative;
  top: 2px;
  @media only screen and (max-width: ${BREAKPOINTS.x100}) {
    top: -1px;
  }
`;

export const PremiumButton = styled.div`
  border-radius: 8px;
  color: rgb(255 161 22);
  cursor: pointer;
  @media only screen and (max-width: ${BREAKPOINTS.x175}) {
    display: none;
  }
`;

export const PremiumText = styled.p`
  background-color: #ffa1161f;
  width: fit-content;
  font-size: 14px;
  padding: 0.375rem 0.75rem;
  border-radius: 5px;
  height: fit-content;
`;

export const StudyPlanContent = styled.div`
  display: flex;
  align-items: center;
`;

export const BarsIcon = styled(HiBars3)`
  font-size: 24px;
  align-self: center;
  cursor: pointer;
`;
