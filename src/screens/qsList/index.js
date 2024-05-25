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

import { useLocation } from "react-router-dom";

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
  const [selected, setSelected] = useState(0);
  const [description, setDescription] = useState(null);

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
        path = toTitleCase(path);
        setPath(path);
        const values = Object.values(res);
        const filteredData = values.filter((x) => x?.tags.includes(path));
        setTableData(
          filteredData.map((x, k) => {
            const obj = { ...x };
            obj["key"] = "" + k;
            obj["acceptance"] = x["acceptance"] + "%"
            return obj;
          })
        );
      })
      .catch((err) => console.log(err));
  }

  async function fetchDesc() {
    fetch(BASE_URl + "tagDescription.json")
      .then((res) => res.json())
      .then((res) => {
        setDescription(res[pathname?.split("/tag/")?.[1]]);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
    fetchDesc();
  }, []);

  return (
    <Container>
      <Switch>
        <BookmarkText>
          <BookmarkIcon />
          <BookmarkSpan>{pathname && path}</BookmarkSpan>
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
          </>
        ) : (
          <DescriptionContainer>
            {description?.map((desc, k) => (
              <ContentText key={k}>{desc}</ContentText>
            ))}
          </DescriptionContainer>
        )}
      </Content>
    </Container>
  );
};

export default QSList;
