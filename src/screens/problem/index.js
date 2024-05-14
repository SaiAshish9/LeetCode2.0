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
  ProblemText,
  RightContainer,
  RightIconContainer,
  RightParentContainer,
  TabHeader,
  TabItem,
  TabOptionsContainer,
  TabOptionsContent,
  TabOptionsInnerContent,
  TabOptionsText,
  TabText,
  TestCaseContainer,
} from "./styles";
import {
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
import { useLocation } from "react-router-dom";
import { QUESTIONS } from "./data";

const Problem = () => {
  // https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png

  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(-1);

  const [solution, setSolution] = useState(null);
  const [qInfo, setQInfo] = useState(null);

  const [itemSelected, setItemSelected] = useState(false);
  const rightIcons = [LinesSvg, BookmarkSvg, BracesSvg, ReloadSvg, ExpandSvg];

  const [dropdownItemSelected, setDropdownItemSelected] = useState(-1);
  const [step, setStep] = useState(0);

  const location = useLocation();
  const containerRef = useRef(null);

  const BASE_URl =
    "https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/";

  function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  async function fetchData() {
    const Q = location?.pathname?.split("/problems/")?.[1];
    const search = location?.search?.split("?tag=")?.[1]?.replaceAll("_", "-");

    fetch(BASE_URl + "q_info.json")
      .then((res) => res.json())
      .then((res) => {
        Q?.replaceAll("_", "-");
        setQInfo(res?.[Q]);
      })
      .catch((err) => console.log(err));

    if (qInfo?.["qno"]) {
      fetch(BASE_URl + "solutions.json")
        .then((res) => res.json())
        .then((res) => {
          const qno = qInfo["qno"];
          const tags = qInfo["tags"];
          const defaultTag = qInfo["default"];
          setSolution(
            res?.[qno]?.["java"]?.[
              search ?? defaultTag.toLowerCase().split(" ").join("-")
            ]
          );
          if (dropdownItemSelected === -1) {
            setDropdownItemSelected(
              tags.indexOf(
                search ? toTitleCase(search.split("-").join(" ")) : defaultTag
              )
            );
          }
        })
        .catch((err) => console.log(err));
    }
  }

  function handleDropdownCLickOutside() {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setItemSelected(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }

  useEffect(() => {
    fetchData();
    handleDropdownCLickOutside();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, solution]);

  return (
    <Container>
      <Header>
        <LeftIconContainer>
          <LogoImg
            style={{ paddingRight: "0.5rem" }}
            alt="img"
            src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
          />
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
            <StyledImage style={{ height: "16px" }} alt="img" src={ArrowLeft} />
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
      <Content>
        <LeftContainer selected={selected === 1} onClick={() => setSelected(1)}>
          <TabHeader>
            <TabItem onClick={() => setStep(0)}>
              <NavIcon
                style={{ marginRight: 0, opacity: step === 1 ? 0.45 : 1 }}
              >
                <StyledImage
                  style={{ height: "14px", top: -1 }}
                  alt="img"
                  src={DescriptionSvg}
                />
              </NavIcon>
              <TabText inActive={step === 1}>Description</TabText>
            </TabItem>
            <LeftLI style={{ marginRight: 8 }} />
            <TabItem onClick={() => setStep(1)}>
              <NavIcon
                style={{ marginRight: 0, opacity: step === 0 ? 0.45 : 1 }}
              >
                <StyledImage
                  style={{ height: "14px", top: -1 }}
                  alt="img"
                  src={SolutioningSvg}
                />
              </NavIcon>
              <TabText inActive={step === 0}>Solutioning</TabText>
            </TabItem>
          </TabHeader>
          <LeftContent>
            <LeftContentTitle>
              {QUESTIONS && qInfo && `${qInfo["qno"]}. ${qInfo["title"]}`}
            </LeftContentTitle>
            <LeftTag>Hard</LeftTag>
            {step === 0 && (
              <LeftContentDescription>
                {QUESTIONS && qInfo && QUESTIONS[qInfo["qno"]]}
              </LeftContentDescription>
            )}
            {step === 1 && (
              <LeftContentDescription desc>
                <h2>Step-by-Step Explanation:</h2>
                <ol>
                  <li>
                    <strong>Class Initialization:</strong>
                    <p>
                      a. Define the class <code>Solution</code> with necessary
                      member variables:
                    </p>
                    <ul>
                      <li>
                        <code>graph</code>: Adjacency list representation of the
                        graph.
                      </li>
                      <li>
                        <code>low</code>: Array to keep track of the lowest
                        discovery time reachable from each vertex.
                      </li>
                      <li>
                        <code>disc</code>: Array to store the discovery times of
                        each vertex.
                      </li>
                      <li>
                        The <code>discovery time of a vertex</code> is the
                        timestamp when the DFS algorithm first visits the
                        vertex. This timestamp is unique for each vertex and
                        helps in tracking the order in which vertices are
                        explored.
                      </li>
                      <li>
                        <code>time</code>: An integer to keep track of the
                        discovery time during DFS traversal.
                      </li>
                      <li>
                        <code>result</code>: List to store the critical
                        connections.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>
                      Significance in <code>Tarjan's</code> Algorithm
                    </strong>
                  </li>
                  <p>
                    a. In <code>Tarjan's</code> Algorithm, which is used to find
                    strongly connected components (SCCs) or bridges (critical
                    connections) in a graph, discovery time plays a crucial
                    role:
                  </p>
                  <ul>
                    <li>
                      <strong>Low Link Value:</strong>
                      <p>
                        The discovery time is used along with another concept
                        called the "low link value," which helps in determining
                        the SCCs or bridges. The low link value of a vertex is
                        the smallest discovery time reachable from that vertex,
                        including itself and its descendants in the DFS tree.
                      </p>
                    </li>
                    <li>
                      <strong>Bridge Detection:</strong>
                      <p>
                        In the context of finding critical connections
                        (bridges), if the low link value of a vertex v is
                        greater than the discovery time of its parent vertex u
                        (in the DFS tree), then the edge (u, v) is a bridge.
                        This is because there is no alternative way to reach
                        vertex v or its descendants from vertex u or any of its
                        ancestors, other than through the edge (u, v).
                      </p>
                    </li>
                  </ul>
                  <li>
                    <strong>
                      Method <code>criticalConnections</code>:
                    </strong>
                    <p>
                      a. Initialize <code>graph</code>, <code>low</code>,{" "}
                      <code>disc</code>, <code>result</code>, and{" "}
                      <code>time</code>.
                    </p>
                    <p>
                      b. Create an empty adjacency list for each vertex in the
                      graph.
                    </p>
                    <p>
                      c. Build the graph using the given{" "}
                      <code>connections</code>.
                    </p>
                  </li>
                  <li>
                    <strong>Build the Graph:</strong>
                    <p>
                      a. Iterate over each connection in{" "}
                      <code>connections</code>.
                    </p>
                    <p>
                      b. Add each connection to the adjacency list of both
                      vertices involved (since the graph is undirected).
                    </p>
                  </li>
                  <li>
                    <strong>Start DFS Traversal:</strong>
                    <p>
                      a. Call the <code>dfs</code> method starting from vertex 0
                      with parent as -1 (indicating no parent).
                    </p>
                  </li>
                  <li>
                    <strong>
                      Depth-First Search (DFS) Method <code>dfs</code>:
                    </strong>
                    <p>
                      a. Set the discovery time and low value of vertex{" "}
                      <code>u</code> to the current time.
                    </p>
                    <p>
                      b. Increment the <code>time</code>.
                    </p>
                    <p>
                      c. Traverse all the adjacent vertices (<code>v</code>) of
                      vertex <code>u</code>.
                    </p>
                    <ul>
                      <li>Skip the parent vertex to avoid backtracking.</li>
                      <li>
                        If vertex <code>v</code> is not visited:
                        <ul>
                          <li>
                            Recursively call <code>dfs</code> for vertex{" "}
                            <code>v</code> with <code>u</code> as its parent.
                          </li>
                          <li>
                            After returning from the DFS call, update the low
                            value of <code>u</code> based on the low value of{" "}
                            <code>v</code>.
                          </li>
                          <li>
                            If the condition <code>low[v] > disc[u]</code> is
                            met, it means that removing the edge (
                            <code>u, v</code>) will increase the number of
                            connected components, hence it is a critical
                            connection.
                          </li>
                        </ul>
                      </li>
                      <li>
                        If vertex <code>v</code> is already visited, update the
                        low value of <code>u</code> considering the discovery
                        time of <code>v</code>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Return the Result:</strong>
                    <p>
                      a. After completing the DFS traversal, return the{" "}
                      <code>result</code> list containing all critical
                      connections.
                    </p>
                  </li>
                </ol>
              </LeftContentDescription>
            )}
          </LeftContent>
        </LeftContainer>
        <RightParentContainer>
          <RightContainer
            selected={selected === 2}
            onClick={() => setSelected(2)}
          >
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
                  onClick={() =>
                    setItemSelected((itemSelected) => !itemSelected)
                  }
                >
                  <TabOptionsText style={{ marginRight: "0.25rem" }}>
                    {qInfo &&
                      dropdownItemSelected !== -1 &&
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
              <TabOptionsContent>
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

              {itemSelected && (
                <DropdownContainer ref={containerRef}>
                  <DropdownContainerContent>
                    {qInfo &&
                      qInfo.tags.map((item, k) => (
                        <DropdownContainerItem
                          onMouseEnter={() => setHovered(k)}
                          onMouseLeave={() => setHovered(-1)}
                          key={k}
                          hovered={k === hovered}
                          onClick={() => {
                            setDropdownItemSelected(k);
                            setItemSelected((itemSelected) => !itemSelected);
                          }}
                        >
                          <DropdownContainerLeftItem>
                            {dropdownItemSelected === k && (
                              <NavIcon noMR style={{ marginRight: "0.5rem" }}>
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
            </TabOptionsContainer>
            {solution && (
              <Editor
                width="100%"
                height="85vh"
                theme="vs-dark"
                defaultLanguage="java"
                userSelect={false}
                defaultValue={solution ?? ""}
              />
            )}
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
    </Container>
  );
};

export default Problem;
