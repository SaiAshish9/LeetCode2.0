import React from "react";
import {
  ArrowDowmImage,
  BubbleContainer,
  Container,
  Dropdown,
  DropdownContainer,
  InputContainer,
  PickOneBubble,
  PickOneContainer,
  StyledSearchImage,
  StyledSettingsImage,
  TextInputContainer,
  StyledSettingsImageContainer,
} from "./styles";

import DropdownArrorDownImg from "../../../../assets/dropdown_arrow_down.svg";
import PickImg from "../../../../assets/pick.svg";
import SettingsImg from "../../../../assets/settingsIcon.svg";
import SearchIcon from "../../../../assets/search.svg";

const options = [
  {
    text: "Lists",
  },
  {
    text: "Difficulty",
  },
  {
    text: "Status",
  },
  {
    text: "Tags",
  },
];

const DropdownCont = () => {
  return (
    <Container>
      <DropdownContainer>
        {options.map((i, _) => (
          <Dropdown key={i.text}>
            {i.text}
            <ArrowDowmImage src={DropdownArrorDownImg} alt="img" />
          </Dropdown>
        ))}
        <TextInputContainer>
          <StyledSearchImage src={SearchIcon} alt="img" />
          <InputContainer placeholder="Search questions" />
        </TextInputContainer>
        <StyledSettingsImageContainer>
          <StyledSettingsImage src={SettingsImg} alt="img" />
        </StyledSettingsImageContainer>
      </DropdownContainer>
      <PickOneContainer>
        <BubbleContainer>
          <PickOneBubble src={PickImg} alt="img" />
        </BubbleContainer>
        Pick One
      </PickOneContainer>
    </Container>
  );
};

export default DropdownCont;
