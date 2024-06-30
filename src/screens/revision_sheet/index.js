import React from "react";
import { Helmet } from "react-helmet";
import {
  Container,
  Content,
  ContentItem,
  ContentText,
  ParentContent,
} from "./styles";
import { ContentTextBold, TitleContainer } from "../qsList/styles";
import { PREMIUM } from "../problem/data";
import { FaLockOpen } from "react-icons/fa";

const RevisionSheet = () => {
  const data = {
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

  let count = 0;
  Object.values(data).forEach((x) => (count += x.length));

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
            You have solved{" "}
            <ContentTextBold>
              {count} / {count}
            </ContentTextBold>{" "}
            problems.
          </ContentText>
        )}
        {data &&
          Object.keys(data).map(
            (item, key) =>
              data[item].length > 0 && (
                <ContentItem key={item}>
                  <ContentText>
                    {+key + 1}. {item} ({data[item].length})
                  </ContentText>
                  {data[item].map((value, key) => (
                    <ParentContent key={key}>
                      <TitleContainer
                        onClick={() => {
                          window.open("/problems/" + value?.route, "_blank");
                        }}
                      >
                        <p>{value}</p>
                        {/* {PREMIUM.includes(value) && <FaLockOpen />} */}
                      </TitleContainer>
                    </ParentContent>
                  ))}
                </ContentItem>
              )
          )}
      </Content>
    </Container>
  );
};

export default RevisionSheet;
