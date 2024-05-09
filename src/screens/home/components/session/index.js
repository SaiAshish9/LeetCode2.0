import React from "react";
import {
  SessionContainer,
  Card,
  SessionText,
  Content,
  LevelText,
  ScoreText,
  TotalText,
  TextContainer,
  ScoreTextContainer,
  Circle,
  StatsContainer,
  StatsContent,
  SessionTopContainer,
  AnonymousButton,
  AnonymousSettingsButton,
  AnonymousRow,
  StyledImg,
  StyledPlanImg,
  PlanContent,
  PlanTitle,
  StudyPlanContent,
  PlanSubTitle,
  StyledArrowRightImg,
  StudyPlanRightContent,
  FeaturedContent,
  FeaturedContentItem,
  FeaturedStyledImg,
  FeaturedStyledText,
  ShowMoreText,
  StyledArrowDownImg,
  ShowMoreContent,
  LockImage,
  LockImageContainer,
  FeaturedContentText,
  ProgressCont,
  AllText,
  TotalScoreText,
  SessionScoreText,
  Divider
} from "./styles";
import SettingsImg from "../../../../assets/settings.svg";
import StudyPlanImg from "../../../../assets/lc_sts.svg";
import ArrowRightImg from "../../../../assets/arrow_right.svg";
import ArrowDownImg from "../../../../assets/arrow_down.svg";
import LockSvg from "../../../../assets/lock.svg";

import AssetImg1 from "../../../../assets/asset1.png";
import AssetImg2 from "../../../../assets/asset2.png";
import AssetImg3 from "../../../../assets/asset3.png";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const CircleContainer = () => {
  return (
    <CircularProgressbarWithChildren
      value={100}
      styles={buildStyles({
        trailColor: "rgb(74 74 74)",
        pathColor: "rgb(255 55 95)",
        strokeLinecap: "butt",
        strokeWidth: 3,
      })}
    >
      <CircularProgressbarWithChildren
        value={76}
        styles={buildStyles({
          pathColor: "rgb(255 192 30)",
          trailColor: "transparent",
          strokeLinecap: "butt",
        })}
      >
        <CircularProgressbarWithChildren
          value={22}
          styles={buildStyles({
            pathColor: "rgb(0 184 163)",
            trailColor: "transparent",
            strokeLinecap: "butt",
            strokeWidth: "3px",
          })}
        >
          <ProgressCont>
            <AllText>All</AllText>
            <TotalScoreText>3141</TotalScoreText>
            <Divider />
            <SessionScoreText>3141</SessionScoreText>
          </ProgressCont>
        </CircularProgressbarWithChildren>
      </CircularProgressbarWithChildren>
    </CircularProgressbarWithChildren>
  );
};

const SessionCard = () => {
  const assetInfo = [
    {
      img: AssetImg1,
      text: "Top Interview Questions",
    },
    {
      img: AssetImg2,
      text: "Top 100 Liked Questions",
    },
    {
      img: AssetImg3,
      text: "Top Facebook Questions",
      locked: true,
    },
  ];

  return (
    <SessionContainer>
      <Card>
        <Content>
          <SessionTopContainer>
            <SessionText>Session</SessionText>
            <AnonymousRow>
              <AnonymousButton>Anonymous</AnonymousButton>
              <AnonymousSettingsButton>
                <StyledImg alt="image" src={SettingsImg} />
              </AnonymousSettingsButton>
            </AnonymousRow>
          </SessionTopContainer>
          <StatsContainer>
            <Circle>
              <CircleContainer />
            </Circle>
            <StatsContent>
              <TextContainer>
                <LevelText easy>Easy</LevelText>
                <ScoreTextContainer>
                  <ScoreText>791</ScoreText>
                  <TotalText>/791</TotalText>
                </ScoreTextContainer>
              </TextContainer>
              <TextContainer>
                <LevelText medium>Medium</LevelText>
                <ScoreTextContainer>
                  <ScoreText>1650</ScoreText>
                  <TotalText>/1650</TotalText>
                </ScoreTextContainer>
              </TextContainer>
              <TextContainer>
                <LevelText>Hard</LevelText>
                <ScoreTextContainer>
                  <ScoreText>700</ScoreText>
                  <TotalText>/700</TotalText>
                </ScoreTextContainer>
              </TextContainer>
            </StatsContent>
          </StatsContainer>
        </Content>
      </Card>
      <Card>
        <Content>
          <StudyPlanContent>
            <StyledPlanImg src={StudyPlanImg} alt="plan" />
            <StudyPlanRightContent>
              <PlanContent>
                <PlanTitle>Study Plan</PlanTitle>
                <PlanSubTitle>Complete and win badges</PlanSubTitle>
              </PlanContent>
              <StyledArrowRightImg src={ArrowRightImg} alt="img" />
            </StudyPlanRightContent>
          </StudyPlanContent>
        </Content>
      </Card>
      <Card>
        <Content>
          <FeaturedContentText>Featured Lists</FeaturedContentText>
          <FeaturedContent>
            {assetInfo.map((i, _) => (
              <FeaturedContentItem key={i.text}>
                <FeaturedStyledImg src={i.img} alt="image" />
                <LockImageContainer>
                  <FeaturedStyledText>{i.text}</FeaturedStyledText>
                  {i.locked && <LockImage src={LockSvg} alt="lock" />}
                </LockImageContainer>
              </FeaturedContentItem>
            ))}
          </FeaturedContent>
          <ShowMoreContent>
            <StyledArrowDownImg src={ArrowDownImg} alt="img" />
            <ShowMoreText>Show More</ShowMoreText>
          </ShowMoreContent>
        </Content>
      </Card>
    </SessionContainer>
  );
};

export default SessionCard;
