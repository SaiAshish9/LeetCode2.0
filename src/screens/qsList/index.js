import React from "react";
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
import { useNavigate } from "react-router-dom";

const data = [
  {
    key: "1",
    qno: "1192",
    title: "Critical Connections in a Network",
    status: "scheduled",
    acceptance: "55.7%",
    solution: "tick",
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
                "/problems/" + title.toLowerCase().replaceAll(" ", "_") + "?tag=" + "biconnected_component",
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
            easy={difficulty === "easy"}
            medium={difficulty === "medium"}
            hard={difficulty === "hard"}
          >
            {difficulty === "easy"
              ? "Easy"
              : difficulty === "hard"
              ? "Hard"
              : "Medium"}
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

  return (
    <Container>
      <Switch>
        <BookmarkText>
          <BookmarkIcon />
          <BookmarkSpan>Biconnected Component</BookmarkSpan>
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
        <StyledTableContainer
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </Content>
    </Container>
  );
};

export default QSList;
