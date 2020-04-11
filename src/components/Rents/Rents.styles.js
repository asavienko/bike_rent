import styled from "styled-components";
import { myTheme } from "../../styles/myTheme";

export const StyledItem = styled.div`
  background: #ffffff;
  margin: 15px 0;
  padding: 32px;
  border: ${myTheme.defaultBorder};
  border-radius: ${myTheme.defaultBorderRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
