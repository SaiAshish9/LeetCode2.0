import React from "react";
import {
  HomeComponent,
  Content,
  TopLeftContainer,
  TopRightContainer,
  SBottomContainer,
} from "./styles";
import {
  Banner,
  DropdownCont,
  Options,
  SessionCard,
  Table,
  Tags,
  Calendar,
  Fab,
  TaggedQuestions,
} from "./components";

import "react-circular-progressbar/dist/styles.css";
import { Helmet } from "react-helmet";

import Btn1 from "../../assets/btn1.svg";
import Btn2 from "../../assets/btn2.svg";
import Btn3 from "../../assets/btn3.svg";
import Btn4 from "../../assets/btn4.svg";
import Btn5 from "../../assets/btn5.svg";

const HomeScreen = () => {
  const data = [
    {
      icon: Btn1,
      text: "All Topics",
    },
    {
      icon: Btn2,
      text: "Algorithms",
    },
    {
      icon: Btn3,
      text: "Database",
    },
    {
      icon: Btn4,
      text: "Shell",
    },
    {
      icon: Btn5,
      text: "Concurrency",
    },
  ];

  return (
    <HomeComponent>
      <Helmet>
        <meta property="og:title" content="LeetCode2.0" />
        <meta property="og:description" content="3K+ Optimal Solutions" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/LeetCode2.0.png"
        />
        <meta property="og:url" content="https://leetcodev2.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Content>
        <TopLeftContainer>
          {/* <Banner /> */}
          <Tags />
          <Options data={data} />
          <DropdownCont />
          <Table />
          <SBottomContainer>
            <Calendar />
            <TaggedQuestions />
            <SessionCard />
          </SBottomContainer>
        </TopLeftContainer>
        <TopRightContainer>
          <SessionCard />
          <Calendar />
          <TaggedQuestions />
        </TopRightContainer>
      </Content>
      <Fab />
    </HomeComponent>
  );
};

export default HomeScreen;
