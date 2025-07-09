import React from "react";
import { Content, HomeComponent, TopLeftContainer } from "../home/styles";
import { Options } from "../home/components";

const PDFs = () => {
  const data = [
    { text: "DSA Patterns" },
    { text: "HLD Concepts" },
    { text: "LLD Patterns" },
    { text: "LeetCode Design Questions" },
    { text: "DP Patterns" },
  ];

  const handleClick = () => {
    const url =
      "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf";
    const win = window.open(url, "_blank");

    if (win) {
      win.focus();
      win.onload = () => {
        win.document.body.requestFullscreen?.();
      };
    }
  };

  return (
    <HomeComponent>
      <Content>
        <TopLeftContainer>
          <Options data={data} onClick={handleClick} />
        </TopLeftContainer>
      </Content>
    </HomeComponent>
  );
};

export default PDFs;
