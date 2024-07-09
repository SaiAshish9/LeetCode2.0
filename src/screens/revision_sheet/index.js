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
import { ContentTextBold, TitleContainer } from "../qsList/styles";
import axios from "axios";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const RevisionSheet = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [up, setUp] = useState([]);

  const BASE_URL =
    "https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/";

  async function fetchData() {
    try {
      const tempData = (await axios(BASE_URL + "revision.json")).data;
      const res = (await axios(BASE_URL + "q_info.json")).data;

      if (res && tempData) {
        const temp = Object.assign({}, tempData);
        let tempCount = 0;
        Object.values(tempData).forEach((x) => (tempCount += x.length));
        setCount(tempCount);
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
              value.tags.includes(key)
            ) {
              temp[key].push(value);
            }
          }
        }
        for (let key of Object.keys(temp)) {
          temp[key] = temp[key].sort((a, b) => a.qno - b.qno);
        }
        setData(temp);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
      <Content>
        {data && (
          <ContentText>
            Existing Total Count: <ContentTextBold>{count}</ContentTextBold>{" "}
            problems.
          </ContentText>
        )}{" "}
        <ContentText sm>
          *Note: Click on the tag name highlighted in a different color to view
          descriptions and time and space complexities of various operations.{" "}
          Use the arrow keys to collapse or expand selected questions.
        </ContentText>
        <Spacer />
        {data &&
          Object.keys(data)
            .filter((x) => data[x].length > 0)
            .map((item, key) => (
              <ContentItem key={item}>
                <ContentText>
                  {+key + 1}.&nbsp;
                  <p
                    onClick={() => {
                      window.open(
                        "/tag/" +
                          item.toLowerCase().replace(" ", "_") +
                          "#description",
                        "_blank"
                      );
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
                        setUp([...up, key]);
                      } else {
                        let temp = up.slice();
                        temp = temp.filter((x) => x !== key);
                        setUp(temp);
                      }
                    }}
                  >
                    {up.includes(key) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </IconCont>
                </ContentText>
                {up.includes(key) &&
                  data[item].map(
                    (value, key) =>
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
      </Content>
    </Container>
  );
};

export default RevisionSheet;
