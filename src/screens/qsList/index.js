/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  BookmarkIcon,
  BookmarkSpan,
  BookmarkText,
  Check,
  Container,
  Content,
  ContentSpan,
  ContentText,
  ContentTextBold,
  StyledTableContainer,
  Switch,
  Tab,
  TabContainer,
  TabText,
  TitleContainer,
  DifficultyTag,
  FrequencyBar,
  Tag,
  TagsContainer,
  DescriptionContainer,
  CheckIcon,
} from "./styles";
import { Helmet } from "react-helmet";

import { useLocation } from "react-router-dom";
import { FaLockOpen } from "react-icons/fa";
import { PREMIUM, TAG_DESCRIPTION } from "../problem/data";
import axios from "axios";

const QSList = () => {
  const columns = [
    {
      title: "",
      key: "tick",
      dataIndex: "tick",
      render: (_, {}) => {
        return <CheckIcon size={12} color="#449d44" />;
      },
    },
    {
      title: "",
      key: "key",
      dataIndex: "key",
    },
    {
      title: "#",
      key: "qno",
      dataIndex: "qno",
    },
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
      render: (_, { qno, title }) => {
        return (
          <TitleContainer
            maxW
            onClick={() => {
              window.open(
                "/problems/" +
                  title.toLowerCase().replaceAll(" ", "_") +
                  "?tag=" +
                  path,
                "_blank"
              );
            }}
          >
            <p>{title}</p>
            {PREMIUM.includes(+qno) && <FaLockOpen />}
          </TitleContainer>
        );
      },
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => {
        return (
          <TagsContainer>
            {tags.map((tag, key) => (
              <Tag
                onClick={() => {
                  window.open(
                    "tag/" + tag.toLowerCase().replaceAll(" ", "_"),
                    "_blank"
                  );
                }}
                key={key}
              >
                {tag}
              </Tag>
            ))}
          </TagsContainer>
        );
      },
    },
    {
      title: "Acceptance",
      key: "acceptance",
      dataIndex: "acceptance",
    },
    {
      title: "Difficulty",
      key: "difficulty",
      dataIndex: "difficulty",
      render: (_, { difficulty }) => (
        <>
          <DifficultyTag
            easy={difficulty === "Easy"}
            medium={difficulty === "Medium"}
            hard={difficulty === "Hard"}
          >
            {difficulty}
          </DifficultyTag>
        </>
      ),
    },
    {
      title: "Frequency",
      key: "frequency",
      dataIndex: "frequency",
      render: (_, {}) => {
        return <FrequencyBar />;
      },
    },
  ];

  const [tableData, setTableData] = useState(null);
  const [path, setPath] = useState(null);
  const { pathname } = useLocation();
  const [selected, setSelected] = useState(0);
  const [description, setDescription] = useState(null);

  const BASE_URL =
    "https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/";

  function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  const [solvedQCount, setSolvedQCount] = useState(null);
  const [totalQCount, setTotalQCount] = useState(null);

  function findDiffElements(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let diff1 = arr1.filter((x) => !set2.has(x));
    let diff2 = arr2.filter((x) => !set1.has(x));
    return [diff1, diff2];
  }

  async function fetchData() {
    let res = (await axios(BASE_URL + "q_info.json")).data;
    let path = pathname?.split("/tag/")?.[1];
    path = path ? decodeURIComponent(path)?.replaceAll("_", " ") : "";
    path = toTitleCase(path);
    setPath(path);
    const values = Object.values(res);
    const filteredData = values
      .filter((x) => x?.tags.includes(path))
      .sort((a, b) => a.qno - b.qno);
    const tData = filteredData.map((x, k) => {
      const obj = { ...x };
      obj["key"] = "" + (+k + 1);
      obj["acceptance"] = x["acceptance"].toFixed(1) + "%";
      return obj;
    });
    setTableData(tData);

    res = (await axios(BASE_URL + "solutions.json")).data;
    const x = decodeURIComponent(
      decodeURIComponent(pathname?.split("/tag/")?.[1])
    )
      .replaceAll("_", "-")
      .replaceAll(" ", "_");
    let count = 0;
    const qnos = tData?.map((x) => x.qno);
    const temp = [];
    for (let key of Object.keys(res)) {
      if (x in res[key]["java"] && res[key]["java"][x]?.length > 0) {
        count++;
        temp.push(key);
        continue;
      }
      let flag = 0;
      if (qnos.map((x) => "" + x).includes(key)) {
        if (Object.keys(res[key]["java"]).length > 0) {
          for (let k of Object.keys(res[key]["java"])) {
            if (res[key]["java"][k]?.length > 0) {
              flag = 1;
              break;
            }
          }
        }
        if (flag === 1) {
          ++count;
          temp.push(key);
        } else {
          console.log(key);
        }
      }
    }
    setSolvedQCount(count);

    const tagsResponse = (await axios(BASE_URL + "tags.json")).data;
    setTotalQCount(
      tagsResponse.filter((x) => x.tag === decodeURIComponent(path))[0]["count"]
    );
  }

  async function fetchDesc() {
    fetch(BASE_URL + "tagDescription.json")
      .then((res) => res.json())
      .then((res) => {
        setDescription(res[decodeURIComponent(pathname?.split("/tag/")?.[1])]);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
    fetchDesc();
  }, []);

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LeetCode2.0: {path ? decodeURIComponent(path) : ""}</title>
        <meta
          property="og:title"
          content={`LeetCode2.0: ${path ? decodeURIComponent(path) : ""}`}
        />
        <meta
          property="og:description"
          content="Useful for problems involving intersections"
        />
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
        <BookmarkText>
          <BookmarkIcon />
          <BookmarkSpan>{path ? decodeURIComponent(path) : ""}</BookmarkSpan>
        </BookmarkText>
        <TabContainer>
          <Tab onClick={() => setSelected(0)} inactive={selected === 1}>
            <TabText>Problems</TabText>
          </Tab>
          <Tab onClick={() => setSelected(1)} inactive={selected === 0}>
            <TabText>Description</TabText>
          </Tab>
        </TabContainer>
      </Switch>
      <Content>
        {selected === 0 ? (
          <>
            <ContentText>
              <ContentSpan>Subscribe </ContentSpan>
              to see which companies asked this question
            </ContentText>
            <ContentText>
              {tableData && solvedQCount !== null && totalQCount !== null && (
                <>
                  You have solved{" "}
                  <ContentTextBold>
                    {solvedQCount} / {totalQCount}
                  </ContentTextBold>{" "}
                  problems.
                </>
              )}
            </ContentText>
            <ContentText>
              <Check checked={true} onChange={null} />
              <ContentTextBold>Show problem tags</ContentTextBold>
            </ContentText>
            {tableData && solvedQCount !== null && totalQCount !== null && (
              <StyledTableContainer
                columns={columns}
                dataSource={tableData}
                pagination={false}
              />
            )}
          </>
        ) : (
          <DescriptionContainer>
            {TAG_DESCRIPTION[decodeURIComponent(path)] ? (
              <ContentText>
                {TAG_DESCRIPTION[decodeURIComponent(path)]}
              </ContentText>
            ) : (
              description?.map((desc, k) => (
                <ContentText key={k}>{desc}</ContentText>
              ))
            )}
          </DescriptionContainer>
        )}
      </Content>
    </Container>
  );
};

export default QSList;
