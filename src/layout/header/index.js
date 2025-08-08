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
  ScoreTextSpan,
} from "./styles";

import BellSvg from "../../assets/bell.svg";
import FireSvg from "../../assets/fire.svg";
import LogoDark from "../../assets/logo_dark.svg";
import ProfileImg from "../../assets/l_profile.jpeg";

import { useNavigate, useLocation } from "react-router-dom";

import { Counter } from "counterapi";
// import { Analytics } from "@upstash/analytics";

// const analytics = new Analytics({ token: "9b686896-39b9-45d4-aa42-78d0d060997c" });

const options = [
  {
    text: "Problems",
    route: "/",
  },
  // {
  //   text: "Design Principles",
  //   route: "/design_principles",
  // },
  // {
  //   text: "Design Patterns",
  //   route: "/design_patterns",
  // },
  // {
  //   text: "LLD",
  //   route: "/lld",
  // },
  // {
  //   text: "HLD",
  //   route: "/hld",
  // },
  // {
  //   text: "CN & OS",
  //   route: "/cn_and_os",
  // },
  {
    text: "Revision Sheet",
    route: "/revision_sheet",
  },
  {
    text: "PDFs",
    route: "/pdf",
  },
  {
    text: "LeetCode 75",
    route: "/leetCode-75",
  },
  {
    text: "Top Interview 150",
    route: "/top-interview-75",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [upCount, setUpCount] = useState(null);

  const handleClick = (e, route) => {
    e.preventDefault();
    navigate(route);
  };

  useEffect(() => {
    const counter = new Counter({ workspace: "leetcode" });

    async function trackEvent() {
      try {
        const result = await counter.up("leetcode");
        setUpCount(result.data.up_count);

        // const res = await analytics.track("page-visit");
        // setVisitors(res.uniques);
      } catch (error) {
        console.error("Failed to track event:", error.message);
      }
    }

    trackEvent();
  }, []);

  const isDark =
    ["tag", "revision_sheet"].filter((x) => pathname?.includes(x)).length > 0;

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
                isHome={!isDark ? 1 : 0}
                text={i.text}
                onClick={(e) => handleClick(e, i.route)}
              >
                {i.text}
              </NavItem>
            ))}
          </OptionsContainer>
        </NavItemContainer>
        <CircularContainer>
          {upCount && (
            <NavIcon>
              <ScoreText>
                Page Views:{" "}
                <ScoreTextSpan isHome={!isDark ? 1 : 0}>
                  {upCount}
                </ScoreTextSpan>
              </ScoreText>
            </NavIcon>
          )}
          {/* 
          {visitors && (
            <NavIcon>
              <ScoreText>
                Unique Users: <ScoreTextSpan>{visitors}</ScoreTextSpan>
              </ScoreText>
            </NavIcon>
          )} */}
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
            src={ProfileImg}
          />
          <NavIcon noMR>
            <PremiumButton>
              <PremiumText>Premium</PremiumText>
            </PremiumButton>
          </NavIcon>
        </CircularContainer>
        {!open ? (
          <BarsIcon w={!isDark} onClick={() => setOpen((open) => !open)} />
        ) : (
          <CloseIcon w={!isDark} onClick={() => setOpen((open) => !open)} />
        )}
      </NavContent>
      <StyledDrawer
        open={open}
        onClose={() => setOpen((open) => !open)}
        placement="left"
        closeIcon={false}
        isHome={!isDark ? 1 : 0}
        width={window.innerWidth < 576 ? "63vw" : "40vw"}
      >
        <StyledDrawerIconContent>
          {options.map((i, _) => (
            <NavItem
              key={i.text}
              route={i.route === pathname}
              isHome={!isDark ? 1 : 0}
              text={i.text}
              onClick={(e) => {
                handleClick(e, i.route);
                setOpen((open) => !open);
              }}
            >
              {i.text}
            </NavItem>
          ))}
          {upCount && (
            <NavItem hover={0} route={0} isHome={!isDark ? 1 : 0}>
              Page Views: <b>{upCount}</b>
            </NavItem>
          )}
        </StyledDrawerIconContent>
        <StyledDrawerIconContainer
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/%F0%9F%9A%80-sai-ashish-237784188/",
              "_blank"
            );
          }}
        >
          <ProfileAvatar alt="pic" src={ProfileImg} />
          <NavItem1 isHome={!isDark ? 1 : 0}>Sai</NavItem1>
        </StyledDrawerIconContainer>
      </StyledDrawer>
    </NavContainer>
  );
};

export default Navbar;
