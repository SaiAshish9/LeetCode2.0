import React from "react";
import {
  HomeComponent,
  Content,
  TopLeftContainer,
  TopRightContainer,
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
