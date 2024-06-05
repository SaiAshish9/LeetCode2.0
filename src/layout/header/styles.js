import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../../screens/constants";
import { HiBars3 } from "react-icons/hi2";
import { Drawer } from "antd";
import { IoMdClose } from "react-icons/io";

export const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  z-index: 20;
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
  @media only screen and (max-width: ${BREAKPOINTS.x125}) {
    max-width: 95vw;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x125}) {
    max-width: 90vw;
  }
  @media only screen and (min-width: ${BREAKPOINTS.xl}) {
    max-width: 72vw;
  }
  @media only screen and (max-width: ${BREAKPOINTS.x110}) {
    max-width: 95vw;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x110}) {
    max-width: 90vw;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x100}) {
    max-width: 82vw;
  }
  @media only screen and (min-width: ${BREAKPOINTS.xxl}) {
    max-width: 72vw;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x75}) {
    max-width: 64.5vw;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x67}) {
    max-width: 50.5vw;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x50}) {
    max-width: 40vw;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x33}) {
    max-width: 30vw;
  }
  @media only screen and (min-width: ${BREAKPOINTS.x25}) {
    max-width: 20vw;
  }
  @media only screen and (max-width: ${BREAKPOINTS.x175}) {
    max-width: 98vw;
  }
  @media only screen and (max-width: ${BREAKPOINTS.x200}) {
    max-width: 100vw;
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
  cursor: pointer;
`;

export const CircularAvatar = styled.img`
  border-radius: 50%;
  background: #fff;
  width: 21px;
  height: 21px;
  position: relative;
  top: 2px;
  margin-right: 1.2rem;
  @media only screen and (max-width: ${BREAKPOINTS.x100}) {
    top: 0px;
  }
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
          border-bottom: ${route
            ? "2.4px solid rgb(255 161 22)"
            : "2.4px solid transparent"};
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

  ${({ isHome, text }) =>
    !isHome && ["HLD", "LLD"].includes(text)
      ? css`
          color: rgb(255 161 22);
          &:hover {
            color: rgb(255 161 22);
          }
        `
      : css``};
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin-bottom: 1rem;
    font-size: 1.08rem;
  ${({ text, route }) =>
    ["HLD", "LLD"].includes(text)
      ? css`
          border-bottom: 2.4px solid transparent;
        `
      : route
      ? css`
          border-bottom: 2.4px solid transparent;
        `
      : css``};
  }
}
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
  @media only screen and (max-width: ${BREAKPOINTS.x175}) {
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
  @media only screen and (min-width: ${BREAKPOINTS.x175}) {
    display: none;
  }
  ${({ w }) =>
    w &&
    css`
      color: #fff9;
    `}
`;

export const CloseIcon = styled(IoMdClose)`
  font-size: 24px;
  align-self: center;
  cursor: pointer;
  @media only screen and (min-width: ${BREAKPOINTS.x175}) {
    display: none;
  }
  ${({ w }) =>
    w &&
    css`
      color: #fff9;
    `}
`;

export const StyledDrawer = styled(Drawer)`
  background: rgb(40 40 40) !important;
  padding-top: 1.5rem;
`;
