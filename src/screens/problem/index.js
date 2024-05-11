import React, { useEffect, useRef } from "react";
import {
  Container,
  Content,
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
import { Editor } from "@monaco-editor/react";

const Problem = () => {
  // https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png

  const editorRef = useRef(null);

  useEffect(() => {
    const resizeHandler = () => {
      if (editorRef.current) {
        const parentHeight = editorRef.current.parentElement.clientHeight;
        editorRef.current.style.height = `${parentHeight}px`;
        // Trigger layout update after resizing
        if (editorRef.current.editor) {
          editorRef.current.editor.layout();
        }
      }
    };

    // Resize editor on window resize
    window.addEventListener("resize", resizeHandler);
    // Initial resize
    resizeHandler();

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

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
            //   src={AvatarPic}
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
        <LeftContainer>
          <TabHeader>
            <TabItem>
              <NavIcon style={{ marginRight: 0 }}>
                <StyledImage
                  style={{ height: "14px", top: 0 }}
                  alt="img"
                  src={DescriptionSvg}
                />
              </NavIcon>
              <TabText>Description</TabText>
            </TabItem>
            <LeftLI style={{ marginRight: 8 }} />
            <TabItem>
              <NavIcon style={{ marginRight: 0, opacity: 0.45 }}>
                <StyledImage
                  style={{ height: "14px", top: 0 }}
                  alt="img"
                  src={SolutioningSvg}
                />
              </NavIcon>
              <TabText inActive>Solutioning</TabText>
            </TabItem>
          </TabHeader>
          <LeftContent>
            <LeftContentTitle>
              1192. Critical Connections in a Network
            </LeftContentTitle>
            <LeftTag>Hard</LeftTag>
            <LeftContentDescription>
              <div class="elfjS" data-track-load="description_content">
                <p>
                  There are <code>n</code> servers numbered from <code>0</code>{" "}
                  to <code>n - 1</code> connected by undirected server-to-server{" "}
                  <code>connections</code> forming a network where{" "}
                  <code>
                    connections[i] = [a<sub>i</sub>, b<sub>i</sub>]
                  </code>{" "}
                  represents a connection between servers{" "}
                  <code>
                    a<sub>i</sub>
                  </code>{" "}
                  and{" "}
                  <code>
                    b<sub>i</sub>
                  </code>
                  . Any server can reach other servers directly or indirectly
                  through the network.
                </p>
                <p>
                  A <em>critical connection</em> is a connection that, if
                  removed, will make some servers unable to reach some other
                  server.
                </p>
                <p>
                  Return all critical connections in the network in any order.
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong class="example">Example 1:</strong>
                </p>
                <img
                  alt=""
                  src="https://assets.leetcode.com/uploads/2019/09/03/1537_ex1_2.png"
                  style={{ width: "198px", height: "248px;" }}
                />
                <pre>
                  <strong>Input:</strong> n = 4, connections =
                  [[0,1],[1,2],[2,0],[1,3]] <br />
                  <strong>Output:</strong> [[1,3]] <br />
                  <strong>Explanation:</strong> [[3,1]] is also accepted.
                </pre>

                <p>
                  <strong class="example">Example 2:</strong>
                </p>

                <pre>
                  <strong>Input:</strong> n = 2, connections = [[0,1]] <br />
                  <strong>Output:</strong> [[0,1]]
                </pre>

                <p>&nbsp;</p>
                <p>
                  <strong>Constraints:</strong>
                </p>

                <ul>
                  <li>
                    <code>
                      2 &lt;= n &lt;= 10<sup>5</sup>
                    </code>
                  </li>
                  <li>
                    <code>
                      n - 1 &lt;= connections.length &lt;= 10<sup>5</sup>
                    </code>
                  </li>
                  <li>
                    <code>
                      0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt;= n - 1
                    </code>
                  </li>
                  <li>
                    <code>
                      a<sub>i</sub> != b<sub>i</sub>
                    </code>
                  </li>
                  <li>There are no repeated connections.</li>
                </ul>
              </div>
            </LeftContentDescription>
          </LeftContent>
        </LeftContainer>
        <RightParentContainer>
          <RightContainer>
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
            <div ref={editorRef} style={{ width: "100%", height: "100%" }}>
              <Editor
                width="100%"
                height="100%"
                theme="vs-dark"
                defaultLanguage="java"
                userSelect={false}
                ref={editorRef}
                defaultValue={`
import java.util.*;

class Solution {
    List<List<Integer>> graph;
    int[] low;
    int[] disc;
    int time;
    List<List<Integer>> result;
    
    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        graph = new ArrayList<>();
        low = new int[n];
        disc = new int[n];
        result = new ArrayList<>();
        time = 0;
        
        // Initialize graph
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }
        
        // Build graph
        for (List<Integer> conn : connections) {
            int u = conn.get(0);
            int v = conn.get(1);
            graph.get(u).add(v);
            graph.get(v).add(u);
        }
        
        // Perform DFS
        dfs(0, -1);
        
        return result;
    }
    
    private void dfs(int u, int parent) {
        low[u] = disc[u] = ++time;
        
        for (int v : graph.get(u)) {
            if (v == parent) continue;
            
            if (disc[v] == 0) { // If v is not visited
                dfs(v, u);
                low[u] = Math.min(low[u], low[v]);
                if (low[v] > disc[u]) {
                    // (u, v) is a critical connection
                    result.add(Arrays.asList(u, v));
                }
            } else { // v is already visited
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }
}
`}
              />
            </div>
          </RightContainer>
          <TestCaseContainer>
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
