import React from "react";
import { Button, Container, StyledIcon } from "./styles";

const Options = ({ data, onClick = null }) => {
  return (
    <Container>
      {data.map((i, _) => (
        <Button
          highlighted={i.text !== "All Topics"}
          key={i.text}
          onClick={onClick}
        >
          {i.icon && <StyledIcon src={i.icon} alt="img" />}
          {i.text}
        </Button>
      ))}
    </Container>
  );
};

export default Options;
