import React from "react";
import { Card, CardTitle, TagConst, TagSpan, TagsContainer } from "./styles";
import { COMPANIES } from "../../../problem/data";

// [
//   ...Array(10)
//     .keys()
//     .map((x) => x + 1),
// ]

const TaggedQuestions = () => {
  return (
    <Card>
      <CardTitle>Trending Companies</CardTitle>
      <TagsContainer>
        {COMPANIES.slice(0, 20).map((item, _) => (
          <TagConst key={item.text}>
            {item.text} <TagSpan>{item.count}</TagSpan>
          </TagConst>
        ))}
      </TagsContainer>
    </Card>
  );
};

export default TaggedQuestions;
