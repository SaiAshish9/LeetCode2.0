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
    beforeChange: (_, next) => {
      setCurrentSlide(next);
      updateSliderHeight(next);
    },
    afterChange: (current) => {
      setCurrentSlide(current);
      updateSliderHeight(current);
    },
    nextArrow: null,
    prevArrow: null,
  };

  const updateSliderHeight = (index) => {
    if (
      sliderRef.current &&
      sliderRef.current.innerSlider &&
      sliderRef.current.innerSlider.list &&
      sliderRef.current.innerSlider.list.querySelectorAll(".slick-slide")
        .length > 0
    ) {
      const currentSlide =
        sliderRef.current.innerSlider?.list.querySelectorAll(".slick-slide")[
          value?.length > 0 ? index : 0
        ];
      const newHeight = currentSlide?.offsetHeight;
      setSliderHeight(newHeight);
    } else {
      setSliderHeight(0);
    }
  };

  // function renderItems() {
  //   const result = [];
  //   const n = data.length;
  //   for (let i = 0; i < n; i += 20) {
  //     let curr = [];
  //     if (i + 20 > n - 1) {
  //       curr.push(
  //         data.slice(i).map((item, _) => (
  //           <TagConst key={item.text}>
  //             <span>{item.text}</span> <TagSpan>{item.count}</TagSpan>
  //           </TagConst>
  //         ))
  //       );
  //     } else {
  //       curr.push(
  //         data.slice(i, i + 20).map((item, _) => (
  //           <TagConst key={item.text}>
  //             {item.text} <TagSpan>{item.count}</TagSpan>
  //           </TagConst>
  //         ))
  //       );
  //     }
  //     result.push(
  //       <SlickItem
  //         key={i + "#" + Math.floor(Math.random(n)) + "#" + data.length}
  //       >
  //         {curr}
  //       </SlickItem>
  //     );
  //   }
  //   return result;
  // }

  function handleChange(e) {
    const temp = e.target.value;
    if (temp && temp !== "") {
      const tempData = COMPANIES.slice().filter((x) =>
        x.text.toLowerCase().includes(temp.toLowerCase())
      );
      setData(tempData.slice());
      setValue(temp);
    } else {
      setData(COMPANIES.slice());
      setValue("");
    }
    updateSliderHeight(0);
  }

  return (
    <Card>
      <CardTitleContainer>
        <CardTitle>Trending Companies</CardTitle>
        <ArrowContainers>
          <ArrowLeftBackgroundContainer
            onClick={() => sliderRef.current?.slickPrev()}
          >
            {currentSlide === 0 || data.length <= 20 ? (
              <img alt="" src={ArrowLeftDisabledSvg} />
            ) : (
              <img alt="" src={ArrowLeftSvg} />
            )}
          </ArrowLeftBackgroundContainer>
          <ArrowRightBackgroundContainer
            onClick={() => sliderRef.current?.slickNext()}
          >
            {currentSlide === parseInt(data.length / 20) - 1 ||
            data.length <= 20 ? (
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
          onChange={handleChange}
          placeholder="Search for a company..."
        />
      </InputContainer>
      <TagsContainer height={sliderHeight + 16 + "px"}>
        <Slider {...settings} ref={sliderRef}>
          {data.length > 0 && data.reduce((result, _, index) => {
            if (index % 20 === 0) {
              const chunk = data.slice(index, index + 20).map((item) => (
                <TagConst key={item.text}>
                  <span>{item.text}</span> <TagSpan>{item.count}</TagSpan>
                </TagConst>
              ));
              result.push(
                <SlickItem
                  key={`${index}_${Math.floor(Math.random() * data.length)}`}
                >
                  {chunk}
                </SlickItem>
              );
            }
            return result;
          }, [])}
        </Slider>
      </TagsContainer>
    </Card>
  );
};

export default TaggedQuestions;
