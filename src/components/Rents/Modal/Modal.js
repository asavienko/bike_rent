import React from "react";
import {
  StyledBackGround,
  StyledBlockContent,
  StyledWrapper
} from "./Modal.styles";
import { StyledButton } from "../../../styles/index.styles";

const Modal = ({ display, title, onSubmit, onClose, content }) => {
  return (
    display && (
      <StyledBackGround>
        <StyledWrapper>
          {title && <h4>{title}</h4>}
          {content && <StyledBlockContent>{content}</StyledBlockContent>}
          <div>
            <StyledButton onClick={onClose}>Cancel</StyledButton>
            <StyledButton onClick={onSubmit} buttonColor="red">
              Delete
            </StyledButton>
          </div>
        </StyledWrapper>
      </StyledBackGround>
    )
  );
};

export default Modal;
