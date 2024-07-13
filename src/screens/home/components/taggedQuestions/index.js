import React, { useState, useRef } from "react";
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
import ArrowLeftDisabledSvg from "../../../../assets/arrow_left_disabled.svg";
import ArrowRightSvg from "../../../../assets/arrowRight.svg";
import ArrowRightDisabledSvg from "../../../../assets/arrowRightDisabled.svg";

// [
//   ...Array(10)
//     .keys()
//     .map((x) => x + 1),
// ]

import Slider from "react-slick";

const TaggedQuestions = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState(COMPANIES.slice(0, 20));
  const [currentSlide, setCurrentSlide] = useState(0);
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    nextArrow: null,
    prevArrow: null,
  };

  return (
    <Card>
      <CardTitleContainer>
        <CardTitle>Trending Companies</CardTitle>
        <ArrowContainers>
          <ArrowLeftBackgroundContainer
            onClick={() => sliderRef.current?.slickPrev()}
          >
            {currentSlide === 0 ? (
              <img alt="" src={ArrowLeftDisabledSvg} />
            ) : (
              <img alt="" src={ArrowLeftSvg} />
            )}
          </ArrowLeftBackgroundContainer>
          <ArrowRightBackgroundContainer
            onClick={() => sliderRef.current?.slickNext()}
          >
            {currentSlide === 0 ? (
              <img alt="" src={ArrowRightDisabledSvg} />
            ) : (
              <img alt="" src={ArrowRightSvg} />
            )}
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
              COMPANIES.filter((x) =>
                x.text.toLowerCase().includes(temp.toLowerCase())
              )
            );
          }}
          placeholder="Search for a company..."
        />
      </InputContainer>
      <TagsContainer>
        <Slider {...settings} ref={sliderRef}>
          <div>
            {data.slice(0, 20).map((item, _) => (
              <TagConst key={item.text}>
                {item.text} <TagSpan>{item.count}</TagSpan>
              </TagConst>
            ))}
          </div>
          <div>
            {data.slice(21, 40).map((item, _) => (
              <TagConst key={item.text}>
                {item.text} <TagSpan>{item.count}</TagSpan>
              </TagConst>
            ))}
          </div>
        </Slider>
      </TagsContainer>
    </Card>
  );
};

export default TaggedQuestions;
