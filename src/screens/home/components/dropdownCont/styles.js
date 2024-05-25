import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../../../constants";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.7rem;
  margin-bottom: 1rem;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    padding: 0 2%;
  }
`;
// margin-bottom: 1.8rem;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DropDownLeftContainer = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    margin-bottom: 0.8rem;
  }
`;

export const DropDownRightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Dropdown = styled.div`
  color: #eff1f6bf;
  background-color: #ffffff1a;
  font-size: 0.85rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
  border-radius: 5px;
  padding: 0 0.75rem;
  height: 1.8rem;
  margin-right: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  ${({ ss }) =>
    ss &&
    css`
      @media only screen and (max-width: ${BREAKPOINTS.lg}) {
        display: none;
      }
    `}
`;

export const PickOneContainer = styled.div`
  color: rgb(44 187 93);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
`;

export const PickOneContainer1 = styled.div`
  color: rgb(44 187 93);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  margin-left: 0.75rem;
  @media only screen and (min-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
`;

export const ArrowDowmImage = styled.img`
  margin-left: 0.5rem;
  width: 17px;
  height: 17px;
`;

export const PickOneBubble = styled.img`
  height: 18px;
  width: 18px;
`;

export const BubbleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2cbb5d;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 5px 15px 0 #2db55d66;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin-right: 0.625rem;
`;

export const StyledSettingsImage = styled.img`
  height: 1.8rem;
  width: 1rem;
`;

export const StyledSettingsImageContainer = styled.div`
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
  border-radius: 5px;
  background-color: #ffffff1a;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

export const TextInputContainer = styled.div`
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
  border-radius: 5px;
  background-color: #ffffff1a;
  padding: 0 0.75rem;
  height: 1.8rem;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  color: rgb(138 138 138);
  font-size: 1rem;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    padding-right: 0.3rem;
  }
`;

export const StyledSearchImage = styled.img``;

export const InputContainer = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  padding-left: 0.375rem;
  padding-right: 0.25rem;
  font-size: 0.85rem;
  color: #fff !important;
  &:placeholder {
    color: rgba(138 138 138, 0.7);
  }
`;

export const PickOneText = styled.span`
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
`;
