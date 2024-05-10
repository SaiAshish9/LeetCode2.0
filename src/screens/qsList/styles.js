import styled, { css } from "styled-components";
import { FaBookmark } from "react-icons/fa";
import { Checkbox } from "antd";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  padding-top: 50px;
  text-align: start;
`;

export const Switch = styled.div`
  background-color: #f5f5f5;
  padding-top: 20px;
  width: 100%;
  padding-left: 21vw;
`;

export const BookmarkIcon = styled(FaBookmark)`
  margin-right: 0.5em;
  font-size: 1.4rem;
`;

export const BookmarkText = styled.p`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;

export const BookmarkSpan = styled.span`
  font-weight: 500;
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: calc(12px);
`;

export const Tab = styled.div`
  padding: 16px 0;
  background-color: #fff;
  border-radius: 4px 4px 0 0;
  text-align: center;
  width: 160px;
  cursor: pointer;

  ${({ inactive }) =>
    inactive
      ? css`
          color: #78909c;
          background-color: transparent;
        `
      : css``}

  &:hover {
    color: #000;
  }
`;

export const TabText = styled.p`
  font-size: 0.85rem;
`;

export const Content = styled.div`
  padding-left: 21vw;
`;

export const ContentText = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  padding-top: 1em;
`;

export const ContentSpan = styled.span`
  color: #1890ff;
`;

export const ContentTextBold = styled.span`
  font-weight: 700;
`;

export const Check = styled(Checkbox)`
  margin-right: 5px;
  .ant-checkbox-wrapper {
    width: 12px !important;
    height: 12px !important;
  }

  .ant-checkbox {
    width: 14px !important;
    height: 14px !important;
  }

  .ant-checkbox-input {
    height: 100%; 
    width: 100%;
  }

  .ant-checkbox-inner {
    max-width: 100%;
    max-height: 100%; 
  }
`;
