import React, { useEffect, useState } from "react";
import { ParentContent } from "../../styles";
import { TitleContainer } from "../../../qsList/styles";
import { useNavigate } from "react-router-dom";

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
    title: "Different Metrics Of A Backend MicroService.",
  },
  {
    title: "Capacity Estimation.",
  },
  {
    title:
      "Designing an leaderboard for an internal app used by Swiggy or Zomato to rate their delivery drivers after each delivery. Millions of driver ratings can be updated at once.",
  },
  {
    title:
      "Observer Pattern: Design an system based on internal app of Swiggy/Zomato to notify all drivers when rating of one the driver changes. Millions of drivers can receive notification.",
  },
  {
    title: "How HashMap Works Internally?",
  },
  {
    title: "gRPC vs REST: Why gRPC is 8 times faster than REST?",
  },
  {
    title:
      "Parallelism and Concurrency models of JavaScript and Go in terms of hardware kernel and threads",
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
    title: "Explain and design a rate limiter?",
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
  {
    title: "Mutextes And Semaphores",
  },
  {
    title: "Idempotency in REST",
  },
  {
    title: "Docker Architecture",
  },
  {
    title: "Kubernetes Architecture",
  },
  {
    title: "TCP Vs IP",
  },
  {
    title: "How ElasticSearch Works Internally?",
  },
  {
    title: "How Push Notifications works internally at Web, Android & iOS?",
  },
];

const BackendSD = () => {
  const [data, setData] = useState(DATA_BSD);
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

export default BackendSD;
