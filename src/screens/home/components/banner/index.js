import React from "react";
import LC1 from "../../../../assets/lc.png";
import LC2 from "../../../../assets/lc1.png";
import LC3 from "../../../../assets/lc2.png";
import {
  ArrowBox,
  ArrowContainer,
  Container,
  Content,
  StyledArrowImg,
  StyledImg,
  StyledSliderImage,
  StyledSliderText,
  TopSliderContainer,
  Border
} from "./styles";

import L1Img from "../../../../assets/l1.png";
import L2Img from "../../../../assets/l2.png";
import L3Img from "../../../../assets/l3.png";
import L4Img from "../../../../assets/l4.png";
import L5Img from "../../../../assets/l5.png";

import ArrowLeftImg from "../../../../assets/left.svg";
import ArrowRightImg from "../../../../assets/right.svg";

const LImages = [
  {
    img: L1Img,
    text: "LeetCode 75 Study Plan to Ace Interviews",
  },
  {
    img: L2Img,
    text: "14 Days Study Plan to Crack Algo",
  },
  {
    img: L3Img,
    text: "2 Weeks Study Plan to Tackle DS",
  },
  {
    img: L4Img,
    text: "SQL Study Plan",
  },
  {
    img: L5Img,
    text: "Ultimate DP Study Plan",
  },
];

const Banner = () => {
  const images = [LC1, LC2, LC3];

  return (
    <>
      <TopSliderContainer>
        <Container>
          {images.map((i, k) => (
            <StyledImg key={k} src={i} alt="img" />
          ))}
        </Container>
      </TopSliderContainer>
      <ArrowContainer>
        <ArrowBox>
          <StyledArrowImg src={ArrowLeftImg} alt="img" />
        </ArrowBox>
        <ArrowBox>
          <StyledArrowImg src={ArrowRightImg} alt="img" />
        </ArrowBox>
      </ArrowContainer>
      <Container>
        {LImages.map((i, _) => (
          <Content key={i.text}>
            <StyledSliderImage src={i.img} alt="img" />
            <StyledSliderText>{i.text}</StyledSliderText>
          </Content>
        ))}
      </Container>
      <Border />
    </>
  );
};

export default Banner;
