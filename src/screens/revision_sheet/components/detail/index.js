import React from "react";
import SD_SOLUTIONING from "../../data/solutioning";

const Description = ({ hashParam, pathname }) => {
  return (
    <>
      {" "}
      {
        SD_SOLUTIONING?.[hashParam]?.[
          decodeURIComponent(pathname.split("/revision_sheet/")?.[1])
        ]
      }
    </>
  );
};

export default Description;
