/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import {
  ArrowContainers,
  ArrowLeftBackgroundContainer,
  ArrowRightBackgroundContainer,
  Card,
  CardTitle,
  CardTitleContainer,
  DefaultText,
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
import { nanoid } from "nanoid";

// [
//   ...Array(10)
//     .keys()
//     .map((x) => x + 1),
// ]

import { Carousel } from "antd";

const TaggedQuestions = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState(COMPANIES);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  const executeScroll = () => containerRef.current.scrollIntoView();

  function handleResize() {
    if (data.length === 0 && (value === "" || value === null)) {
      setData(COMPANIES);
    }
    setTimeout(() => {
      updateSliderHeight();
    }, 10);
  }

  useEffect(() => {
    updateSliderHeight();
    if (window.location.hash === "#companies") {
      setTimeout(() => {
        executeScroll();
      }, 10);
    }
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateSliderHeight = () => {
    setTimeout(() => {
      if (
        carouselRef.current &&
        carouselRef.current.innerSlider?.list?.querySelectorAll(
          ".slick-slide.slick-current"
        ).length > 0
      ) {
        const currSlide =
          carouselRef.current.innerSlider?.list.querySelectorAll(
            ".slick-slide.slick-current"
          )[0];
        const newHeight = currSlide?.offsetHeight;
        setSliderHeight(newHeight);
      } else {
        setSliderHeight(0);
      }
    }, 10);
  };

  useEffect(() => {
    updateSliderHeight(currentSlide);
  }, [data, currentSlide]);
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
    const temp = e.target.value ?? "";
    console.log(e.target.value);
    if (temp !== "") {
      const tempData = COMPANIES.slice().filter((x) =>
        x.text.toLowerCase().includes(temp.toLowerCase())
      );
      setData(tempData.slice());
    } else {
      setData(COMPANIES.slice());
      carouselRef.current?.goTo(0, true);
      setSliderHeight(0);
    }
    updateSliderHeight();
    setValue(temp);
  }

  return (
    <Card ref={containerRef} id="companies">
      <CardTitleContainer>
        <CardTitle>Trending Companies</CardTitle>
        <ArrowContainers>
          <ArrowLeftBackgroundContainer
            onClick={() => carouselRef?.current.prev()}
          >
            {currentSlide === 0 || data.length <= 20 ? (
              <img alt="" src={ArrowLeftDisabledSvg} />
            ) : (
              <img alt="" src={ArrowLeftSvg} />
            )}
          </ArrowLeftBackgroundContainer>
          <ArrowRightBackgroundContainer
            onClick={() => carouselRef.current?.next()}
          >
            {currentSlide >= parseInt(data.length / 20) - 1 ||
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
      <TagsContainer
        height={value > 0 ? "fit-content" : parseInt(sliderHeight) + 8 + "px"}
      >
        <Carousel
          infinite={false}
          ref={carouselRef}
          dots={false}
          beforeChange={(_, next) => {
            setCurrentSlide(next);
            updateSliderHeight();
          }}
          afterChange={(current) => {
            setCurrentSlide(current);
            updateSliderHeight();
          }}
        >
          {data.length > 0 &&
            data.reduce((result, _, index) => {
              if (index % 20 === 0) {
                const chunk = data.slice(index, index + 20).map((item) => (
                  <TagConst key={item.text + index + nanoid()}>
                    <span>{item.text}</span> <TagSpan>{item.count}</TagSpan>
                  </TagConst>
                ));
                result.push(
                  <SlickItem
                    key={`${index}_${Math.floor(
                      Math.random() * data.length
                    )}_${nanoid()}}`}
                  >
                    {chunk}
                  </SlickItem>
                );
              }
              return result;
            }, [])}
        </Carousel>
      </TagsContainer>
      {data?.length === 0 && (
        <DefaultText>There aren't any tags here yet!</DefaultText>
      )}
    </Card>
  );
};

export default TaggedQuestions;
