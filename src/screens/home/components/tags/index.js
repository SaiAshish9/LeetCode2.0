import React, { useState, useEffect } from "react";
import {
  ArrowImg,
  Container,
  ExpandContainer,
  ExpandContainerText,
  TagContainer,
  TagCount,
  TagName,
  TagContent,
} from "./styles";

import DoubleArrowDownImg from "../../../../assets/doubleArrowDown.svg";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [initialTags, setInitialTags] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  function fetchData() {
    fetch(
      "https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/tags.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setInitialTags(res);
        setTags(tags);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleToggleClick() {
    if (!isExpanded) {
      setTags((tags) => tags.slice(0, 7));
    } else {
      setTags(initialTags);
    }
    setIsExpanded((isExpanded) => !isExpanded);
  }

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
      <ExpandContainer onClick={() => handleToggleClick()}>
        <ExpandContainerText>
          {isExpanded ? "Expand" : "Collapse"}
        </ExpandContainerText>
        <ArrowImg src={DoubleArrowDownImg} alt="img" />
      </ExpandContainer>
    </Container>
  );
};

export default Tags;