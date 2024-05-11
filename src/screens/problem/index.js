import React from "react";
import {
  Container,
  Content,
  Header,
  LeftContainer,
  LogoImg,
  RightContainer,
} from "./styles";

const Problem = () => {
  // https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png
  return (
    <Container>
      <Header >
      <LogoImg
            alt="img"
            src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
          />
      </Header>
      <Content>
        <LeftContainer>
        </LeftContainer>
        <RightContainer></RightContainer>
      </Content>
    </Container>
  );
};

export default Problem;
