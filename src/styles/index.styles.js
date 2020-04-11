import styled from "styled-components";
import { myTheme } from "./myTheme";

export const StyledButton = styled.button`
  border: 2px solid;
  border-radius: 4px;
  padding: 10px;
  width: 120px;
  margin: 0 10px;
  ${({ buttonColor }) => {
    switch (buttonColor) {
      case "red":
        return myTheme.redButton;
      case "green":
        return myTheme.greenButton;
      case "blue":
        return myTheme.blueButton;
      default:
        return myTheme.defaultButton;
    }
  }};
  :hover {
    opacity: 0.8;
  }
  transition: 0.3s;
`;
