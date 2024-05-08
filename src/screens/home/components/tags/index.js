import React from "react";
import {
  ArrowImg,
  Container,
  ExpandContainer,
  ExpandContainerText,
  TagContainer,
  TagCount,
  TagName,
  TagContent
} from "./styles";

import DoubleArrowDownImg from "../../../../assets/doubleArrowDown.svg";

const Tags = () => {
  const tags = [
    {
      tag: "Array",
      count: 1325,
    },
    {
      tag: "String",
      count: 604,
    },
    {
      tag: "Hash Table",
      count: 460,
    },
    {
      tag: "Dynamic Programming",
      count: 421,
    },
    {
      tag: "Math",
      count: 419,
    },
    {
      tag: "Sorting",
      count: 301,
    },
    {
      tag: "Greedy",
      count: 296,
    },
  ];

  return (
    <Container>
      <TagContent>
        {tags.map((i, _) => (
          <TagContainer key={i.tag}>
            <TagName>{i.tag}</TagName>
            <TagCount>{i.count}</TagCount>
          </TagContainer>
        ))}
      </TagContent>
      <ExpandContainer>
        <ExpandContainerText>Expand</ExpandContainerText>
        <ArrowImg src={DoubleArrowDownImg} alt="img" />
      </ExpandContainer>
    </Container>
  );
};

export default Tags;
