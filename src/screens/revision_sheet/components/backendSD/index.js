import React, { useState } from "react";
import { ParentContent } from "../../styles";
import { TitleContainer } from "../../../qsList/styles";

const DATA_BSD = [
  {
    title: "How Do Indexes Speed Up Database Reads?",
  },
  {
    title:
      "Design a schema for computing the rating of a IMDB movie rated by millions of users.",
  },
  {
    title:
      "How SQL Aggregations Work Internally to Efficiently Process Millions of Rows?",
  },
  {
    title:
      "Designing an leaderboard for an internal app used by Swiggy or Zomato to rate their millions of delivery drivers after each delivery.",
  },
  {
    title: "How HashMap Works Internally?",
  },
  {
    title: "gRPC vs REST",
  },
  {
    title: "Parallelism and Concurrency models of JavaScript and Go",
  },
  {
    title: "What happens when you type www.google.com into a web browser?",
  },
  {
    title: "How Kafka implements asynchronous communication?",
  },
  {
    title: "Partition And Consumer Groups Of Kafka.",
  },
  {
    title: "What if redis goes down in the system?",
  },
  {
    title: "What is a circuit breaker?",
  },
  {
    title: "Optimistic vs Pessimistic Locking",
  },
  {
    title: "How Garbage Collection works in java?",
  },
  {
    title: "What is a rate limiter?",
  },
  {
    title: "Offset-based pagination vs Cursor based pagination",
  },
  {
    title: "Define CAP theorem",
  },
  {
    title: "SQL vs NoSQL",
  },
  {
    title: "Why Nginx is used?",
  },
  {
    title: "Kubernetes Architecture",
  },
  {
    title: "What is service discovery?",
  },
  {
    title: "C in ACID vs C in CAP?",
  },
  {
    title: "Forward vs reverse proxy?",
  },
];

const BackendSD = () => {
  const [data, setData] = useState(DATA_BSD);

  return (
    <div>
      {data.map((value, k) => (
        <ParentContent key={value.title}>
          <TitleContainer
            notMaxW1
            onClick={() => {
              // window.open(
              //   "/problems/" +
              //     value.title.toLowerCase().split(" ").join("_") +
              //     "?tag=" +
              //     item,
              //   "_blank"
              // );
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

export default BackendSD;
