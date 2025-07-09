import React from "react";
import { Content, HomeComponent, TopLeftContainer } from "../home/styles";
import { Options } from "../home/components";
import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
  RPConfig,
  RPTheme,
} from "@pdf-viewer/react";

const PDFs = () => {
  const data = [
    {
      text: "DSA Patterns",
    },
    {
      text: "HLD Concepts",
    },
    {
      text: "LLD Patterns",
    },
    {
      text: "LeetCode Design Questions",
    },
    {
      text: "DP Patterns",
    },
  ];

  function handleClick() {}

  return (
    <HomeComponent>
      <Content>
        <TopLeftContainer>
          <Options data={data} onClick={handleClick} />
        </TopLeftContainer>
      </Content>

      <RPConfig>
        <RPProvider src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf">
          <RPTheme
            // Set your styles to the CSS variables
            customVariables={{
              "--rp-text-color": "rgb(40 40 40)",
              "--rp-toolbar-background": "#fff",
              "--rp-pages-background-color": "#fff",
            }}
            // Set your dark mode styles to the CSS variables
            customDarkVariables={{
              "--rp-text-color": "rgb(40 40 40)",
            }}
          >
            <RPDefaultLayout style={{ height: "80vh" }}>
              <RPPages />
            </RPDefaultLayout>
          </RPTheme>
        </RPProvider>
      </RPConfig>
    </HomeComponent>
  );
};

export default PDFs;
