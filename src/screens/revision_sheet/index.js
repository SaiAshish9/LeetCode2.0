/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Container,
  Content,
  ContentItem,
  ContentText,
  ParentContent,
  Spacer,
} from "./styles";
import { ContentTextBold, TitleContainer } from "../qsList/styles";

const RevisionSheet = () => {
  const tempData = {
    "Two Pointers": [5, 11, 15, 16, 18],
    "Sliding Window": [3, 159, 209, 219, 220, 239],
    "Hash Table": [],
    "Dynamic Programming": [],
    Math: [],
    Sorting: [],
    Greedy: [],
    "Depth-First Search": [],
    Database: [],
    "Binary Search": [],
    Tree: [],
    "Breadth-First Search": [],
    Matrix: [],
    "Bit Manipulation": [],
    "Binary Tree": [],
    "Heap (Priority Queue)": [],
    "Prefix Sum": [],
    Stack: [],
    Simulation: [],
    Graph: [],
    Counting: [],
    Design: [],
    Backtracking: [],
    Enumeration: [],
    "Union Find": [],
    "Linked List": [],
    "Ordered Set": [],
    "Monotonic Stack": [],
    "Number Theory": [],
    Trie: [],
    "Divide and Conquer": [],
    Recursion: [],
    Bitmask: [],
    Queue: [],
    "Segment Tree": [],
    "Binary Search Tree": [],
    Geometry: [],
    Memoization: [],
    "Hash Function": [],
    "Binary Indexed Tree": [],
    "Topological Sort": [],
    Combinatorics: [],
    "String Matching": [],
    "Shortest Path": [],
    "Rolling Hash": [],
    "Game Theory": [],
    Interactive: [],
    "Data Stream": [],
    Brainteaser: [],
    "Monotonic Queue": [],
    Randomized: [],
    "Merge Sort": [],
    Iterator: [],
    Concurrency: [],
    "Doubly-Linked List": [],
    "Probability and Statistics": [],
    Quickselect: [],
    "Bucket Sort": [],
    "Suffix Array": [],
    "Minimum Spanning Tree": [],
    "Counting Sort": [],
    Shell: [],
    "Line Sweep": [],
    "Reservoir Sampling": [],
    "Strongly Connected Component": [],
    "Eulerian Circuit": [],
    "Radix Sort": [],
    "Rejection Sampling": [],
    "Biconnected Component": [],
    Array: [],
    String: [],
  };

  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  const BASE_URL =
    "https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/";

  async function fetchData() {
    fetch(BASE_URL + "q_info.json")
      .then((res) => res.json())
      .then((res) => {
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
      })
      .catch((err) => console.log(err));
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
            Total Count: <ContentTextBold>{count}</ContentTextBold> problems.
          </ContentText>
        )}
        <Spacer />
        {data &&
          Object.keys(data).map(
            (item, key) =>
              data[item].length > 0 && (
                <ContentItem key={item}>
                  <ContentText>
                    {+key + 1}. {item} ({data[item].length})
                  </ContentText>
                  <Spacer />
                  {data[item].map(
                    (value, key) =>
                      value.title && (
                        <ParentContent key={value.title}>
                          <TitleContainer
                            onClick={() => {
                              window.open(
                                "/problems/" +
                                  value.title
                                    .toLowerCase()
                                    .split(" ")
                                    .join("_"),
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
              )
          )}
      </Content>
    </Container>
  );
};

export default RevisionSheet;
