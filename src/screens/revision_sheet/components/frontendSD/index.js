import React, { useEffect, useState } from "react";
import { ParentContent } from "../../styles";
import { TitleContainer } from "../../../qsList/styles";
import { useNavigate } from "react-router-dom";

const DATA_FSD = [
  {
    title: "How Do Indexes Speed Up Database Reads?",
  },
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
