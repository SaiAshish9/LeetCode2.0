import React, { useCallback } from "react";
import { Content, HomeComponent, TopLeftContainer } from "../home/styles";
import { Options } from "../home/components";
import { StyledText } from "../home/components/options/styles";

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
  [data[0].text]: "https://github.com/SaiAshish9/PDF_Notes/blob/main/Problem%20Solving%20Patterns_compressed.pdf",
  [data[1].text]: "https://github.com/SaiAshish9/PDF_Notes/blob/main/HLD_Concepts_Brief_Overview.pdf",
  [data[2].text]: "https://github.com/SaiAshish9/PDF_Notes/blob/main/Design%20Patterns%20Use%20Cases.pdf",
  [data[3].text]: "https://github.com/SaiAshish9/PDF_Notes/blob/main/LeetCode_Design_Questions_compressed.pdf",
  [data[4].text]: "https://github.com/SaiAshish9/PDF_Notes/blob/main/Low_Level_Design_(WO_Spring).pdf",
  [data[5].text]: "https://github.com/SaiAshish9/PDF_Notes/blob/main/DP_Conceptual_Patterns.pdf",
  [data[6].text]: "https://github.com/SaiAshish9/PDF_Notes/blob/main/Amazon_Leadership_Principles.pdf",
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
          <StyledText>Select the PDF:</StyledText>
          <Options data={data} onClick={handleClick} />
        </TopLeftContainer>
      </Content>
    </HomeComponent>
  );
};

export default PDFs;
