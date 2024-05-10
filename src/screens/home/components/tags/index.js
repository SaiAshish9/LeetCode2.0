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
        setTags(res);
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

  function handleTagClick(e, tag) {
    e.preventDefault();
    e.stopPropagation();
    window.open("/tag/" + tag.toLowerCase().replace(" ", "_"),'_blank', 'rel=noopener noreferrer')
  }

  return (
    <Container>
      <TagContent>
        {tags.map((i, _) => (
          <TagContainer onClick={(e) => handleTagClick(e, i.tag)} key={i.tag}>
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
