import styled, { css } from "styled-components";
import { FaBookmark, FaCheck } from "react-icons/fa";
import { Checkbox, Table } from "antd";
import { BREAKPOINTS } from "../constants/index";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  padding-top: 50px;
  text-align: start;
  padding-bottom: 4rem;
  &::-webkit-scrollbar {
    height: 3px;
  }
  @media only screen and (max-width: ${BREAKPOINTS.x175}) {
    padding-bottom: 2.5rem;
  }
`;

export const Switch = styled.div`
  background-color: #f5f5f5;
  padding-top: 20px;
  width: 100%;
  padding-left: 21vw;
  @media only screen and (max-width: ${BREAKPOINTS.x175}) {
    padding-left: 4.25%;
  }
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
  @media only screen and (max-width: ${BREAKPOINTS.x175}) {
    padding-left: 4.25vw;
  }
`;

export const ContentText = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  padding-top: 1em;
  text-align: start;
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

export const StyledTableContainer = styled(Table)`
  width: 72%;
  margin-top: 19px;

  border: 1px solid #eeeeee;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px 0;

  tbody {
    background: #fafafa;
    color: #808080;
  }

  .ant-table-thead {
    th::before {
      background-color: transparent !important;
    }
    .ant-table-cell {
      background-color: #fff;
    }
  }

  .ant-table-tbody {
    padding: 8px !important;
  }
  .ant-table-tbody > tr > td {
    padding: 8px !important;
  }

  th {
    padding: 8px !important;
    border-bottom: 1px solid #dddddd !important;
  }

  @media only screen and (max-width: ${BREAKPOINTS.x100}) {
    .ant-table-row {
      .ant-table-cell {
        vertical-align: top;
      }
    }
  }
  @media only screen and (max-width: ${BREAKPOINTS.x175}) {
    width: 95.75%;
  }
  overflow-x: scroll;
`;

export const TitleContainer = styled.p`
  max-width: 200px;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  color: #1890ff;
`;

export const DifficultyTag = styled.p`
  color: #fff;
  width: fit-content;
  border-radius: 1020px;
  font-weight: 700;
  font-size: 75%;
  padding: 0.1em 0.7em;
  line-height: 1.5;
  ${({ easy, medium }) =>
    easy
      ? css`
          background-color: rgb(0 184 163);
        `
      : medium
      ? css`
          background-color: rgb(255 192 30);
        `
      : css`
          background-color: #d9534f;
        `}
`;

export const FrequencyBar = styled.div`
  background-color: #f5f5f5;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 12px;
  @media only screen and (max-width: ${BREAKPOINTS.x100}) {
    margin-top: 2px;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Tag = styled.p`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1px 5px;
  font-size: 12px;
  width: fit-content;
  background-color: #fff;
  cursor: pointer;
  color: #333;
  margin: 2px 0;
  margin-right: 2px;
  &:hover {
    background-color: #ddd;
  }
`;

export const DescriptionContainer = styled.div`
  padding-right: 28%;
  padding-top: 1rem;
  @media only screen and (max-width: ${BREAKPOINTS.x100}) {
    padding-right: 4.25%;
  }
`;

export const CheckIcon = styled(FaCheck)`
  @media only screen and (max-width: ${BREAKPOINTS.x100}) {
    margin-top: 5px;
  }
`;
