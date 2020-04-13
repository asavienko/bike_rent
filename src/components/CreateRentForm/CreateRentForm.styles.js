import styled from "styled-components";
import { myTheme } from "../../styles/myTheme";

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background: #e9eaee;
  border: ${myTheme.defaultBorder};
  border-radius: ${myTheme.defaultBorderRadius};
  padding: 32px;
`;
export const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  width: ${({ customWidth }) => customWidth || "unset"};
  color: #6e6e6e;
  input,
  select {
    margin-top: 8px;
    padding: 8px;
    border: ${myTheme.defaultBorder};
    border-radius: 2px;
    color: #6e6e6e;
  }
`;
