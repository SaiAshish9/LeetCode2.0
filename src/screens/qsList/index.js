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
} from "./styles";

import { FaCheck } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const data = [
  {
    key: "1",
    qno: "1192",
    title: "Critical Connections in a Network",
    acceptance: "55.7%",
    difficulty: "hard",
    tags: ["Depth First Search", "Graph", "Biconnected Component"],
  },
];

const QSList = () => {
  const columns = [
    {
      title: "",
      key: "tick",
      dataIndex: "tick",
      render: (_, {}) => {
        return <FaCheck size={12} color="#449d44" />;
      },
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
      render: (_, { title }) => {
        return (
          <TitleContainer
            onClick={() => {
              window.open(
                "/problems/" +
                  title.toLowerCase().replaceAll(" ", "_") +
                  "?tag=" +
                  "biconnected_component",
                "_blank"
              );
            }}
          >
            {title}
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

  const BASE_URl =
    "https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/";

  function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  async function fetchData() {
    fetch(BASE_URl + "q_info.json")
      .then((res) => res.json())
      .then((res) => {
        let path = pathname?.split("/tag/")?.[1];
        path = path?.replaceAll("_", " ");
        path = toTitleCase(path)
        setPath(path);
        const values = Object.values(res);
        const filteredData = values.filter((x) => x?.tags.includes(path));
        setTableData(
          filteredData.map((x, k) => {
            const obj = { ...x };
            obj["key"] = "" + k;
            return obj;
          })
        );
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <Switch>
        <BookmarkText>
          <BookmarkIcon />
          <BookmarkSpan>{pathname && path}</BookmarkSpan>
        </BookmarkText>
        <TabContainer>
          <Tab>
            <TabText>Problems</TabText>
          </Tab>
          <Tab inactive>
            <TabText>Description</TabText>
          </Tab>
        </TabContainer>
      </Switch>
      <Content>
        <ContentText>
          <ContentSpan>Subscribe </ContentSpan>
          to see which companies asked this question
        </ContentText>
        <ContentText>
          You have solved <ContentTextBold>1 / 1</ContentTextBold> problems.
        </ContentText>
        <ContentText>
          <Check checked={true} onChange={null} />
          <ContentTextBold>Show problem tags</ContentTextBold>
        </ContentText>
        {tableData && (
          <StyledTableContainer
            columns={columns}
            dataSource={tableData}
            pagination={false}
          />
        )}
      </Content>
    </Container>
  );
};

export default QSList;
