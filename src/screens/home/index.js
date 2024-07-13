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

const HomeScreen = () => {
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
          <Banner />
          <Tags />
          <Options />
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
