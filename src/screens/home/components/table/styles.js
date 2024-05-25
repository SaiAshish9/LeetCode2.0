import styled, { css } from "styled-components";
import { Table } from "antd";
import { BREAKPOINTS } from "../../../constants";

export const Container = styled.div`
  background-color: red;
  width: 100%;
  height: 50vh;
  margin-bottom: 3rem;
`;

export const StyledTableContainer = styled(Table)`
  overflow-x: scroll;
  tr {
    color: #fff;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      color: rgb(10 132 255);
    }
  }

  &::-webkit-scrollbar {
    height: 3px;
    @media only screen and (max-width: ${BREAKPOINTS.md}) {
      display: none;
    }
  }

  tr:nth-child(even) {
    background: rgb(40 40 40);
    border-bottom: none;
    cursor: pointer;
    td {
      border-bottom: none;
    }
  }

  tr:nth-child(odd) {
    background: rgb(26 26 26);
    border-bottom: none;
    cursor: pointer;
    td {
      border-bottom: none;
    }
  }

  :where(.css-dev-only-do-not-override-mxhywb).ant-table-wrapper
    .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(
      .ant-table-row-expand-icon-cell
    ):not([colspan])::before,
  :where(.css-dev-only-do-not-override-mxhywb).ant-table-wrapper
    .ant-table-thead
    > tr
    > td:not(:last-child):not(.ant-table-selection-column):not(
      .ant-table-row-expand-icon-cell
    ):not([colspan])::before {
    width: 0px;
  }

  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td,
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background: unset;
  }

  .anticon {
    color: #eff2f699;
    font-size: 0.6rem;
  }

  .ant-table-tbody {
    padding: 11px 8px !important;
  }
  .ant-table-tbody > tr > td {
    padding: 11px 8px !important;
  }

  th {
    padding: 11px 8px !important;
  }

  .ant-table-thead {
    .ant-table-cell {
      background: rgb(26 26 26) !important;
      color: #eff2f699;
      font-weight: 400;
      border-bottom: 1px solid rgb(61 61 61);
    }
    th {
      border-start-start-radius: 0px !important;
    }
    th {
      border-top: none;
    }
    td:first-child,
    th:first-child {
      border-left: none;
    }
    border-left: none;
    th::before {
      background-color: transparent !important;
    }
  }
  margin-bottom: 3rem;

  .ant-select-dropdown {
    color: #eff1f6bf !important;
    background: rgb(48 48 48);
  }

  .ant-select-item-option-content {
    color: #fff !important;
    font-weight: 300;
  }

  .ant-select-item-option-active,
  .ant-select-item-option-selected {
    background: rgb(92 92 92) !important;
    font-weight: 400;
  }

  .ant-pagination-item,
  .ant-pagination-item-container,
  .ant-select-selector {
    box-shadow: 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
      0px 2px 8px #00000029;
    a,
    span {
      color: #eff1f6bf !important;
    }
    color: #eff1f6bf;
    background-color: #ffffff1a !important;
    border-radius: 5px;
    border: none !important;
  }

  .ant-pagination-item-container {
    opacity: 0.4;
  }

  .ant-pagination-item-active {
    a {
      color: #fff !important;
    }
    background: rgb(92 92 92) !important;
  }

  .ant-pagination-item-link {
    box-shadow: 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
      0px 2px 8px #00000029;
    a,
    span {
      color: #eff1f6bf !important;
    }
    span {
      font-size: 7.5px;
    }
    color: #eff1f6bf;
    background-color: #ffffff1a !important;
    border-radius: 5px;
    border: none;
    font-size: 9px;
    span {
      position: relative;
      bottom: 2px;
    }
  }

  .ant-pagination-disabled {
    opacity: 0.4;
  }
`;

export const StyledStatusIcon = styled.img`
  width: 13.5px;
  height: 13.5px;
`;

export const DifficultyTag = styled.p`
  font-size: 0.8rem;
  ${({ easy, medium }) =>
    easy
      ? css`
          color: rgb(0 184 163);
        `
      : medium
      ? css`
          color: rgb(255 192 30);
        `
      : css`
          color: rgb(255 55 95);
        `}
`;

export const SpanCont = styled.div`
  background: #ffffff1a;
  height: 0.5rem;
  width: calc(50% - 0.625rem);
  ${({ right }) =>
    !right
      ? css`
          border-bottom-left-radius: 0.5rem;
          border-top-left-radius: 0.5rem;
        `
      : css`
          border-bottom-right-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
        `}
`;

export const FrequencyCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
