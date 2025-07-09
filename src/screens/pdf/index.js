import React, { useCallback } from "react";
import { Content, HomeComponent, TopLeftContainer } from "../home/styles";
import { Options } from "../home/components";

const data = [
  { text: "DSA Patterns" },
  { text: "HLD Concepts" },
  { text: "LLD Patterns" },
  { text: "LeetCode DataStructures Design" },
  { text: "LLD (W/O Spring)" },
  { text: "DP Patterns" },
  { text: "Amazon and Coupang LPs" },
];
const paths = {
  [data[0].text]: "/pdf/Problem Solving Patterns.pdf",
  [data[1].text]: "/pdf/HLD_Concepts_Brief_Overview.pdf",
  [data[2].text]: "/pdf/Design Patterns Use Cases.pdf",
  [data[3].text]: "/pdf/LeetCode_Design_Questions.pdf",
  [data[4].text]: "/pdf/Low_Level_Design_(WO_Spring).pdf",
  [data[5].text]: "/pdf/DP_Conceptual_Patterns.pdf",
  [data[6].text]: "/pdf/Amazon_Leadership_Principles.pdf",
};

const PDFs = () => {
  const handleClick = useCallback((path) => {
    if (paths[path]) {
      const url = paths[path];
      window.open(url, "_blank");
    }
  }, []);

  return (
    <HomeComponent>
      <Content>
        <TopLeftContainer>
          <p>Select the PDF:</p>
          <Options data={data} onClick={handleClick} />
        </TopLeftContainer>
      </Content>
    </HomeComponent>
  );
};

export default PDFs;
