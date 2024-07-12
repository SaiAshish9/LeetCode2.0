import styled from "styled-components";

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
  padding-left: 2.25rem;
  padding-bottom: 0.375rem;
  padding-top: 0.375rem;
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
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 0.5rem;
`;

export const TagConst = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 9999px;
  white-space: nowrap;
  align-items: center;
  color: #eff2f699;
  background-color: #ffffff1a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  margin-top: 1rem;
  margin-right: 0.75rem;
  width: fit-content;
  font-weight: 500;
  line-height: 1.5rem;
  cursor: pointer;
`;

export const TagSpan = styled.span`
  display: flex;
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
  margin-left: 0.25rem;
`;
