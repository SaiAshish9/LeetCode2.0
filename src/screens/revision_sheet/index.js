/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Container,
  Content,
  ContentItem,
  ContentText,
  IconCont,
  ParentContent,
  Spacer,
} from "./styles";
import {
  ContentTextBold,
  Switch,
  Tab,
  TabContainer,
  TitleContainer,
  TabText,
} from "../qsList/styles";
import axios from "axios";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BackendSD } from "./components";
import { useLocation, useNavigate } from "react-router-dom";
import SD_SOLUTIONING from "./data/solutioning";

const RevisionSheet = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [up, setUp] = useState([]);
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isDescriptionSet, setIsDescriptionSet] = useState(false);

  const [hashParam, setHashParam] = useState("");

  useEffect(() => {
    if (pathname && pathname.split("/revision_sheet/")?.[1]) {
      setIsDescriptionSet(true);
    } else {
      setIsDescriptionSet(false);
    }
  }, [pathname]);

  useEffect(() => {
    const extractHashParam = () => {
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        setHashParam(hash.substring(1));
      } else {
        setHashParam("");
      }
    };

    extractHashParam();

    window.addEventListener("hashchange", extractHashParam);
    return () => {
      window.removeEventListener("hashchange", extractHashParam);
    };
  }, []);

  useEffect(() => {
    if (hashParam === "dsa" || hashParam === "") {
      setSelected(0);
    } else if (hashParam === "cp") {
      setSelected(1);
    } else if (hashParam === "frontend_system_design") {
      setSelected(2);
    } else if (hashParam === "backend_system_design") {
      setSelected(3);
    }
  }, [hashParam]);

  const BASE_URL =
    "https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/";

  async function fetchData() {
    try {
      const tempData = (await axios.get(BASE_URL + "revision.json", {})).data;
      const res = (await axios.get(BASE_URL + "q_info.json", {})).data;

      if (res && tempData) {
        const temp = Object.assign({}, tempData);
        let tempSet = new Set();
        Object.values(tempData).forEach((x) => x.forEach(tempSet.add, tempSet));
        setCount(tempSet.size);
        const tempValues = Object.values(res);
        for (let key of Object.keys(tempData)) {
          const values = tempValues.filter((x) =>
            tempData[key].includes(+x.qno)
          );
          temp[key] = [];
          for (let value of values) {
            if (
              value &&
              value.tags &&
              value.tags.length > 0 &&
              value.tags.includes(
                key === "Probability and Statistics"
                  ? "Probability And Statistics"
                  : key === "Divide and Conquer"
                  ? "Divide And Conquer"
                  : key
              )
            ) {
              temp[key].push(value);
            }
          }
        }
        for (let key of Object.keys(temp)) {
          temp[key] = temp[key].sort((a, b) => a.qno - b.qno);
        }
        setData({ ...temp, Additional: [] });
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        if (data) {
          const dataLength = Object.keys(data).filter(
            (x) => data[x].length > 0
          ).length;
          if (up.length !== dataLength) {
            setUp(Array.from({ length: dataLength }, (_, index) => index));
          } else {
            setUp([]);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [data, up]);

  console.log(
    hashParam,
    decodeURIComponent(pathname.split("/revision_sheet/")[1]),
    SD_SOLUTIONING[hashParam][
      decodeURIComponent(pathname.split("/revision_sheet/")?.[1])
    ]
  );

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LeetCode2.0: Revision Sheet</title>
        <meta property="og:title" content={`LeetCode2.0: Revision Sheet`} />
        <meta property="og:description" content="Revision Sheets" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/LeetCode2.0.png"
        />
        <meta
          property="og:url"
          content="https://leetcodev2.vercel.app/tag/line_sweep/"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Switch>
        <TabContainer>
          <Tab
            onClick={() => {
              setSelected(0);
              navigate("/revision_sheet#dsa");
            }}
            active={selected === 0}
          >
            <TabText>DSA</TabText>
          </Tab>
          <Tab
            onClick={() => {
              setSelected(1);
              navigate("/revision_sheet#cp");
            }}
            active={selected === 1}
          >
            <TabText>CP</TabText>
          </Tab>
          <Tab
            onClick={() => {
              setSelected(2);
              navigate("/revision_sheet#frontend_system_design");
            }}
            active={selected === 2}
          >
            <TabText>Frontend System Design</TabText>
          </Tab>
          <Tab
            onClick={() => {
              setSelected(3);
              navigate("/revision_sheet#backend_system_design");
            }}
            active={selected === 3}
          >
            <TabText>Backend System Design</TabText>
          </Tab>
        </TabContainer>
      </Switch>
      <Content>
        {data && selected === 0 && (
          <>
            {" "}
            <ContentText>
              Existing Total Count: <ContentTextBold>{count} </ContentTextBold>
              problems.
            </ContentText>
            <ContentText sm>
              *Note: Click on the tag name highlighted in a different color to
              view descriptions and time and space complexities of various
              operations. Use the arrow keys to collapse or expand selected
              questions. Use Cmd (⌘) + K to toggle the view of all tag
              questions.
            </ContentText>
          </>
        )}{" "}
        <Spacer />
        {data &&
          selected === 0 &&
          Object.keys(data)
            .filter((x) => (x !== "Additional" ? data[x].length > 0 : true))
            .map((item, key) => (
              <ContentItem key={item}>
                <ContentText>
                  {+key + 1}.&nbsp;
                  <p
                    onClick={() => {
                      if (item !== "Additional") {
                        window.open(
                          "/tag/" +
                            item.toLowerCase().replace(" ", "_") +
                            "#description",
                          "_blank"
                        );
                      }
                    }}
                  >
                    {item}
                  </p>
                  &nbsp;({data[item].length})
                  <IconCont
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (!up.includes(key)) {
                        setUp([...up, +key]);
                      } else {
                        let temp = up.slice();
                        temp = temp.filter((x) => x !== +key);
                        setUp(temp);
                      }
                    }}
                  >
                    {up.includes(key) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </IconCont>
                </ContentText>
                {up.includes(key) &&
                  data[item].map(
                    (value, _) =>
                      value.title && (
                        <ParentContent key={value.title}>
                          <TitleContainer
                            notMaxW1
                            onClick={() => {
                              window.open(
                                "/problems/" +
                                  value.title
                                    .toLowerCase()
                                    .split(" ")
                                    .join("_") +
                                  "?tag=" +
                                  item,
                                "_blank"
                              );
                            }}
                          >
                            <p>
                              {value.qno}. {value.title}{" "}
                            </p>
                          </TitleContainer>
                        </ParentContent>
                      )
                  )}
              </ContentItem>
            ))}
        {selected === 3 && !isDescriptionSet && <BackendSD />}
        {selected === 3 &&
          hashParam &&
          pathname &&
          pathname.split("/revision_sheet/")?.[1] &&
          SD_SOLUTIONING?.[hashParam] &&
          SD_SOLUTIONING[hashParam]?.[
            decodeURIComponent(pathname.split("/revision_sheet/")?.[1])
          ]}
      </Content>
    </Container>
  );
};

export default RevisionSheet;
