import React from "react";
import { Button, Container, StyledIcon } from "./styles";

import Btn1 from "../../../../assets/btn1.svg";
import Btn2 from "../../../../assets/btn2.svg";
import Btn3 from "../../../../assets/btn3.svg";
import Btn4 from "../../../../assets/btn4.svg";
import Btn5 from "../../../../assets/btn5.svg";

const Options = () => {
  const data = [
    {
      icon: Btn1,
      text: "All Topics",
    },
    {
      icon: Btn2,
      text: "Algorithms",
    },
    {
      icon: Btn3,
      text: "Database",
    },
    {
      icon: Btn4,
      text: "Shell",
    },
    {
      icon: Btn5,
      text: "Concurrency",
    },
  ];

  return (
    <Container>
      {data.map((i, _) => (
        <Button highlighted={i.text !== "All Topics"} key={i.text}>
          <StyledIcon src={i.icon} alt="img" />
          {i.text}
        </Button>
      ))}
    </Container>
  );
};

export default Options;
