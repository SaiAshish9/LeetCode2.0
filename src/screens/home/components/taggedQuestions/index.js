import React, { useState, useRef, useEffect } from "react";
import {
  ArrowContainers,
  ArrowLeftBackgroundContainer,
  ArrowRightBackgroundContainer,
  Card,
  CardTitle,
  CardTitleContainer,
  InputContainer,
  SlickItem,
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
  const [data, setData] = useState(COMPANIES);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(0);

  let sliderRef = useRef(null);

  useEffect(() => {
    updateSliderHeight(0);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      if (current === 0 || current === parseInt(data.length / 20) - 1) {
        setCurrentSlide(next);
        return;
      }
      updateSliderHeight(next);
    },
    afterChange: (current) => {
      if (current === 0 || current === parseInt(data.length / 20) - 1) {
        setCurrentSlide(current);
        return;
      }
      updateSliderHeight(current);
    },
    nextArrow: null,
    prevArrow: null,
  };

  const updateSliderHeight = (index) => {
    if (sliderRef.current) {
      const currentSlide =
        sliderRef.current?.innerSlider?.list.querySelectorAll(".slick-slide")[
          index
        ];
      const newHeight = currentSlide?.offsetHeight;
      setSliderHeight(newHeight);
    }
  };

  function renderItems() {
    const result = [];
    const n = data.length;
    for (let i = 0; i < n; i += 20) {
      let curr = [];
      if (i + 20 > n - 1) {
        curr.push(
          data.slice(i).map((item, _) => (
            <TagConst key={item.text}>
              <span>{item.text}</span> <TagSpan>{item.count}</TagSpan>
            </TagConst>
          ))
        );
      } else {
        curr.push(
          data.slice(i, i + 20).map((item, _) => (
            <TagConst key={item.text}>
              {item.text} <TagSpan>{item.count}</TagSpan>
            </TagConst>
          ))
        );
      }
      result.push(<SlickItem>{curr}</SlickItem>);
    }
    return result;
  }

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
            {currentSlide === parseInt(data.length / 20) - 1 ||
            currentSlide === 0 ? (
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
      <TagsContainer height={sliderHeight + 16 + "px"}>
        <Slider {...settings} ref={sliderRef}>
          {renderItems()}
        </Slider>
      </TagsContainer>
    </Card>
  );
};

export default TaggedQuestions;
