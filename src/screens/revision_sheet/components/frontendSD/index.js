import React, { useEffect, useState } from "react";
import { ParentContent } from "../../styles";
import { TitleContainer } from "../../../qsList/styles";
import { useNavigate } from "react-router-dom";

const DATA_FSD = [
  {
    title:
      "How can we print a message when a promise is fulfilled within a Promise.all chain? Additionally, what are the different states and methods of promises that support parallel execution?How can we determine the status of a promise, and how do promises differ from async/await?",
  },
  {
    title: "How Push Notifications works internally at Web, Android & iOS?",
  },
  {
    title:
      "Parallelism and Concurrency models of JavaScript and Go in terms of hardware kernel and threads",
  },
  {
    title: "Event Loop Architecture And Examples",
  },
  {
    title: "How Critical Rendering Path (CRP) works internally?",
  },
  {
    title: "GraphQL Caching",
  },
  {
    title: "How do cookies work in browsers?",
  },
  {
    title: "How Caching Works in Google Chrome Browser and React.js?"
  },
  {
    title: "Internal working of Currying in JavaScript Using Memory and Lexical Environment."
  },
  {
    title: "Google Lighthouse Metrics"
  }
];

const FrontendSD = () => {
  const [data, setData] = useState(DATA_FSD);
  const navigate = useNavigate();

  const [hashParam, setHashParam] = useState("");

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

  return (
    <div>
      {data.map((value, k) => (
        <ParentContent key={value.title}>
          <TitleContainer
            notMaxW1
            onClick={() => {
              navigate(encodeURIComponent(value.title) + "#" + hashParam);
            }}
          >
            <p>
              {+k + 1}. {value.title}{" "}
            </p>
          </TitleContainer>
        </ParentContent>
      ))}
    </div>
  );
};

export default FrontendSD;
