import React, { useEffect } from "react";

import {
  NavContainer,
  NavContent,
  NavItem,
  NavItemContainer,
  StyledImage,
  OptionsContainer,
  CircularAvatar,
  CircularContainer,
  NavIcon,
  ScoreText,
  PremiumButton,
  PremiumText,
} from "./styles";

import AvatarPic from "../../assets/p.jpeg";
import BellSvg from "../../assets/bell.svg";
import FireSvg from "../../assets/fire.svg";

import { useNavigate, useLocation } from "react-router-dom";

const options1 = [
  {
    text: "Explore",
  },
  {
    text: "Problems",
  },
  {
    text: "Contest",
  },
  {
    text: "Discuss",
  },
  {
    text: "Interview",
  },
  {
    text: "Store",
  },
];

const options = [
  {
    text: "Problems",
    route: "/",
  },
  {
    text: "Design Principles",
    route: "/design_principles",
  },
  {
    text: "Design Patterns",
    route: "/design_patterns",
  },
  {
    text: "LLD",
    route: "/lld",
  },
  {
    text: "HLD",
    route: "/hld",
  },
  {
    text: "CN",
    route: "/cn",
  },
  {
    text: "OS",
    route: "/os",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = (e, route) => {
    e.preventDefault();
    navigate(route);
  };

  useEffect(() => {}, [pathname]);

  return (
    <NavContainer>
      <NavContent>
        <NavItemContainer>
          <StyledImage
            alt="img"
            src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
          />
          <OptionsContainer>
            {options.map((i, _) => (
              <NavItem
                key={i.text}
                route={i.route === pathname}
                text={i.text}
                onClick={(e) => handleClick(e, i.route)}
              >
                {i.text}
              </NavItem>
            ))}
          </OptionsContainer>
        </NavItemContainer>
        <CircularContainer>
          <NavIcon>
            <StyledImage alt="img" src={BellSvg} />
          </NavIcon>
          <NavIcon>
            <StyledImage alt="img" src={FireSvg} />
            <ScoreText>0</ScoreText>
          </NavIcon>
          <CircularAvatar
            alt="pic"
            //   src={AvatarPic}
            src="https://media.licdn.com/dms/image/D5603AQEhLMd3-TOQQQ/profile-displayphoto-shrink_400_400/0/1681547463721?e=1720656000&v=beta&t=STL35y3eyP6AIE96k00KBK4Pokjgf4pK9Jl9U4Xqquw"
          />
          <NavIcon noMR>
            <PremiumButton>
              <PremiumText>Premium</PremiumText>
            </PremiumButton>
          </NavIcon>
        </CircularContainer>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
