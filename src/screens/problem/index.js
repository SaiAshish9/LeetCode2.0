/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Content,
  DropdownContainer,
  DropdownContainerContent,
  DropdownContainerItem,
  DropdownContainerLeftItem,
  DropdownContainerText,
  Header,
  LeftContainer,
  LeftContent,
  LeftContentDescription,
  LeftContentTitle,
  LeftIconContainer,
  LeftLI,
  LeftTag,
  LogoImg,
  LogoTopHeader,
  MiddleLeftHeaderContainer,
  ProblemText,
  RightContainer,
  RightIconContainer,
  RightParentContainer,
  SEditor,
  TabHeader,
  TabHeaderMContent,
  TabHeaderParentContainer,
  TabHeaderSContent,
  TabItem,
  TabOptionsContainer,
  TabOptionsContent,
  TabOptionsInnerContent,
  TabOptionsText,
  TabText,
  TestCaseContainer,
  TickOutlined,
} from "./styles";
import {
  BarsIcon,
  CircularAvatar,
  NavIcon,
  PremiumButton,
  PremiumText,
  ScoreText,
  StyledImage,
} from "../../layout/header/styles";
import { Editor } from "@monaco-editor/react";

import BellSvg from "../../assets/bell.svg";
import FireSvg from "../../assets/fire.svg";
import SettingsIconSvg from "../../assets/settings_icon.svg";
import BarsSvg from "../../assets/bars.svg";
import BarsLeftSvg from "../../assets/bars_left.svg";
import ArrowLeft from "../../assets/arrow_left.svg";
import ArrowRight from "../../assets/arrow_right1.svg";
import ShuffleImg from "../../assets/shuffle.svg";
import CodeSvg from "../../assets/code.svg";
import DescriptionSvg from "../../assets/description.svg";
import SolutioningSvg from "../../assets/solutioning.svg";
import TestCaseSvg from "../../assets/testcase.svg";
import ExpandSvg from "../../assets/expand.svg";
import ReloadSvg from "../../assets/reload.svg";
import BracesSvg from "../../assets/braces.svg";
import BookmarkSvg from "../../assets/bookmark.svg";
import LinesSvg from "../../assets/lines.svg";
import Bell1Svg from "../../assets/lock1.svg";
import ArrowDownSvg from "../../assets/arrowDown.svg";
import TickSvg1 from "../../assets/tick1.svg";
import InfoSvg from "../../assets/info.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { QUESTIONS, SOLUTIONING } from "./data";
import { MdContentCopy } from "react-icons/md";
import axios from "axios";

const Problem = () => {
  // https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png

  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(-1);

  const [solution, setSolution] = useState(null);
  const [qInfo, setQInfo] = useState(null);

  const [copied, setCopied] = useState(false);

  const [itemSelected, setItemSelected] = useState(false);
  const [itemSelected1, setItemSelected1] = useState(false);
  const rightIcons = [LinesSvg, BookmarkSvg, BracesSvg, ReloadSvg, ExpandSvg];

  const [dropdownItemSelected, setDropdownItemSelected] = useState(-1);
  const [step, setStep] = useState(0);

  const location = useLocation();
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);

  const containerRef1 = useRef(null);
  const dropdownRef1 = useRef(null);

  const BASE_URL =
    "https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/";

  const fetchData = async () => {
    try {
      const qInfoData = (await axios(BASE_URL + "q_info.json")).data;
      const solutionsData = (await axios(BASE_URL + "solutions.json")).data;
      const Q = decodeURIComponent(
        location?.pathname?.split("/problems/")?.[1]
      );
      const search = decodeURIComponent(location?.search?.split("?tag=")?.[1]);
      const QFormatted = Q?.replaceAll("_", "_");
      const qInfo = qInfoData?.[QFormatted];
      setQInfo(qInfo);

      if (qInfo?.["qno"]) {
        const qno = qInfo["qno"];
        const tags = qInfo["tags"];
        const defaultTag = decodeURIComponent(qInfo["default"]);

        const solutionKey = search ?? defaultTag;

        if (
          search &&
          solutionsData?.[qno]?.["java"] &&
          solutionKey.toLowerCase().split(" ").join("-") in
            solutionsData?.[qno]?.["java"]
        ) {
          setSolution(
            solutionsData?.[qno]?.["java"]?.[
              solutionKey.toLowerCase().split(" ").join("-")
            ]
          );
        } else {
          setSolution(
            solutionsData?.[qno]?.["java"]?.[
              defaultTag.toLowerCase().split(" ").join("-")
            ]
          );
        }

        if (dropdownItemSelected === -1) {
          setDropdownItemSelected(tags.indexOf(solutionKey));
        }
      }
      handleDropdownCLickOutside();
      handleDropdownCLickOutside1();
    } catch (err) {
      console.log(err);
    }
  };

  function handleDropdownCLickOutside() {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setItemSelected(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }

  function handleDropdownCLickOutside1() {
    const handleClickOutside = (event) => {
      if (
        containerRef1.current &&
        !containerRef1.current.contains(event.target) &&
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target)
      ) {
        setItemSelected1(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }

  let toggleTimeout;
  const debounceToggle = (func, delay) => {
    return (...args) => {
      if (toggleTimeout) clearTimeout(toggleTimeout);
      toggleTimeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleToggle1 = debounceToggle(() => {
    setItemSelected1((itemSelected1) => !itemSelected1);
  }, 100);

  const handleToggle = debounceToggle(() => {
    setItemSelected((itemSelected) => !itemSelected);
  }, 100);

  useEffect(() => {
    fetchData();
  }, [location]);

  const navigate = useNavigate();

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Container>
      <Header>
        <LeftIconContainer>
          <LogoImg
            style={{ paddingRight: "0.5rem" }}
            alt="img"
            src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
          />
          <MiddleLeftHeaderContainer>
            <LeftLI />
            <NavIcon
              style={{
                marginRight: "0.7rem",
                position: "relative",
                bottom: "1px",
              }}
            >
              <StyledImage
                style={{ height: "16px" }}
                alt="img"
                src={BarsLeftSvg}
              />
            </NavIcon>
            <ProblemText>Problem List</ProblemText>
            <NavIcon>
              <StyledImage
                style={{ height: "16px" }}
                alt="img"
                src={ArrowLeft}
              />
            </NavIcon>
            <NavIcon>
              <StyledImage
                style={{ height: "16px" }}
                alt="img"
                src={ArrowRight}
              />
            </NavIcon>
            <NavIcon>
              <StyledImage
                style={{ height: "16px" }}
                alt="img"
                src={ShuffleImg}
              />
            </NavIcon>
          </MiddleLeftHeaderContainer>
        </LeftIconContainer>
        <RightIconContainer>
          <NavIcon>
            <StyledImage style={{ height: "16px" }} alt="img" src={BarsSvg} />
          </NavIcon>
          <NavIcon>
            <StyledImage
              style={{ height: "16px" }}
              alt="img"
              src={SettingsIconSvg}
            />
          </NavIcon>
          <NavIcon>
            <StyledImage style={{ height: "20px" }} alt="img" src={BellSvg} />
          </NavIcon>
          <NavIcon>
            <StyledImage style={{ height: "20px" }} alt="img" src={FireSvg} />
            <ScoreText>0</ScoreText>
          </NavIcon>
          <CircularAvatar
            alt="pic"
            src="https://media.licdn.com/dms/image/D5603AQEhLMd3-TOQQQ/profile-displayphoto-shrink_400_400/0/1681547463721?e=1720656000&v=beta&t=STL35y3eyP6AIE96k00KBK4Pokjgf4pK9Jl9U4Xqquw"
          />
          <NavIcon noMR>
            <PremiumButton>
              <PremiumText>Premium</PremiumText>
            </PremiumButton>
          </NavIcon>
        </RightIconContainer>
      </Header>
      {qInfo && (
        <>
          {" "}
          <Content>
            <LeftContainer
              selected={selected === 1}
              onClick={() => setSelected(1)}
            >
              <TabHeaderParentContainer>
                <LogoTopHeader>
                  <BarsIcon color="#fff9" size={20.5} />
                  <LogoImg
                    style={{ height: "19px" }}
                    alt="img"
                    src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
                  />
                  <NavIcon style={{ marginRight: 0 }}>
                    <StyledImage
                      style={{ height: "19px", top: 0 }}
                      alt="img"
                      src={BellSvg}
                    />
                  </NavIcon>
                </LogoTopHeader>
                <TabHeader>
                  <TabHeaderMContent>
                    <TabItem onClick={() => setStep(0)}>
                      <NavIcon
                        style={{
                          marginRight: 0,
                          opacity: step === 1 ? 0.45 : 1,
                        }}
                      >
                        <StyledImage
                          style={{ height: "14px", top: -1 }}
                          alt="img"
                          src={DescriptionSvg}
                        />
                      </NavIcon>
                      <TabText inActive={step !== 0}>Description</TabText>
                    </TabItem>
                    <LeftLI style={{ marginRight: 8 }} />
                    <TabItem onClick={() => setStep(1)}>
                      <NavIcon
                        style={{
                          marginRight: 0,
                          opacity: step === 0 ? 0.45 : 1,
                        }}
                      >
                        <StyledImage
                          style={{ height: "14px", top: -1 }}
                          alt="img"
                          src={SolutioningSvg}
                        />
                      </NavIcon>
                      <TabText inActive={step !== 1}>Solutioning</TabText>
                    </TabItem>
                  </TabHeaderMContent>
                  <TabHeaderSContent>
                    <TabItem inActive={step !== 0} onClick={() => setStep(0)}>
                      <TabText inActive={step !== 0}>Description</TabText>
                    </TabItem>
                    <TabItem inActive={step !== 1} onClick={() => setStep(1)}>
                      <TabText inActive={step !== 1}>Solutioning</TabText>
                    </TabItem>
                    <TabItem inActive={step !== 2} onClick={() => setStep(2)}>
                      <TabText inActive={step !== 2}>Code</TabText>
                    </TabItem>
                  </TabHeaderSContent>
                </TabHeader>
              </TabHeaderParentContainer>

              <LeftContent>
                <LeftContentTitle>
                  {QUESTIONS && `${qInfo["qno"]}. ${qInfo["title"]}`}
                </LeftContentTitle>
                <LeftTag diff={qInfo?.["difficulty"]}>
                  {QUESTIONS && `${qInfo["difficulty"]}`}
                </LeftTag>
                {step === 0 && (
                  <LeftContentDescription>
                    {QUESTIONS[qInfo["qno"]]}
                  </LeftContentDescription>
                )}
                {step === 1 && SOLUTIONING[qInfo["qno"]]}
                {step === 2 && (
                  <SEditor>
                    <TabOptionsContainer>
                      <TabOptionsContent>
                        <TabOptionsInnerContent
                          ref={dropdownRef1}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleToggle1();
                          }}
                        >
                          <TabOptionsText style={{ marginRight: "0.25rem" }}>
                            {dropdownItemSelected !== -1 &&
                              qInfo.tags[dropdownItemSelected]}
                          </TabOptionsText>
                          <NavIcon style={{ marginRight: "0rem" }}>
                            <StyledImage
                              style={{ height: "12px", top: -1 }}
                              alt="img"
                              src={ArrowDownSvg}
                            />
                          </NavIcon>
                        </TabOptionsInnerContent>
                      </TabOptionsContent>

                      {itemSelected1 && dropdownItemSelected > -1 && (
                        <DropdownContainer ref={containerRef1}>
                          <DropdownContainerContent>
                            {qInfo.tags.map((item, k) => (
                              <DropdownContainerItem
                                onMouseEnter={() => setHovered(k)}
                                onMouseLeave={() => setHovered(-1)}
                                key={k}
                                hovered={k === hovered}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setDropdownItemSelected(k);
                                  const path =
                                    location?.pathname?.split(
                                      "/problems/"
                                    )?.[1];
                                  navigate(`/problems/${path}?tag=` + item);
                                  setItemSelected1(
                                    (itemSelected1) => !itemSelected1
                                  );
                                }}
                              >
                                <DropdownContainerLeftItem>
                                  {item && dropdownItemSelected === k && (
                                    <NavIcon
                                      noMR
                                      style={{ marginRight: "0.5rem" }}
                                    >
                                      <StyledImage
                                        style={{ height: 14, top: 0 }}
                                        alt="img"
                                        src={TickSvg1}
                                      />
                                    </NavIcon>
                                  )}
                                  <DropdownContainerText
                                    noML={dropdownItemSelected !== k}
                                  >
                                    {item}
                                  </DropdownContainerText>
                                </DropdownContainerLeftItem>

                                {k === hovered && (
                                  <NavIcon noMR style={{ marginRight: "0rem" }}>
                                    <StyledImage
                                      style={{ height: 14, top: -1 }}
                                      alt="img"
                                      src={InfoSvg}
                                    />
                                  </NavIcon>
                                )}
                              </DropdownContainerItem>
                            ))}
                          </DropdownContainerContent>
                        </DropdownContainer>
                      )}
                      {copied ? (
                        <TickOutlined
                          onClick={() => {
                            setCopied(false);
                          }}
                        />
                      ) : (
                        <MdContentCopy
                          size={14}
                          color="#fff9"
                          style={{ cursor: "pointer", marginRight: "6px" }}
                          onClick={async () => {
                            await copyToClipboard(solution ?? "");
                            setCopied((copied) => !copied);
                            setTimeout(() => {
                              setCopied((copied) => !copied);
                            }, 1200);
                          }}
                        />
                      )}
                    </TabOptionsContainer>

                    <Editor
                      width="100%"
                      height="54vh"
                      theme="vs-dark"
                      defaultLanguage="java"
                      defaultValue={solution ?? ""}
                      value={solution ?? ""}
                      options={{ readOnly: true, domReadOnly: true }}
                    />
                  </SEditor>
                )}
              </LeftContent>
            </LeftContainer>
            <RightParentContainer>
              {" "}
              <RightContainer
                selected={selected === 2}
                onClick={() => setSelected(2)}
              >
                {
                  <>
                    <TabHeader>
                      <TabItem>
                        <NavIcon style={{ marginRight: 0 }}>
                          <StyledImage
                            style={{ height: "14px", top: 0 }}
                            alt="img"
                            src={CodeSvg}
                          />
                        </NavIcon>
                        <TabText>Code</TabText>
                      </TabItem>
                    </TabHeader>
                    <TabOptionsContainer>
                      <TabOptionsContent>
                        <TabOptionsInnerContent
                          ref={dropdownRef}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleToggle();
                          }}
                        >
                          <TabOptionsText style={{ marginRight: "0.25rem" }}>
                            {dropdownItemSelected !== -1 &&
                              qInfo.tags[dropdownItemSelected]}
                          </TabOptionsText>
                          <NavIcon style={{ marginRight: "0rem" }}>
                            <StyledImage
                              style={{ height: "12px", top: -1 }}
                              alt="img"
                              src={ArrowDownSvg}
                            />
                          </NavIcon>
                        </TabOptionsInnerContent>
                        <TabOptionsInnerContent>
                          <NavIcon noMR style={{ marginRight: "0.25rem" }}>
                            <StyledImage
                              style={{ height: 12, top: -1 }}
                              alt="img"
                              src={Bell1Svg}
                            />
                          </NavIcon>
                          <TabOptionsText>Auto</TabOptionsText>
                        </TabOptionsInnerContent>
                      </TabOptionsContent>
                      <TabOptionsContent icons>
                        {rightIcons.map((i, k) => (
                          <NavIcon noMR={k === 4}>
                            <StyledImage
                              key={k}
                              style={{ height: "14px" }}
                              alt="img"
                              src={i}
                            />
                          </NavIcon>
                        ))}
                      </TabOptionsContent>

                      {itemSelected && dropdownItemSelected > -1 && (
                        <DropdownContainer ref={containerRef}>
                          <DropdownContainerContent>
                            {qInfo.tags.map((item, k) => (
                              <DropdownContainerItem
                                onMouseEnter={() => setHovered(k)}
                                onMouseLeave={() => setHovered(-1)}
                                key={k}
                                hovered={k === hovered}
                                onClick={() => {
                                  setDropdownItemSelected(k);
                                  const path =
                                    location?.pathname?.split(
                                      "/problems/"
                                    )?.[1];
                                  navigate(`/problems/${path}?tag=` + item);
                                  setItemSelected(
                                    (itemSelected) => !itemSelected
                                  );
                                }}
                              >
                                <DropdownContainerLeftItem>
                                  {
                                    <NavIcon
                                      noMR
                                      style={{
                                        marginRight: "0.5rem",
                                        width: "1.41rem",
                                      }}
                                    >
                                      {dropdownItemSelected === k && (
                                        <StyledImage
                                          style={{ height: 14, top: 0 }}
                                          alt="img"
                                          src={TickSvg1}
                                        />
                                      )}
                                    </NavIcon>
                                  }
                                  <DropdownContainerText>
                                    {item}
                                  </DropdownContainerText>
                                </DropdownContainerLeftItem>

                                {k === hovered && (
                                  <NavIcon noMR style={{ marginRight: "0rem" }}>
                                    <StyledImage
                                      style={{ height: 14, top: -1 }}
                                      alt="img"
                                      src={InfoSvg}
                                    />
                                  </NavIcon>
                                )}
                              </DropdownContainerItem>
                            ))}
                          </DropdownContainerContent>
                        </DropdownContainer>
                      )}
                    </TabOptionsContainer>
                    <Editor
                      width="100%"
                      height="85vh"
                      theme="vs-dark"
                      defaultLanguage="java"
                      userSelect={false}
                      defaultValue={solution ?? ""}
                      value={solution ?? ""}
                    />
                  </>
                }
              </RightContainer>
              <TestCaseContainer
                selected={selected === 3}
                onClick={() => setSelected(3)}
              >
                <NavIcon style={{ marginRight: 0 }}>
                  <StyledImage
                    style={{ height: "14px", top: 0 }}
                    alt="img"
                    src={TestCaseSvg}
                  />
                </NavIcon>
                <TabText>Testcase</TabText>
              </TestCaseContainer>
            </RightParentContainer>
          </Content>
        </>
      )}
    </Container>
  );
};

export default Problem;
