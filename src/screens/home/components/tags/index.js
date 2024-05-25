import React, { useState, useEffect, useCallback } from "react";
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
import DoubleArrowUpImg from "../../../../assets/arrow_double_up.svg";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [initialTags, setInitialTags] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const fetchData = useCallback(() => {
    fetch(
      "https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/tags.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setInitialTags(res);
        setTags(
          isExpanded
            ? res
            : res.slice(0, document.body.scrollWidth < 968 ? 3 : 7)
        );
      })
      .catch((err) => console.log(err));
  }, [isExpanded]);

  useEffect(() => {
    fetchData();

    window.addEventListener("resize", fetchData);

    return () => {
      window.removeEventListener("resize", fetchData);
    };
  }, [fetchData]);

  function handleToggleClick() {
    if (isExpanded) {
      setTags((tags) => tags.slice(0, document.body.scrollWidth < 968 ? 3 : 7));
    } else {
      setTags(initialTags);
    }
    setIsExpanded((isExpanded) => !isExpanded);
  }

  function handleTagClick(e, tag) {
    e.preventDefault();
    e.stopPropagation();
    window.open("/tag/" + tag.toLowerCase().replace(" ", "_"), "_blank");
  }

  return (
    <Container>
      <TagContent isExpanded={isExpanded}>
        {tags.map((i, _) => (
          <TagContainer onClick={(e) => handleTagClick(e, i.tag)} key={i.tag}>
            <TagName>{i.tag}</TagName>
            <TagCount>{i.count}</TagCount>
          </TagContainer>
        ))}
      </TagContent>
      <ExpandContainer
        isExpanded={isExpanded}
        onClick={() => handleToggleClick()}
      >
        <ExpandContainerText>
          {!isExpanded ? "Expand" : "Collapse"}
        </ExpandContainerText>
        <ArrowImg
          src={!isExpanded ? DoubleArrowDownImg : DoubleArrowUpImg}
          alt="img"
        />
      </ExpandContainer>
    </Container>
  );
};

export default Tags;
