import React, { useState } from "react";
import {
  ArrowContainers,
  ArrowLeftBackgroundContainer,
  ArrowRightBackgroundContainer,
  Card,
  CardTitle,
  CardTitleContainer,
  InputContainer,
  TagConst,
  TagSpan,
  TagsContainer,
} from "./styles";
import { COMPANIES } from "../../../problem/data";

import SearchSVG from "../../../../assets/search.svg";
import ArrowLeftSvg from "../../../../assets/arrowLeft.svg";
import ArrowRightSvg from "../../../../assets/arrowRight.svg";

// [
//   ...Array(10)
//     .keys()
//     .map((x) => x + 1),
// ]

const TaggedQuestions = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState(COMPANIES.slice(0, 20));

  return (
    <Card>
      <CardTitleContainer>
        <CardTitle>Trending Companies</CardTitle>
        <ArrowContainers>
          <ArrowLeftBackgroundContainer>
            <img alt="" src={ArrowLeftSvg} />
          </ArrowLeftBackgroundContainer>
          <ArrowRightBackgroundContainer>
            <img alt="" src={ArrowRightSvg} />
          </ArrowRightBackgroundContainer>
        </ArrowContainers>
      </CardTitleContainer>
      <InputContainer>
        <img src={SearchSVG} alt="" />
        <input
          value={value}
          onChange={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const temp = e.target.value;
            setValue(temp);
            setData(
              COMPANIES.filter((x) => x.text.toLowerCase().includes(temp))
            );
          }}
          placeholder="Search for a company..."
        />
      </InputContainer>
      <TagsContainer>
        {data.slice(0, 20).map((item, _) => (
          <TagConst key={item.text}>
            {item.text} <TagSpan>{item.count}</TagSpan>
          </TagConst>
        ))}
      </TagsContainer>
    </Card>
  );
};

export default TaggedQuestions;
