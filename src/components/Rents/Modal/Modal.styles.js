import styled from "styled-components";
import { myTheme } from "../../../styles/myTheme";

export const StyledWrapper = styled.div`
  border: ${myTheme.defaultBorder};
  border-radius: ${myTheme.defaultBorderRadius};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  text-align: center;
  padding: 0 16px 16px;
`;

export const StyledBlockContent = styled.div`
  padding: 0 16px 24px;
`;

export const StyledBackGround = styled.div`
  background: rgba(0, 0, 0, 0.31);
  width: 100%;
  height: 100%;
  display: block;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;
