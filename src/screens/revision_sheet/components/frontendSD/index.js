import React, { useEffect, useState } from "react";
import { ParentContent } from "../../styles";
import { TitleContainer } from "../../../qsList/styles";
import { useNavigate } from "react-router-dom";

const DATA_FSD = [
  {
    title: "How do cookies work in browsers?",
  },
  {
    title: "How Caching Works in Google Chrome Browser and React.js?",
  },
  {
    title: "Reconcilation and diffing algorithm.",
  },
  {
    title:
      "Internal working of Currying in JavaScript Using Memory and Lexical Environment.",
  },
  {
    title: "Google Lighthouse Metrics",
  },
  {
    title: "Event Loop Architecture And Examples",
  },
  {
    title: "How Critical Rendering Path (CRP) works internally?",
  },
  {
    title:
      "How can we print a message when a promise is fulfilled within a Promise.all chain? Additionally, what are the different states and methods of promises that support parallel execution? How can we determine the status of a promise, and how do promises differ from async/await?",
  },
  {
    title: "How Push Notifications works internally at Web, Android & iOS?",
  },
  {
    title:
      "Parallelism and Concurrency models of JavaScript and Go in terms of hardware kernel and threads",
  },
  {
    title: "GraphQL Caching",
  },
  {
    title: "How Closures Work in JavaScript?",
  },
  {
    title: "MonoRepo Creation Using Lerna",
  },
  {
    title:
      "Virtualization: Have you ever wondered how to efficiently display a list of 1 million data items in a user interface without needing backend pagination?",
  },
  {
    title:
      "When you type www.google.com into a web browser, a detailed series of processes occur to bring up the Google homepage",
  },
  {
    title: "Internationalization (i18n)",
  },
  {
    title: "CSR and SSR",
  },
  {
    title: "Code Splitting",
  },
  {
    title: "pre-render",
  },
  {
    title: "Web Workers Vs Service Workers",
  },
  {
    title: "Static Site Generation (SSR) with and without data",
  },
  {
    title: "Demulsification",
  },
  {
    title: "Proxy objects",
  },
  {
    title: "Incremental Site Generation (ISG)",
  },
  {
    title: "Load JS Asynchronously",
  },
  {
    title: "Lazy Loading",
  },
  {
    title: "Preload, Prefetch and PreConnect",
  },
  {
    title: "Progressive Images",
  },
  {
    title: "Responsive Images",
  },
  {
    title: "SetTimeOut Vs Promises",
  },
  {
    title: "Polyfills",
  },
  {
    title: "WebPack",
  },
  {
    title: "Infinite Scrolling",
  },
  {
    title:
      "How can we create a new React project from scratch by manually configuring Webpack and Babel, bypassing the use of create-react-app. How create-react-app sets up the configuration for Webpack and the Webpack Dev Server?",
  },
  {
    title: "Webhooks"
  },
  {
    title: "Polling"
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
