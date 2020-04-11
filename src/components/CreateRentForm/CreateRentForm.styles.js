import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background: #e9eaee;
  border: 1px solid #d7d8db;
  border-radius: 4px;
  padding: 25px;
`;
export const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  width: ${({ myWidth }) => myWidth || "unset"};
  color: #6e6e6e;
  & > input,
  & > select {
    margin-top: 8px;
    padding: 10px;
    border: 1px solid #d7d8db;
    border-radius: 3px;
    color: #6e6e6e;
  }
`;
