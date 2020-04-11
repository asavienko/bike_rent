import styled from "styled-components";

export const StyledButton = styled.button`
         border: 2px solid;
         border-radius: 5px;
         padding: 10px;
         width: 120px;
         margin-left: 20px;
         ${({ buttonColor }) => {
           switch (buttonColor) {
             case "red":
               return `
          color: #ffffff;
          border-color: #ff2940; 
          background: #ff2940;`;
             case "green":
               return `
          color: #ffffff;
          border-color: #21a586; 
          background: #23ba99;`;
             case "blue":
               return `
          color: #ffffff;
          border-color: #263786;
          background: #3750c7;`;
             default:
               return `
          color: #555555;
          border-color: #9d9d9d;
          background: #ffffff;`;
           }
         }};
         :hover {
           opacity: 0.8;
         }
         transition: 0.3s;
       `;
