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
} from "./components";

import "react-circular-progressbar/dist/styles.css";

const HomeScreen = () => {
  return (
    <HomeComponent>
      <Content>
        <TopLeftContainer>
          <Banner />
          <Tags />
          <Options />
          <DropdownCont />
          <Table />
          <SBottomContainer>
            <Calendar />
            <SessionCard />
          </SBottomContainer>
        </TopLeftContainer>
        <TopRightContainer>
          <SessionCard />
          <Calendar />
        </TopRightContainer>
      </Content>
      <Fab />
    </HomeComponent>
  );
};

export default HomeScreen;
