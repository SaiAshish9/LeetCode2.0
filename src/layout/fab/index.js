import React from "react";
import { FabBtn, StyledImg } from "./styles";

import FabIcon from "../../assets/fabIcon.svg";
import SmileyIcon from "../../assets/smiley.svg";

const FabComponent = () => {
  return (
    <>
      <FabBtn fab>
        <StyledImg src={FabIcon} alt="img" />
      </FabBtn>
      <FabBtn>
        <StyledImg src={SmileyIcon} alt="img" />
      </FabBtn>
    </>
  );
};

export default FabComponent;
