import React from "react";
import {
  BookmarkIcon,
  BookmarkSpan,
  BookmarkText,
  Container,
  Content,
  ContentSpan,
  ContentText,
  ContentTextBold,
  Switch,
  Tab,
  TabContainer,
  TabText,
} from "./styles";

const QSList = () => {
  return (
    <Container>
      <Switch>
        <BookmarkText>
          <BookmarkIcon />
          <BookmarkSpan>Biconnected Component</BookmarkSpan>
        </BookmarkText>
        <TabContainer>
          <Tab>
            <TabText>Problems</TabText>
          </Tab>
          <Tab inactive>
            <TabText>Description</TabText>
          </Tab>
        </TabContainer>
      </Switch>
      <Content>
        <ContentText>
          <ContentSpan>Subscribe </ContentSpan>
          to see which companies asked this question
        </ContentText>
        <ContentText>
          You have solved <ContentTextBold>1 / 1</ContentTextBold> problems.
        </ContentText>
        <ContentText>
          <input type="chekbox" checked />
          <ContentTextBold>Show problem tags</ContentTextBold>
        </ContentText>
      </Content>
    </Container>
  );
};

export default QSList;
