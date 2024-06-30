import React, { useEffect, useState } from "react";

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
  BarsIcon,
  StyledDrawer,
  CloseIcon,
  StyledDrawerIconContent,
  StyledDrawerIconContainer,
  ProfileAvatar,
  NavItem1,
} from "./styles";

import BellSvg from "../../assets/bell.svg";
import FireSvg from "../../assets/fire.svg";
import LogoDark from "../../assets/logo_dark.svg";

import { useNavigate, useLocation } from "react-router-dom";

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
    text: "CN & OS",
    route: "/cn_and_os",
  },
  {
    text: "Revision Sheet",
    route: "/revision_sheet",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const handleClick = (e, route) => {
    e.preventDefault();
    navigate(route);
  };

  useEffect(() => {}, [pathname]);

  const isDark =
    ["tag", "revision_sheet"].filter((x) => pathname?.includes(x)).length === 0;

  return (
    <NavContainer tags={isDark}>
      <NavContent>
        <NavItemContainer>
          <StyledImage
            alt="img"
            onClick={() => navigate("/")}
            src={
              !isDark
                ? "https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
                : LogoDark
            }
          />
          <OptionsContainer>
            {options.map((i, _) => (
              <NavItem
                key={i.text}
                route={i.route === pathname}
                isHome={!isDark}
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
            <StyledImage style={{ height: "20px" }} alt="img" src={BellSvg} />
          </NavIcon>
          <NavIcon>
            <StyledImage style={{ height: "20px" }} alt="img" src={FireSvg} />
            <ScoreText>0</ScoreText>
          </NavIcon>
          <CircularAvatar
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/%F0%9F%9A%80-sai-ashish-237784188/",
                "_blank"
              );
            }}
            alt="pic"
            src="https://media.licdn.com/dms/image/D5603AQEhLMd3-TOQQQ/profile-displayphoto-shrink_400_400/0/1681547463721?e=1720656000&v=beta&t=STL35y3eyP6AIE96k00KBK4Pokjgf4pK9Jl9U4Xqquw"
          />
          <NavIcon noMR>
            <PremiumButton>
              <PremiumText>Premium</PremiumText>
            </PremiumButton>
          </NavIcon>
        </CircularContainer>
        {!open ? (
          <BarsIcon
            w={!isDark}
            onClick={() => setOpen((open) => !open)}
          />
        ) : (
          <CloseIcon
            w={!isDark}
            onClick={() => setOpen((open) => !open)}
          />
        )}
      </NavContent>
      <StyledDrawer
        open={open}
        onClose={() => setOpen((open) => !open)}
        placement="left"
        closeIcon={false}
        isHome={!isDark}
        width={window.innerWidth < 576 ? "63vw" : "40vw"}
      >
        <StyledDrawerIconContent>
          {options.map((i, _) => (
            <NavItem
              key={i.text}
              route={i.route === pathname}
              isHome={!isDark}
              text={i.text}
              onClick={(e) => {
                handleClick(e, i.route);
                setOpen((open) => !open);
              }}
            >
              {i.text}
            </NavItem>
          ))}
        </StyledDrawerIconContent>
        <StyledDrawerIconContainer
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/%F0%9F%9A%80-sai-ashish-237784188/",
              "_blank"
            );
          }}
        >
          <ProfileAvatar
            alt="pic"
            src="https://media.licdn.com/dms/image/D5603AQEhLMd3-TOQQQ/profile-displayphoto-shrink_400_400/0/1681547463721?e=1720656000&v=beta&t=STL35y3eyP6AIE96k00KBK4Pokjgf4pK9Jl9U4Xqquw"
          />
          <NavItem1 isHome={!isDark}>Sai</NavItem1>
        </StyledDrawerIconContainer>
      </StyledDrawer>
    </NavContainer>
  );
};

export default Navbar;
