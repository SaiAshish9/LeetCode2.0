import React from "react";
import {
  CalendarCont,
  Card,
  Container,
  LabelsCont,
  LabelText,
  StyledDayText,
  StyledImage,
  TagsCont,
  TagText,
  TimelineText,
  LabelTextContainer,
  Dot,
  WeeklyCard,
  CalendarFoot,
  LabelValue,
  RedeemV,
  RedeemCont,
  RedeemContText,
  StyledArrowLeftImg,
  StyledArrowRightImg,
  WeeklyCardText,
  WeeklyCardSubText,
  WeeklyCardTextContainer,
  WeeklyCardTextCircularText,
} from "./styles";

import CalendarImg from "../../../../assets/calendar.png";
import CalendarSvgImg from "../../../../assets/calendar.svg";
import RedeemImg from "../../../../assets/redeem.png";

import CalendarMarginLeftSvg from "../../../../assets/calendarMarginLeft.svg";
import CalendarMarginRightSvg from "../../../../assets/calendarMarginRight.svg";

const Calender = () => {
  const weekTags = ["S", "M", "T", "W", "T", "F", "S"];

  let keys = [...Array(31).keys()].map((i, _) => i + 1);
  keys = ["", "", "", ...keys, ""];

  return (
    <Container>
      <Card>
        <CalendarCont>
          <StyledDayText>Day 28</StyledDayText>
          <TimelineText>07:10:55 left</TimelineText>
          <StyledArrowLeftImg src={CalendarMarginLeftSvg} alt="img" />
          <StyledArrowRightImg src={CalendarMarginRightSvg} alt="img" />
        </CalendarCont>
        <StyledImage src={CalendarSvgImg} alt="img" />
        <StyledImage img="true" src={CalendarImg} alt="img" />
        <TagsCont>
          {weekTags.map((tag, k) => (
            <TagText key={k}>{tag}</TagText>
          ))}
        </TagsCont>
        <LabelsCont>
          {keys.slice(0, 7).map((date, k) => (
            <LabelTextContainer highlighted={date === 28} key={k}>
              <LabelText highlighted={date === 28}>{date}</LabelText>
              {k > 2 && k < 30 && <Dot />}
            </LabelTextContainer>
          ))}
        </LabelsCont>
        <LabelsCont>
          {keys.slice(7, 14).map((date, k) => (
            <LabelTextContainer highlighted={date === 28} key={k}>
              <LabelText highlighted={date === 28}>{date}</LabelText>
              {k + 7 < 30 && <Dot />}
            </LabelTextContainer>
          ))}{" "}
        </LabelsCont>
        <LabelsCont>
          {keys.slice(14, 21).map((date, k) => (
            <LabelTextContainer highlighted={date === 28} key={k}>
              <LabelText highlighted={date === 28}>{date}</LabelText>
              {k + 14 < 30 && <Dot />}
            </LabelTextContainer>
          ))}{" "}
        </LabelsCont>
        <LabelsCont>
          {keys.slice(21, 28).map((date, k) => (
            <LabelTextContainer highlighted={date === 28} key={k}>
              <LabelText highlighted={date === 28}>{date}</LabelText>
              {k + 21 < 30 && <Dot />}
            </LabelTextContainer>
          ))}{" "}
        </LabelsCont>
        <LabelsCont>
          {keys.slice(28).map((date, k) => (
            <LabelTextContainer highlighted={date === 28} key={k}>
              <LabelText highlighted={date === 28}>{date}</LabelText>
              {k + 28 < 30 && <Dot />}
            </LabelTextContainer>
          ))}{" "}
        </LabelsCont>
        <WeeklyCard>
          <WeeklyCardTextContainer>
            <WeeklyCardText>Weekly Premium</WeeklyCardText>
            <WeeklyCardSubText>Less than a day</WeeklyCardSubText>
          </WeeklyCardTextContainer>
          <WeeklyCardTextContainer>
            {["W1", "W2", "W3", "W4", "W5"].map((i, k) => (
              <WeeklyCardTextCircularText
                active={k === 1}
                inactive={k > 1}
                key={k}
              >
                {i}
              </WeeklyCardTextCircularText>
            ))}
          </WeeklyCardTextContainer>
        </WeeklyCard>
        <CalendarFoot>
          <RedeemCont>
            <RedeemV src={RedeemImg} alt="img" />
            <RedeemContText>0</RedeemContText>
            <LabelValue tag>Redeem</LabelValue>
          </RedeemCont>
          <LabelValue>Rules</LabelValue>
        </CalendarFoot>
      </Card>
    </Container>
  );
};

export default Calender;
