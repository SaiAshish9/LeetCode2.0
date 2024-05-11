import React from "react";
import {
  Container,
  Content,
  Header,
  LeftContainer,
  LeftIconContainer,
  LeftLI,
  LogoImg,
  ProblemText,
  RightContainer,
  RightIconContainer,
  TabHeader,
  TabItem,
  TabText,
} from "./styles";
import {
  CircularAvatar,
  NavIcon,
  PremiumButton,
  PremiumText,
  ScoreText,
  StyledImage,
} from "../../layout/header/styles";
import BellSvg from "../../assets/bell.svg";
import FireSvg from "../../assets/fire.svg";
import SettingsIconSvg from "../../assets/settings_icon.svg";
import BarsSvg from "../../assets/bars.svg";
import BarsLeftSvg from "../../assets/bars_left.svg";
import ArrowLeft from "../../assets/arrow_left.svg";
import ArrowRight from "../../assets/arrow_right1.svg";
import ShuffleImg from "../../assets/shuffle.svg";

const Problem = () => {
  // https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png
  return (
    <Container>
      <Header>
        <LeftIconContainer>
          <LogoImg
            style={{ paddingRight: "0.5rem" }}
            alt="img"
            src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
          />
          <LeftLI />
          <NavIcon
            style={{
              marginRight: "0.7rem",
              position: "relative",
              bottom: "1px",
            }}
          >
            <StyledImage
              style={{ height: "16px" }}
              alt="img"
              src={BarsLeftSvg}
            />
          </NavIcon>
          <ProblemText>Problem List</ProblemText>
          <NavIcon>
            <StyledImage style={{ height: "16px" }} alt="img" src={ArrowLeft} />
          </NavIcon>
          <NavIcon>
            <StyledImage
              style={{ height: "16px" }}
              alt="img"
              src={ArrowRight}
            />
          </NavIcon>
          <NavIcon>
            <StyledImage
              style={{ height: "16px" }}
              alt="img"
              src={ShuffleImg}
            />
          </NavIcon>
        </LeftIconContainer>
        <RightIconContainer>
          <NavIcon>
            <StyledImage style={{ height: "16px" }} alt="img" src={BarsSvg} />
          </NavIcon>
          <NavIcon>
            <StyledImage
              style={{ height: "16px" }}
              alt="img"
              src={SettingsIconSvg}
            />
          </NavIcon>
          <NavIcon>
            <StyledImage style={{ height: "20px" }} alt="img" src={BellSvg} />
          </NavIcon>
          <NavIcon>
            <StyledImage style={{ height: "20px" }} alt="img" src={FireSvg} />
            <ScoreText>0</ScoreText>
          </NavIcon>
          <CircularAvatar
            alt="pic"
            //   src={AvatarPic}
            src="https://media.licdn.com/dms/image/D5603AQEhLMd3-TOQQQ/profile-displayphoto-shrink_400_400/0/1681547463721?e=1720656000&v=beta&t=STL35y3eyP6AIE96k00KBK4Pokjgf4pK9Jl9U4Xqquw"
          />
          <NavIcon noMR>
            <PremiumButton>
              <PremiumText>Premium</PremiumText>
            </PremiumButton>
          </NavIcon>
        </RightIconContainer>
      </Header>
      <Content>
        <LeftContainer>
          <TabHeader>
            <TabItem>
              <TabText>Description</TabText>
            </TabItem>
            <TabItem>
              <TabText inActive>Solutioning</TabText>
            </TabItem>
          </TabHeader>
        </LeftContainer>
        <RightContainer>
          <TabHeader>
            <TabItem>
              <TabText>Code</TabText>
            </TabItem>
          </TabHeader>
        </RightContainer>
      </Content>
    </Container>
  );
};

export default Problem;
