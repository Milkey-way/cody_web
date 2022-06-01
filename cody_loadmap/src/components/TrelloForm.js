import React from "react";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import Textarea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import ColorButton from "./ColorButton"
import Sidebar from "./Sidebar";

const Container = styled.div`
  width: 284px;
  margin-bottom: 8px;
`;

const StyledCard = styled(Card)`
  min-height: 85px;
  padding: 6px 8px 2px;
`;

const StyledTextArea = styled(Textarea)`
  resize: none;
  width: 100%;
  overflow: hidden;
  outline: none;
  border: none;
`;

const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const StyledIcon = styled(Icon)`
  margin-left: 8px;
  cursor: pointer;
`;

let color = "";

export function SelectColor (selectColor) {
  console.log("!!! selectcolor: "+selectColor.color);
  color = selectColor.color;

  return(<div><TrelloForm
    color={color} /></div>);
}

const TrelloForm = React.memo(
  ({ list, text = "", onChange, closeForm, children, color }) => {
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";

    const handleFocus = e => {
      e.target.select();
    };
    
    console.log("!!!"+text);
    console.log("!!!"+color);

    // const handleColor = (props) => {
    //   const {color}= props;
    //   console.log("!!!color값: "+color);
    // }

    return (
      <Container>
        <StyledCard>
          <div style={{ color: color }}>
          <p style={{ color: color }}> {text}</p>
          </div>   
        </StyledCard>
        <ButtonContainer>
          {children}
          <StyledIcon onMouseDown={closeForm}>close</StyledIcon>
        </ButtonContainer>
      </Container>
    );
  }
);

export default TrelloForm;