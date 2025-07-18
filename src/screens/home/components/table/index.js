/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  DifficultyTag,
  StyledTableContainer,
  FrequencyCont,
  SpanCont,
} from "./styles";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ContentText } from "../../../revision_sheet/styles";

const columns = [
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => (
      <>
        {status === "scheduled" ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1.2rem"
              height="1.2rem"
              fill="rgb(44 187 93)"
            >
              <path
                fillRule="evenodd"
                d="M19 11.063V7h-2v1a1 1 0 11-2 0V7H9v1a1 1 0 01-2 0V7H5v4.063h14zm0 2H5V19h14v-5.938zM9 5h6V4a1 1 0 112 0v1h2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2V4a1 1 0 012 0v1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </>
        ) : status === "done" ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1.2rem"
              height="1.2rem"
              fill="rgb(44 187 93)"
              className="h-[18px] w-[18px] text-green-s dark:text-dark-green-s"
            >
              <path
                fillRule="evenodd"
                d="M20 12.005v-.828a1 1 0 112 0v.829a10 10 0 11-5.93-9.14 1 1 0 01-.814 1.826A8 8 0 1020 12.005zM8.593 10.852a1 1 0 011.414 0L12 12.844l8.293-8.3a1 1 0 011.415 1.413l-9 9.009a1 1 0 01-1.415 0l-2.7-2.7a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </>
        ) : (
          <></>
        )}
      </>
    ),
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    sorter: (a, b) => a.title - b.title,
    render: (_, { title, status }) => (
      <p
        onClick={() => {
          console.log({ status });
          if (status !== "incomplete") {
            window.open(
              "/problems/" +
                title
                  ?.split(".")?.[1]
                  ?.trim()
                  ?.toLowerCase()
                  .replaceAll(" ", "_"),
              "_blank"
            );
          }
        }}
      >
        {title}
      </p>
    ),
  },
  {
    title: "Solution",
    dataIndex: "solution",
    key: "solution",
    render: (_, { solution }) => (
      <>
        {solution === "done" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            fill="rgb(10 132 255)"
            className="h-5 w-5 text-blue dark:text-dark-blue"
          >
            <path d="M15.207 11.293a1 1 0 010 1.414l-3.5 3.5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 14.086l2.793-2.793a1 1 0 011.414 0z"></path>
            <path d="M4 5a3 3 0 013-3h7.039a3 3 0 012.342 1.126l2.962 3.701A3 3 0 0120 8.702V19a3 3 0 01-3 3H7a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V9h-3a2 2 0 01-2-2V4H7zm8 .6V7h1.92L15 4.6z"></path>
          </svg>
        ) : solution === "tick" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            fill="rgb(191 90 242)"
            className="h-5 w-5 text-purple dark:text-dark-purple"
          >
            <path d="M10 15.464v-3.927a.8.8 0 011.259-.656l2.805 1.964a.8.8 0 010 1.31l-2.805 1.964A.8.8 0 0110 15.464z"></path>
            <path d="M7 4a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V9h-3a2 2 0 01-2-2V4H7zm8 .6V7h1.92L15 4.6zM4 5a3 3 0 013-3h7.039a3 3 0 012.342 1.126l2.962 3.701A3 3 0 0120 8.702V19a3 3 0 01-3 3H7a3 3 0 01-3-3V5z"></path>
          </svg>
        ) : (
          <></>
        )}
      </>
    ),
  },
  {
    title: "Acceptance",
    key: "acceptance",
    dataIndex: "acceptance",
    sorter: (a, b) => a.acceptance - b.acceptance,
  },
  {
    title: "Difficulty",
    key: "difficulty",
    sorter: (a, b) => a.difficulty - b.difficulty,
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
    dataIndex: "frequency",
    key: "frequency",
    render: (_, { frequency }) => (
      <FrequencyCont>
        <SpanCont />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1.25rem"
          height="1.25rem"
          fill="rgb(89 89 89)"
          className="flex-0 -mt-1.5 h-5 w-5 text-gray-5 dark:text-gray-7"
        >
          <path
            fillRule="evenodd"
            d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <SpanCont right />
      </FrequencyCont>
    ),
  },
];

const TableContainer = () => {
  const [tableData, setTableData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isAcceptanceLoaded, setIsAcceptanceLoaded] = useState(false);
  const [isDifficultyLoaded, setIsDifficultyLoaded] = useState(false);
  const [isSolvedQsLoaded, setIsSolvedQsLoaded] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const BASE_URL =
    "https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/";

  async function fetchSolutions() {
    try {
      let res = (await axios.get(`${BASE_URL}solutions.json`)).data;

      if (typeof res === "string") {
        try {
          res = JSON.parse(res.replace(/,(\s*})/g, "$1"));
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }

      const solvedQuestions = Object.entries(res)
        .filter(([_, value]) => {
          return Object.values(value["solution"]).some(
            (solution) => solution.length > 0
          );
        })
        .map(([key]) => +key);

      setTableData((tableData) =>
        tableData.map((item, key) => {
          return {
            ...item,
            status: solvedQuestions.includes(+item.title?.split(".")[0])
              ? "done"
              : "incomplete",
          };
        })
      );

      console.log({
        leftOverQs1000:
          1000 - solvedQuestions.slice().filter((x) => x <= 1000).length,
        leftOverQs2000:
          2000 - solvedQuestions.slice().filter((x) => x <= 2000).length,
        leftOverQs3221:
          3221 - solvedQuestions.slice().filter((x) => x <= 3221).length,
      });
      setIsSolvedQsLoaded(true);

      return solvedQuestions;
    } catch (err) {
      console.error("Failed to fetch solutions:", err);
      return [];
    }
  }

  async function fetchData() {
    fetch(
      "https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/questions.json"
    )
      .then((res) => res.json())
      .then(async (res) => {
        setTableData(
          res.map((item, key) => {
            return {
              key: "" + key,
              title: item,
              solution: "tick",
            };
          })
        );

        await fetchAcceptance();
        await fetchDifficulty();
        await fetchSolutions();

        setIsDataLoaded(true);
      })
      .catch((err) => console.log(err));
  }

  async function fetchDifficulty() {
    fetch(
      "https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/difficulty.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setTableData((tableData) =>
          tableData.map((item, key) => {
            return {
              ...item,
              difficulty: res[key] ?? "Hard",
            };
          })
        );
        setIsDifficultyLoaded(true);
      })
      .catch((err) => console.log(err));
  }

  async function fetchAcceptance() {
    fetch(
      "https://raw.githubusercontent.com/SaiAshish9/LeetCode2.0_Assets/main/acceptance.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setTableData((tableData) =>
          tableData.map((item, key) => {
            return {
              ...item,
              acceptance: res[key] ?? "50%",
            };
          })
        );
        setIsAcceptanceLoaded(true);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (
      !tableData?.length > 0 &&
      !isDataLoaded &&
      !isAcceptanceLoaded &&
      !isDifficultyLoaded &&
      !isSolvedQsLoaded
    )
      fetchData();
  }, [
    fetchData,
    isAcceptanceLoaded,
    isDifficultyLoaded,
    isSolvedQsLoaded,
    isDataLoaded,
    tableData?.length,
  ]);

  return (
    <>
      {tableData?.length > 0 &&
      tableData[0]?.acceptance &&
      tableData[0]?.difficulty &&
      tableData[0]?.status &&
      isDataLoaded &&
      isAcceptanceLoaded &&
      isDifficultyLoaded ? (
        <StyledTableContainer
          columns={columns}
          dataSource={tableData}
          pagination={{
            defaultPageSize: 100,
            current: Number(searchParams.get("page")) || 1,
            showSizeChanger: true,
            pageSizeOptions: ["20", "50", "100"],
            onChange: (page, pageSize) => {
              navigate(`/?page=${page}`);
            },
          }}
        />
      ) : (
        <>
          <br />
          <ContentText style={{ color: "#eff2f699" }}>Loading...</ContentText>
          <br />
        </>
      )}
    </>
  );
};
export default TableContainer;
