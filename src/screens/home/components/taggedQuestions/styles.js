import styled, { css } from "styled-components";

export const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  background-color: #ffffff1a;
  outline: 2px solid #0000;
  outline-offset: 2px;
  padding-right: 0.75rem;
  padding-bottom: 0.35rem;
  padding-top: 0.35rem;
  width: 100%;
  border-radius: 0.375rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  input {
    background-color: transparent;
    font-size: 13.2px;
    border: none;
    outline: none;
    color: #eff1f6bf;
    margin-left: 0.54rem;
    width: 100%;
  }
  img {
    margin-left: 0.75rem;
  }
`;

export const CardTitle = styled.p`
  font-size: 0.825rem;
  line-height: 1.25rem;
  color: #eff1f6bf;
  font-weight: 500;
`;

export const Card = styled.div`
  background: rgb(40 40 40);
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
  margin-bottom: 1rem;
`;

export const TagsContainer = styled.div`
  padding-bottom: 0.5rem;
  ${({ height }) => css`
    height: ${height} !important;
  `};
  .slick-slider {
    width: 100%;
  }
  .slick-track {
    width: 100%;
  }
  overflow-y: hidden;
`;

export const SlickItem = styled.div`
  display: flex !important;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

export const TagConst = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 9999px;
  align-items: center;
  color: #eff2f699;
  background-color: #ffffff1a;
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  max-width: 90%;
  overflow-x: hidden;
  span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  text-align: start;
  white-space: nowrap;
  font-size: 0.75rem;
  margin-top: 1rem;
  margin-right: 0.75rem;
  width: fit-content;
  font-weight: 500;
  line-height: 1.5rem;
  cursor: pointer;
`;

export const TagSpan = styled.span`
  display: inline;
  align-items: center;
  justify-content: center;
  background-color: #ffa116;
  color: rgb(38 38 38);
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  border-radius: 9999px;
  text-overflow: initial !important;
  margin-right: 0rem;
  margin-left: 0.25rem;
`;

export const ArrowLeftBackgroundContainer = styled.div`
  background-color: #ffffff12;
  border-radius: 5px;
  cursor: pointer;
`;

export const ArrowRightBackgroundContainer = styled.div`
  background-color: #ffffff12;
  border-radius: 5px;
  margin-left: 0.375rem;
  cursor: pointer;
`;

export const ArrowContainers = styled.div`
  display: flex;
  align-items: center;
`;

export const DefaultText = styled.p`
  color: rgb(74 74 74);
  font-size: 0.85rem;
  line-height: 1.25rem;
  text-align-center;
  margin-bottom: 0.25rem;
`;
