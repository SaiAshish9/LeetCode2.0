
import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Card = styled.div`
  background: rgb(40 40 40);
  width: 100%;
  padding: 0.7rem 0;
  border-radius: 0.5rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
  margin-bottom: 1rem;
  margin-top: 3.6rem;
  position: relative;
  padding: 1rem 0.8rem;
`;

export const StyledImage = styled.img`
  cursor: pointer;
  width: 100%;
  height: 70px;
  width: fit-content;
  position: absolute;
  right: 1.2rem;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  top: -2rem;
  ${({ img }) =>
    img
      ? css`
          right: 0.95rem;
          top: -2rem;
          opacity: 0.6;
          &:hover {
            opacity: 1;
          }
        `
      : css``}
`;

export const StyledDayText = styled.p`
  color: #eff1f6bf;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;

export const CalendarCont = styled.div`
  display: flex;
  align-items: center;
`;

export const TimelineText = styled.p`
  color: #ebebf54d;
  font-size: 10px;
  position: relative;
  top: 1px;
  margin-left: 4px;
`;

export const TagsCont = styled.div`
  margin: 0.5rem 0px 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TagText = styled.span`
  color: #ebebf54d;
  width: 2rem;
  height: 2rem;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelsCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LabelText = styled.div`
  color: #eff2f699;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${({ highlighted }) =>
    highlighted &&
    css`
      color: #fff;
      border-radius: 50%;
      top: 0.4rem;
      font-weight: 500;
    `};
`;

export const LabelTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 2rem;
  height: 2rem;
  margin-top: 0.24rem;
  cursor: pointer;
  position: relative;
  ${({ highlighted }) =>
    highlighted &&
    css`
      color: #fff;
      background-color: rgb(44 187 93);
      border-radius: 50%;
      bottom: 0.4rem;
    `};
`;

export const Dot = styled.div`
  background: rgb(239 71 67);
  height: 0.25rem;
  width: 0.25rem;
  border-radius: 50%;
  margin-top: 0.1rem;
`;

export const WeeklyCard = styled.div`
  background-image: url("/bg.svg");
  width: 100%;
  height: 5rem;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  border-radius: 0.5rem;
  margin-top: 0.25rem;
`;

export const CalendarFoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const LabelValue = styled.p`
  font-size: 12px;
  ${({ tag }) =>
    tag
      ? css`
          color: rgb(44 187 93);
        `
      : css`
          color: #eff2f699;
        `}
`;

export const RedeemV = styled.img`
  height: 18px;
  width: 18px;
`;

export const RedeemCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const RedeemContText = styled.div`
  color: #eff1f6bf;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-weight: 500;
  font-size: 12px;
`;

export const StyledArrowLeftImg = styled.img`
  height: 14px;
  width: 14px;
  margin-left: 21%;
`;

export const StyledArrowRightImg = styled.img`
  height: 14px;
  width: 14px;
  position: absolute;
  right: 0.5rem;
  top: 1.36rem;
`;
